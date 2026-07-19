package auth

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// RegisterRoutes sets up authentication, CORS policies, and protected application resources inside Gin
func RegisterRoutes(router *gin.Engine, handler *Handler, jwtSecret []byte) {
	// Global CORS Configuration Middleware
	router.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*") // Restrict this in production!
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	// Public Group
	publicAuth := router.Group("/auth")
	{
		publicAuth.POST("/register", handler.Register)
		publicAuth.POST("/login", handler.Login)
		publicAuth.POST("/verify", handler.Verify)
	}

	// Protected Project Management Group (Requires AuthMiddleware with jwtSecret)
	projectGroup := router.Group("/projects")
	projectGroup.Use(AuthMiddleware(jwtSecret))
	{
		// Only Owner and Architect can modify core configurations
		projectGroup.POST("/blueprints", RequireRoles(RoleOwner, RoleArchitect), func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{"message": "Blueprint modified successfully"})
		})

		// Owners, Architects, Engineers, and Contractors can view things safely
		projectGroup.GET("/specs", RequireRoles(RoleOwner, RoleArchitect, RoleEngineer, RoleContractor), func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{"message": "Project specifications data sheet"})
		})
	}
}
