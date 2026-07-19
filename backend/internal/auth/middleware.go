package auth

import (
	"errors"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

// ContextKey defines a custom type for Gin context keys.
type ContextKey string

const (
	UserIDContextKey   ContextKey = "user_id"
	UserRoleContextKey ContextKey = "user_role"
)

// AuthMiddleware validates JWTs and injects user information into the request context.
func AuthMiddleware(jwtSecret []byte) gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"error": "authorization header is required",
			})
			return
		}

		parts := strings.SplitN(authHeader, " ", 2)

		if len(parts) != 2 || !strings.EqualFold(parts[0], "Bearer") {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"error": "authorization header must be in the format: Bearer <token>",
			})
			return
		}

		tokenString := parts[1]

		claims := &CustomClaims{}

		token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
			if token.Method != jwt.SigningMethodHS256 {
				return nil, errors.New("unexpected signing method")
			}

			return jwtSecret, nil
		})

		if err != nil || !token.Valid {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"error": "invalid or expired token",
			})
			return
		}

		if claims.ID == "" || claims.Role == "" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"error": "token payload is incomplete",
			})
			return
		}

		c.Set(string(UserIDContextKey), claims.ID)
		c.Set(string(UserRoleContextKey), Role(claims.Role))

		c.Next()
	}
}

// RequireRoles authorizes users based on their assigned roles.
func RequireRoles(allowedRoles ...Role) gin.HandlerFunc {
	return func(c *gin.Context) {
		value, exists := c.Get(string(UserRoleContextKey))
		if !exists {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"error": "authentication context missing",
			})
			return
		}

		userRole, ok := value.(Role)
		if !ok {
			c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
				"error": "failed to resolve user role",
			})
			return
		}

		for _, role := range allowedRoles {
			if userRole == role {
				c.Next()
				return
			}
		}

		c.AbortWithStatusJSON(http.StatusForbidden, gin.H{
			"error": "access denied",
		})
	}
}