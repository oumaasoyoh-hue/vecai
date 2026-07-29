package main

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"

	"vecai/backend/internal/db"
	"vecai/backend/project"
)

type FormRegisterRequest struct {
	Name     string `form:"name" binding:"required"`
	Email    string `form:"email" binding:"required,email"`
	Password string `form:"password" binding:"required"`
	Role     string `form:"role" binding:"required"`
}

type FormLoginRequest struct {
	Email    string `form:"email" binding:"required,email"`
	Password string `form:"password" binding:"required"`
}

func main() {
	dbConnStr := getEnv("DATABASE_URL", "postgres://postgres:postgres@localhost:5433/vecai?sslmode=disable")
	migrationsPath := getEnv("MIGRATIONS_PATH", "backend/db/migrations")
	port := getEnv("PORT", "8080")

	log.Println("[INIT] Connecting to PostgreSQL...")
	dbConn, err := db.InitDB(dbConnStr)
	if err != nil {
		log.Fatalf("[FATAL] Could not connect to database: %v", err)
	}
	defer dbConn.Close()

	log.Println("[INIT] Running database migrations...")
	if err := db.RunMigrations(dbConn, migrationsPath); err != nil {
		log.Fatalf("[FATAL] Migration failed: %v", err)
	}

	// Initialize Project Domain Services
	projectRepo := project.NewPostgresRepository(dbConn)
	projectService := project.NewService(projectRepo)
	projectHandler := project.NewHandler(projectService)

	router := gin.Default()
	router.Use(gin.Recovery())
	router.Use(gin.Logger())

	// Load HTML templates
	router.LoadHTMLGlob("frontend/*.html")

	// Render Login / Register UI Pages
	router.GET("/", renderLoginView)
	router.GET("/login", renderLoginView)
	router.GET("/register", func(c *gin.Context) {
		c.HTML(http.StatusOK, "login.html", gin.H{
			"IsRegister": true,
		})
	})

	// Render Home / Dashboard UI Page
	router.GET("/home", func(c *gin.Context) {
		ownerID := c.DefaultQuery("owner_id", "dev-user-123")
		userName := c.DefaultQuery("user_name", "Lead Engineer")

		projects, err := projectService.ListProjectsByOwner(c.Request.Context(), ownerID)
		if err != nil {
			log.Printf("[ERROR] Could not fetch projects for dashboard: %v", err)
			projects = []*project.Project{}
		}

		c.HTML(http.StatusOK, "home.html", gin.H{
			"UserName": userName,
			"OwnerID":  ownerID,
			"Projects": projects,
		})
	})

	// Process Native HTML Form Register
	router.POST("/register", func(c *gin.Context) {
		var req FormRegisterRequest
		if err := c.ShouldBind(&req); err != nil {
			c.HTML(http.StatusBadRequest, "login.html", gin.H{
				"Error":      "Invalid registration data. Please check all fields.",
				"IsRegister": true,
			})
			return
		}

		// Hash user password before storing
		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
		if err != nil {
			c.HTML(http.StatusInternalServerError, "login.html", gin.H{
				"Error":      "Failed to secure user credentials.",
				"IsRegister": true,
			})
			return
		}

		// Insert user directly into database
		query := `
			INSERT INTO users (id, name, email, password_hash, role, created_at)
			VALUES (gen_random_uuid(), $1, $2, $3, $4, NOW())
		`
		_, err = dbConn.ExecContext(c.Request.Context(), query, req.Name, req.Email, string(hashedPassword), req.Role)
		if err != nil {
			log.Printf("[AUTH ERROR] Register failed for %s: %v", req.Email, err)
			c.HTML(http.StatusConflict, "login.html", gin.H{
				"Error":      "An account with that email already exists.",
				"IsRegister": true,
			})
			return
		}

		log.Printf("[AUTH] User Registered Successfully: %s (%s)", req.Name, req.Email)

		// Success! Render login with confirmation
		c.HTML(http.StatusOK, "login.html", gin.H{
			"Success":    "Account created successfully! You can now sign in.",
			"IsRegister": false,
		})
	})

	// Process Native HTML Form Login
	router.POST("/login", func(c *gin.Context) {
		var req FormLoginRequest
		if err := c.ShouldBind(&req); err != nil {
			c.HTML(http.StatusBadRequest, "login.html", gin.H{
				"Error":      "Please enter a valid email and password.",
				"IsRegister": false,
			})
			return
		}

		var userID string
		var name string
		var storedPasswordHash string

		query := `SELECT id, name, password_hash FROM users WHERE email = $1`
		err := dbConn.QueryRowContext(c.Request.Context(), query, req.Email).Scan(&userID, &name, &storedPasswordHash)

		if errors.Is(err, sql.ErrNoRows) {
			c.HTML(http.StatusUnauthorized, "login.html", gin.H{
				"Error":      "Invalid email or password.",
				"IsRegister": false,
			})
			return
		} else if err != nil {
			log.Printf("[AUTH ERROR] Login DB query failed: %v", err)
			c.HTML(http.StatusInternalServerError, "login.html", gin.H{
				"Error":      "Authentication system error.",
				"IsRegister": false,
			})
			return
		}

		// Verify BCrypt Password
		if err := bcrypt.CompareHashAndPassword([]byte(storedPasswordHash), []byte(req.Password)); err != nil {
			c.HTML(http.StatusUnauthorized, "login.html", gin.H{
				"Error":      "Invalid email or password.",
				"IsRegister": false,
			})
			return
		}

		log.Printf("[AUTH] Login Approved for: %s (ID: %s)", req.Email, userID)

		// Redirect straight to dashboard with query parameters
		redirectURL := fmt.Sprintf("/home?owner_id=%s&user_name=%s", userID, url.QueryEscape(name))
		c.Redirect(http.StatusSeeOther, redirectURL)
	})

	// Health Check
	router.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "ok", "time": time.Now().UTC()})
	})

	// API Routes for JSON clients / integrations
	apiGroup := router.Group("/api/v1")
	apiGroup.Use(OptionalAuthMiddleware())
	projectHandler.RegisterRoutes(apiGroup)

	srv := &http.Server{
		Addr:    fmt.Sprintf(":%s", port),
		Handler: router,
	}

	go func() {
		log.Printf("[SERVER] Starting API server on port %s...", port)
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("[FATAL] Server startup failed: %v", err)
		}
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
	log.Println("[SERVER] Shutting down gracefully...")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := srv.Shutdown(ctx); err != nil {
		log.Fatalf("[SERVER] Forced shutdown: %v", err)
	}

	log.Println("[SERVER] Exited cleanly.")
}

func renderLoginView(c *gin.Context) {
	c.HTML(http.StatusOK, "login.html", gin.H{
		"IsRegister": false,
	})
}

func getEnv(key, defaultValue string) string {
	if value, exists := os.LookupEnv(key); exists && value != "" {
		return value
	}
	return defaultValue
}

func OptionalAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		if gin.Mode() == gin.DebugMode && c.GetHeader("Authorization") == "" {
			c.Set("userID", "dev-user-123")
			c.Next()
			return
		}
		c.Next()
	}
}