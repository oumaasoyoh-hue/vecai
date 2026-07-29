package project

import (
    "context"
    "errors"
    "fmt"
    "time"

    "github.com/google/uuid"
)

var (
   // ErrProjectNotFound = errors.New("project not found")
    ErrInvalidInput    = errors.New("invalid project input")
)

type Service struct {
    repo Repository
}

func NewService(repo Repository) *Service {
    return &Service{repo: repo}
}

func (s *Service) CreateProject(ctx context.Context, ownerID, name, description, location string) (*Project, error) {
    if name == "" {
        return nil, fmt.Errorf("%w: name is required", ErrInvalidInput)
    }

    p := &Project{
        ID:          uuid.New().String(),
        OwnerID:     ownerID,
        Name:        name,
        Description: description,
        Location:    location,
        Status:      "ACTIVE",
        CreatedAt:   time.Now().UTC(),
    }

    if err := s.repo.CreateProject(ctx, p); err != nil {
        return nil, err
    }
    return p, nil
}

func (s *Service) GetProjectByID(ctx context.Context, id string) (*Project, error) {
    return s.repo.GetProjectByID(ctx, id)
}

func (s *Service) ListProjectsByOwner(ctx context.Context, ownerID string) ([]*Project, error) {
    return s.repo.ListProjectsByOwner(ctx, ownerID)
}

func (s *Service) AddBlueprint(ctx context.Context, projectID, title, description, filePath string, version int) (*Blueprint, error) {
    b := &Blueprint{
        ID:          uuid.New().String(),
        ProjectID:   projectID,
        Title:       title,
        Description: description,
        FilePath:    filePath,
        Version:     version,
        CreatedAt:   time.Now().UTC(),
    }

    if err := s.repo.AddBlueprint(ctx, b); err != nil {
        return nil, err
    }
    return b, nil
}

func (s *Service) GetBlueprintsByProject(ctx context.Context, projectID string) ([]*Blueprint, error) {
    return s.repo.GetBlueprintsByProject(ctx, projectID)
}

func (s *Service) AddSpec(ctx context.Context, projectID, title, description, sectionCode string) (*Spec, error) {
    spec := &Spec{
        ID:          uuid.New().String(),
        ProjectID:   projectID,
        Title:       title,
        Description: description,
        SectionCode: sectionCode,
        CreatedAt:   time.Now().UTC(),
    }

    if err := s.repo.AddSpec(ctx, spec); err != nil {
        return nil, err
    }
    return spec, nil
}

func (s *Service) GetSpecsByProject(ctx context.Context, projectID string) ([]*Spec, error) {
    return s.repo.GetSpecsByProject(ctx, projectID)
}