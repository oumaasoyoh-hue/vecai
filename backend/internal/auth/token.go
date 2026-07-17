package auth

import (
	"errors"
	"fmt"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var (
	ErrInvalidToken = errors.New("invalid or expired token signature")
	ErrMissingSecret = errors.New("jwt secret environment variable is missing")
)

// CustomClaims wraps your project's explicit JWTClaims with standard registered fields
type CustomClaims struct {
	ID   string `json:"id"`
	Role Role   `json:"role"`
	jwt.RegisteredClaims
}

// getJWTKey reads the secret key dynamically from the system environment
func getJWTKey() ([]byte, error) {
	secret := os.Getenv("JWT_SECRET")
	if secret == "" {
		return nil, ErrMissingSecret
	}
	return []byte(secret), nil
}

// GenerateToken creates a signed string token for a verified User entity.
func GenerateToken(userID string, role Role) (string, error) {
	jwtKey, err := getJWTKey()
	if err != nil {
		return "", fmt.Errorf("token generation failed: %w", err)
	}

	// Shorter access lifecycle (e.g., 1 hour) is recommended for production
	expirationTime := time.Now().Add(1 * time.Hour) 

	claims := &CustomClaims{
		ID:   userID,
		Role: role,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(expirationTime),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			NotBefore: jwt.NewNumericDate(time.Now()),
			Issuer:    "your-auth-service", // Hardens verification metrics
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(jwtKey)
}

// ValidateToken decodes, parses, and cryptographically checks incoming token payloads.
func ValidateToken(tokenStr string) (*CustomClaims, error) {
	jwtKey, err := getJWTKey()
	if err != nil {
		return nil, fmt.Errorf("token validation aborted: %w", err)
	}

	claims := &CustomClaims{}

	token, err := jwt.ParseWithClaims(tokenStr, claims, func(t *jwt.Token) (interface{}, error) {
		// Crucial security check: Validate that the signing method matches what we expect
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", t.Header["alg"])
		}
		return jwtKey, nil
	})

	if err != nil {
		// Clean error separation prevents internal error leakages to presentation layers
		return nil, fmt.Errorf("%w: %v", ErrInvalidToken, err)
	}

	if !token.Valid {
		return nil, ErrInvalidToken
	}

	return claims, nil
}
