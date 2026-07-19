package auth

import (
	"context"
	"errors"
	"sync"
)

var (
	ErrUserAlreadyExists = errors.New("user with this email address already exists")
	ErrUserNotFound      = errors.New("requested user account could not be found")
)

// UserRepository defines the strict interface contract for data persistence.
// Both your live SQL database implementation and this memory mock must implement this.

// MemoryUserRepository provides a thread-safe, volatile in-memory storage engine.
type MemoryUserRepository struct {
	mu    sync.RWMutex
	users map[string]User // Keyed by email address for O(1) lookups
}

// NewMemoryUserRepository instantiates the database-less mock repository layer.
func NewMemoryUserRepository() *MemoryUserRepository {
	return &MemoryUserRepository{
		users: make(map[string]User),
	}
}

// CreateUser saves a new domain user model into the volatile map.
func (r *MemoryUserRepository) CreateUser(ctx context.Context, user User) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	if _, exists := r.users[user.Email]; exists {
		return ErrUserAlreadyExists
	}

	r.users[user.Email] = user
	return nil
}

// GetUserByEmail searches for a user by their unique primary email field.
func (r *MemoryUserRepository) GetUserByEmail(ctx context.Context, email string) (User, error) {
	r.mu.RLock()
	defer r.mu.RUnlock()

	user, exists := r.users[email]
	if !exists {
		return User{}, ErrUserNotFound
	}

	return user, nil
}

// UpdateVerificationStatus flips the onboarding access flag for the target profile.
func (r *MemoryUserRepository) UpdateVerificationStatus(ctx context.Context, email string, isVerified bool) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	user, exists := r.users[email]
	if !exists {
		return ErrUserNotFound
	}

	user.IsVerified = isVerified
	r.users[email] = user
	return nil
}