package auth

import (
	"context"
	"errors"
	"net/https"
	"strings"
	"time"
)

type contextKey string
const (
	UserIdcontextKey contextKey = "userID"
	userRolecontextKey contextKey = "userID"
)

var jwtSecret = []byte("your_secure_secret_key_here")

func ProtectMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		
	})
}