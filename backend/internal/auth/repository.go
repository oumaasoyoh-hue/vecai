package auth

import (
	"context"
	"database/sql"
	"errors"
)

// sentinel errors for user database operations
var (
		ErrUserNotFound  = errors.New("User Not Found")
		ErrUaerAlreadyExists	= errors.New("user with this email already exists")
) 

// UserRepository defines the contract for managing user data storage and retrieval
type UserRepository interface {
	CreateUser(ctx context.Context, user *User) error
	GetByEmail(ctx context.Context, email string) (*User, error)
	UpdateVerificationStatus(ctx context.Context, email string, isVerified bool) error
}