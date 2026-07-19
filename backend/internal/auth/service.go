package auth

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"errors"
	"time"
)

var (
	ErrInvalidCredentials = errors.New("invalid email or password choice")
	ErrAccountNotVerified = errors.New("account email verification is pending")
)

// UserRepository contract models what structural methods your service needs
type UserRepository interface {
	CreateUser(ctx context.Context, user User) error
	GetUserByEmail(ctx context.Context, email string) (User, error)
	UpdateVerificationStatus(ctx context.Context, email string, isVerified bool) error
}

type Service struct {
	repo UserRepository
}

func NewService(repo UserRepository) *Service {
	return &Service{repo: repo}
}

func (s *Service) Register(ctx context.Context, req RegisterRequest) (AuthResponse, error) {
	// 1. Hash plain user text safely
	hash, err := HashPassword(req.Password)
	if err != nil {
		return AuthResponse{}, err
	}

	// 2. Mock high-entropy unique internal ID tracker string
	b := make([]byte, 8)
	rand.Read(b)
	userID := hex.EncodeToString(b)

	user := User{
		ID:           userID,
		Email:        req.Email,
		PasswordHash: hash,
		Fullname:     req.Fullname,
		Role:         req.Role,
		IsVerified:   false, // Forces user to go through verify flow next
		CreatedAt:    time.Now(),
	}

	// 3. Persist down to repository layer interface
	if err := s.repo.CreateUser(ctx, user); err != nil {
		return AuthResponse{}, err
	}

	// 4. Generate token output immediately
	token, err := GenerateToken(user)
	if err != nil {
		return AuthResponse{}, err
	}

	return AuthResponse{Token: token, User: user}, nil
}

func (s *Service) Login(ctx context.Context, req LoginRequest) (AuthResponse, error) {
	user, err := s.repo.GetUserByEmail(ctx, req.Email)
	if err != nil {
		return AuthResponse{}, ErrInvalidCredentials
	}

	// Use crypto check helper
	if !CheckPasswordHash(req.Password, user.PasswordHash) {
		return AuthResponse{}, ErrInvalidCredentials
	}

	// Guard verification flag
	if !user.IsVerified {
		return AuthResponse{}, ErrAccountNotVerified
	}

	token, err := GenerateToken(user)
	if err != nil {
		return AuthResponse{}, err
	}

	return AuthResponse{Token: token, User: user}, nil
}

func (s *Service) Verify(ctx context.Context, req VerifyRequest) (AuthResponse, error) {
	// Simple mock verification loop check: we'll automatically pass if token is "123456"
	if req.Token != "123456" {
		return AuthResponse{}, errors.New("invalid or expired verification code sequence")
	}

	if err := s.repo.UpdateVerificationStatus(ctx, req.Email, true); err != nil {
		return AuthResponse{}, err
	}

	user, err := s.repo.GetUserByEmail(ctx, req.Email)
	if err != nil {
		return AuthResponse{}, err
	}

	token, err := GenerateToken(user)
	if err != nil {
		return AuthResponse{}, err
	}

	return AuthResponse{Token: token, User: user}, nil
}