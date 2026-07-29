package project

import (
	"errors"
	"time"
)

var (
	ErrProjectNotFound   = errors.New("project not found")
	ErrBlueprintNotFound = errors.New("blueprint not found")
	ErrSpecNotFound      = errors.New("spec not found")
	ErrDuplicateProject  = errors.New("project with this ID already exists")
	ErrUnauthorized      = errors.New("unauthorized: insufficient permissions")
)

type Project struct {
	ID          string    `json:"id"`
	OwnerID     string    `json:"owner_id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Location    string    `json:"location"`
	Status      string    `json:"status"`
	CreatedAt   time.Time `json:"created_at"`
}

type Blueprint struct {
	ID          string    `json:"id"`
	ProjectID   string    `json:"project_id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	FilePath    string    `json:"file_path"`
	Version     int       `json:"version"`
	CreatedAt   time.Time `json:"created_at"`
}

type Spec struct {
	ID          string    `json:"id"`
	ProjectID   string    `json:"project_id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	SectionCode string    `json:"section_code"`
	CreatedAt   time.Time `json:"created_at"`
}
