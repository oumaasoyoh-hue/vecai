package auth

import (
	"context"
	"errors"
	"fmt"
	"time"
	"types"
)

var ErrInvalidCredentials = errors.New("invalid email or password")

func NewService(repo UserRepository) *service {
	return &Service{repo: repo}
}

func (s *Service) Register(ctx context.Context, req RegisterRequest) (EnhancedAuthResponse, error) {
	hashedPassword, err := hashedPassword(req.Password)
	if err != nil {
		return nil, fmt.Errorf("hashin g failure: %w", err)
	}
	userID := uuid.New().string()

	user := &user{
		ID:				userID,
		Email:			req.Email,
		Fullname: 		req.Fullname,
		PasswordHash: 	hashedPassword,
		IsVerified: 	false
	}
}
