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

func (s *Service) Login(ctx context.Context, req LoginRequest) (*EnhancedAuthResponse, error) {
	// A dummy hash to execute if user is missing, matching standard argon2/bcrypt latency profiles
	const dummyHash = "$2a$10$Ax7R6w08KmxU3.Wd2m7vDu7b6Bf.BvW8rV4mG7pQ7x8C9v0z1y2x3"

	user, err := s.repo.GetByEmail(ctx, req.Email)
	
	var targetHash string
	var userFound bool

	if err != nil {
		if !errors.Is(err, ErrUserNotFound) {
			return nil, fmt.Errorf("login query failure: %w", err)
		}
		// If user doesn't exist, we evaluate against our dummy hash to mimic identical CPU load
		targetHash = dummyHash
		userFound = false
	} else {
		targetHash = user.PasswordHash
		userFound = true
	}

	// Cryptographic comparison always executes, neutralizing timing signatures
	passwordIsValid := CheckPasswordHash(req.Password, targetHash)

	if !userFound || !passwordIsValid {
		return nil, ErrInvalidCredentials
	}

	token, err := GenerateToken(user.ID, user.Email)
	if err != nil {
		return nil, fmt.Errorf("token generation failure: %w", err)
	}

	return &EnhancedAuthResponse{
		Token: token,
		User: UserResponse{
			ID:         user.ID,
			Email:      user.Email,
			Fullname:   user.Fullname,
			IsVerified: user.IsVerified,
		},
	}, nil
}