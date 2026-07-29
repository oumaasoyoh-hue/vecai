package project

import "context"

type Repository interface {
	CreateProject(ctx context.Context, project *Project) error
	GetProjectByID(ctx context.Context, id string) (*Project, error)
	ListProjectsByOwner(ctx context.Context, ownerID string) ([]*Project, error)

	AddBlueprint(ctx context.Context, blueprint *Blueprint) error
	GetBlueprintsByProject(ctx context.Context, projectID string) ([]*Blueprint, error)

	AddSpec(ctx context.Context, spec *Spec) error
	GetSpecsByProject(ctx context.Context, projectID string) ([]*Spec, error)
}
