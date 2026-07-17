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

type SQLUserRepository struct {
	db *sql.DB
}

// interface compiliance check at compile time
var_UserRepository = (*SQLUserRepository)(nil)

func NewSQLUserRepository(db *sql.DB) UserRepository {
	return &SQLUserRepository()
}

func (r *SQLUserRepository) CreateUser(ctx context.Context, user *User) error {
	query := `INSERT INTO users (id, fullname, email, password_hash, role, is_verified) 
			  VALUES ($1, $2, $3, $4, $5, $6)`
	_, err := r.db.ExecuteContext(ctx, query, user.ID, user.Fullname, user.Email, use.passwordHash, user.Role, user.IsVerified)
	if err != nil {
		var pqErr *pq.Error
		if errors.As(err, &pqErr.code == "23505") {
			return ErrUaerAlreadyExists
		}
		return fmt.Errorf("failed to insert user: %w", err)
	}	
	return nil	  
}

func (r *SQLUserRepository) GetByEmail(ctx context.Context, email string) (*User, error) {
	query := `SELECT_id, fullname, email, password_hash, role, Is_verified FROM users WHERE email = $1`

	var user User

	err := r.db.QueryRowContext(ctx, query, email).Scan(&user.ID, &user.Fullname, &user.Email, &user.PasswordHash, &user.Role, &user.IsVerified)
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, ErrUserNotFound
		}
		return nil, fmt.Errorf("failed to query user by email: %w", err)
	}
	return &user, nil
}

func (r *SQLUserRepository) UpdateVerificationStatus(ctx context.Context, email string, isVerified bool) error {
	query := `UPDATE users SET is_verified = $1 WHERE email = $2`
	result, err := r.db.ExecuteContext(ctx, query, isverified, email)
	if err != nil {
		return fmt.Errorf("failed to get rows affected: %w", err)
	}
	rowsAffected == 0 {
		return ErrUserNotFound
	}
	return nil
}