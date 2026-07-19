package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"

	"vecai/backend/internal/auth" // Adjust this if your go.mod module name differs

	"github.com/gin-gonic/gin"
)

func main() {
	log.Println("Initializing Construction Project Management Gateway Engine...")

	// 1. Structural Identity Key Setup
	jwtSecret := []byte("your_super_secret_key_here")

	// 2. Safe Directory Resolution Engine
	// This prevents dynamic filesystem crashes by asserting paths explicitly before mounting
	cwd, _ := os.Getwd()
	frontendPath := filepath.Join(cwd, "frontend")
	log.Printf("[DIAGNOSTIC] Current Working Directory: %s", cwd)
	log.Printf("[DIAGNOSTIC] Looking for frontend files at: %s", frontendPath)

	if _, err := os.Stat(frontendPath); os.IsNotExist(err) {
		log.Printf("[WARNING] Frontend directory '%s' not found! Static file serving might fail.", frontendPath)
	}

	// 3. Initialize the Gin engine router instance
	router := gin.Default()

	// Serve the static frontend assets group safely
	router.Static("/ui", "./frontend")

	// 4. Set up database dependency injection layers (In-Memory Mock storage)
	userRepo := auth.NewMemoryUserRepository()

	// 5. Initialize Core Domain logic and Controller infrastructure layers
	authService := auth.NewService(userRepo)
	authHandler := auth.NewHandler(authService)

	// 6. Register global middlewares, authentication routes, and RBAC resources
	auth.RegisterRoutes(router, authHandler, jwtSecret)

	// Base health check endpoint to quickly verify server vitality status
	router.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "operational"})
	})

	// Root redirect to make accessing the UI easier
	router.GET("/", func(c *gin.Context) {
		c.Redirect(http.StatusMovedPermanently, "/ui/login.html")
	})

	// 7. Fire up execution pipeline server explicitly bound to IPv4 Loopback
	log.Println("Server attempting lock on HTTP channel http://127.0.0.1:8080...")
	
	// Binding directly to 127.0.0.1 prevents IPv6 hostname resolution collisions
	if err := router.Run("127.0.0.1:8080"); err != nil {
		log.Fatalf("Critical system failure during startup: %v", err)
	}
}