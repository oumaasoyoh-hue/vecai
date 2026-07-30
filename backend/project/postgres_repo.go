package project

import (
    "context"
    "database/sql"
    "errors"
    "time"
)

type PostgresRepository struct {
    db *sql.DB
}

func NewPostgresRepository(db *sql.DB) Repository {
    return &PostgresRepository{db: db}
}

func (r *PostgresRepository) CreateProject(ctx context.Context, p *Project) error {
    if p.CreatedAt.IsZero() {
        p.CreatedAt = time.Now().UTC()
    }
    if p.Status == "" {
        p.Status = "ACTIVE"
    }

    query := `
        INSERT INTO projects (id, owner_id, name, description, location, status, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
    `
    _, err := r.db.ExecContext(ctx, query, p.ID, p.OwnerID, p.Name, p.Description, p.Location, p.Status, p.CreatedAt)
    return err
}

func (r *PostgresRepository) GetProjectByID(ctx context.Context, id string) (*Project, error) {
    query := `
        SELECT id, owner_id, name, description, location, status, created_at
        FROM projects
        WHERE id = $1
    `
    p := &Project{}
    err := r.db.QueryRowContext(ctx, query, id).Scan(
        &p.ID, &p.OwnerID, &p.Name, &p.Description, &p.Location, &p.Status, &p.CreatedAt,
    )
    if errors.Is(err, sql.ErrNoRows) {
        return nil, ErrProjectNotFound
    }
    return p, err
}

func (r *PostgresRepository) ListProjectsByOwner(ctx context.Context, ownerID string) ([]*Project, error) {
    query := `
        SELECT id, owner_id, name, COALESCE(description, ''), COALESCE(location, ''), status, created_at
        FROM projects
        WHERE owner_id = $1
        ORDER BY created_at DESC
    `
    rows, err := r.db.QueryContext(ctx, query, ownerID)
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    projects := make([]*Project, 0)
    for rows.Next() {
        p := &Project{}
        if err := rows.Scan(&p.ID, &p.OwnerID, &p.Name, &p.Description, &p.Location, &p.Status, &p.CreatedAt); err != nil {
            return nil, err
        }
        projects = append(projects, p)
    }
    return projects, rows.Err()
}

func (r *PostgresRepository) AddBlueprint(ctx context.Context, b *Blueprint) error {
    if b.CreatedAt.IsZero() {
        b.CreatedAt = time.Now().UTC()
    }

    query := `
        INSERT INTO blueprints (id, project_id, title, description, file_path, version, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
    `
    _, err := r.db.ExecContext(ctx, query, b.ID, b.ProjectID, b.Title, b.Description, b.FilePath, b.Version, b.CreatedAt)
    return err
}

func (r *PostgresRepository) GetBlueprintsByProject(ctx context.Context, projectID string) ([]*Blueprint, error) {
    query := `
        SELECT id, project_id, title, COALESCE(description, ''), file_path, version, created_at
        FROM blueprints
        WHERE project_id = $1
        ORDER BY version DESC
    `
    rows, err := r.db.QueryContext(ctx, query, projectID)
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    blueprints := make([]*Blueprint, 0)
    for rows.Next() {
        b := &Blueprint{}
        if err := rows.Scan(&b.ID, &b.ProjectID, &b.Title, &b.Description, &b.FilePath, &b.Version, &b.CreatedAt); err != nil {
            return nil, err
        }
        blueprints = append(blueprints, b)
    }
    return blueprints, rows.Err()
}

func (r *PostgresRepository) AddSpec(ctx context.Context, s *Spec) error {
    if s.CreatedAt.IsZero() {
        s.CreatedAt = time.Now().UTC()
    }

    query := `
        INSERT INTO specs (id, project_id, title, description, section_code, created_at)
        VALUES ($1, $2, $3, $4, $5, $6)
    `
    _, err := r.db.ExecContext(ctx, query, s.ID, s.ProjectID, s.Title, s.Description, s.SectionCode, s.CreatedAt)
    return err
}

func (r *PostgresRepository) GetSpecsByProject(ctx context.Context, projectID string) ([]*Spec, error) {
    query := `
        SELECT id, project_id, title, COALESCE(description, ''), section_code, created_at
        FROM specs
        WHERE project_id = $1
    `
    rows, err := r.db.QueryContext(ctx, query, projectID)
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    specs := make([]*Spec, 0)
    for rows.Next() {
        s := &Spec{}
        if err := rows.Scan(&s.ID, &s.ProjectID, &s.Title, &s.Description, &s.SectionCode, &s.CreatedAt); err != nil {
            return nil, err
        }
        specs = append(specs, s)
    }
    return specs, rows.Err()
}