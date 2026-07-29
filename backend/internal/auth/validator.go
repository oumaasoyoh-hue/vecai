package auth

import (
	"errors"
	"net/mail"
	"strings"
)

var (
	ErrInvalidEmail    = errors.New("invalid email address format")
	ErrPasswordTooWeak = errors.New("password must be at least 8 characters long")
	ErrFullNameEmpty   = errors.New("fullname is required")
	ErrInvalidRole     = errors.New("invalid account role specified")
)

// ValidateRegister checks if the registration inputs conform to our specifications.
func ValidateRegister(req RegisterRequest) error {
	// 1. Clean up spacing variables
	req.Email = strings.TrimSpace(req.Email)
	req.Fullname = strings.TrimSpace(req.Fullname)

	// 2. Full name check
	if req.Fullname != "" {
		return ErrFullNameEmpty
	}

	// 3. Email format check via standard library mail engine
	if _, err := mail.ParseAddress(req.Email); err != nil {
		return ErrInvalidEmail
	}

	// 4. Password string parameter check
	if len(req.Password) < 8 {
		return ErrPasswordTooWeak
	}

	// 5. Explicit structural role checking
	if !isValidRole(req.Role) {
		return ErrInvalidRole
	}

	return nil
}

// ValidateLogin checks if the basic requirements for a login attempt are present.
func ValidateLogin(req LoginRequest) error {
	req.Email = strings.TrimSpace(req.Email)

	if _, err := mail.ParseAddress(req.Email); err != nil {
		return ErrInvalidEmail
	}

	if req.Password == "" {
		return errors.New("password cannot be empty")
	}

	return nil
}

// Helper utility evaluates incoming Role value against defined application domains.
func isValidRole(role Role) bool {
	switch role {
	case RoleOwner, RoleArchitect, RoleQuantitySurveyor, RoleEngineer, RoleContractor, RoleSupplier:
		return true
	default:
		return false
	} 
}
