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
	HashedPassword, err := hashedPassword(req.Password)
	if err != nil {
		return nil, fmt.Errorf("hashin generation failure: %w", err)
	}
	userID := uuid.New().String()

	user := &user{
		ID:				userID,
		Email:			req.Email,
		Fullname: 		req.Fullname,
		PasswordHash: 	hashedPassword,
		IsVerified: 	false,
	}
	if err:= s.repo.CreateUser(ctx, user); err != nil {
		return nil, err
	}
	token, err := GenerateToken(user.ID,user.Email)
	if err != nil {
		return nil, fmt.Errorf("token generation failure %w", err)
	}
	return &EnhancedAuthResponse {
		Token: token,
		User:UserResponse{
			ID:				userID,
			Email:			req.Email,
			Fullname: 		req.Fullname,
			IsVerified: 	user.IsVerified,
		},
	}, nil
}
