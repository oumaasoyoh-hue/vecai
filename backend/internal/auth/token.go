package auth

import (
	"errors"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

// Replace this with a secure string loaded via os.Getenv("JWT_SECRET") in production
var jwtSecret = []byte("super-secret-construction-platform-key")

// GenerateToken wraps user data and metadata into a signed string valid for 24 hours
func GenerateToken(user User) (string, error) {
	claims := CustomClaims{
		ID:   user.ID,
		Role: user.Role,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			Subject:   user.Email,
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(jwtSecret)
}

// ValidateToken parses the incoming JWT and ensures the cryptographic integrity remains clean
func ValidateToken(tokenString string) (*CustomClaims, error) {
	token, err := jwt.ParseWithClaims(tokenString, &CustomClaims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("unexpected token signing algorithm configuration")
		}
		return jwtSecret, nil
	})

	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(*CustomClaims); ok && token.Valid {
		return claims, nil
	}

	return nil, errors.New("invalid signature parsing outcome")
}