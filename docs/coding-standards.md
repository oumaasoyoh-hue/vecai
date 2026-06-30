# VECAI Coding Standards

## Purpose

This document defines the coding standards and development guidelines for VECAI.

The goal is to ensure that the codebase remains consistent, readable, maintainable, and easy to extend as the project grows.

These standards apply to all code written for VECAI.

---

# Core Principles

The project follows these principles:

* Keep it simple.
* Prefer clarity over cleverness.
* Write code for humans first.
* Follow idiomatic Go.
* Avoid unnecessary abstractions.
* Build features incrementally.
* Prioritize maintainability over short-term speed.

---

# Go Coding Standards

## Follow the Go Standard

Always write idiomatic Go.

Use:

* `gofmt`
* `go vet`
* `golangci-lint` (future)

Never manually format Go code.

---

## Package Naming

Package names should:

* be lowercase
* contain no underscores
* contain no hyphens
* describe one responsibility

Good

```text
auth
project
supplier
database
```

Bad

```text
ProjectManagement
user_authentication
project-module
```

---

## File Naming

Use lowercase filenames.

Examples

```text
handler.go

service.go

repository.go

middleware.go

validator.go
```

Avoid long filenames.

---

## Function Naming

Functions should describe what they do.

Good

```go
CreateProject()

AuthenticateUser()

UploadDocument()

CalculateMaterialUsage()
```

Bad

```go
DoStuff()

Run()

Process()

HandleEverything()
```

---

## Variable Naming

Use descriptive names.

Good

```go
project

supplier

quotation

materialUsage
```

Avoid abbreviations unless universally understood.

Bad

```go
p

tmp

x

obj
```

---

## Constants

Replace magic numbers with named constants.

Good

```go
const MaxUploadSize = 20 << 20
```

Bad

```go
20971520
```

---

# Error Handling

Always handle errors.

Good

```go
user, err := repository.GetUser(id)
if err != nil {
    return err
}
```

Never ignore errors.

Bad

```go
user, _ := repository.GetUser(id)
```

Error messages should explain what happened.

Good

```text
failed to create project
```

Bad

```text
error
```

---

# Comments

Write comments that explain **why**, not **what**.

Good

```go
// Passwords are hashed before storage to improve security.
```

Bad

```go
// Increment i by one.
```

If the code is obvious, don't comment it.

---

# Project Structure

Business logic belongs inside:

```text
internal/
```

Application entry point:

```text
cmd/server/
```

Documentation:

```text
docs/
```

Database migrations:

```text
migrations/
```

Frontend resources:

```text
web/
```

---

# Architecture Rules

The presentation layer must not access the database directly.

All database access goes through the business logic layer.

The database should never contain business rules.

Handlers should remain small.

Services should contain business logic.

Repositories should contain SQL operations.

---

# Database Standards

Use PostgreSQL.

Primary keys:

```text
id
```

Foreign keys:

```text
project_id

user_id

supplier_id
```

Use snake_case for database names.

Example

```text
daily_reports

material_usage

project_documents
```

---

# API Standards

Use REST principles.

Examples

```text
GET /projects

POST /projects

PUT /projects/{id}

DELETE /projects/{id}
```

Use JSON for API responses.

HTTP status codes should accurately represent the result.

Examples

```text
200 OK

201 Created

400 Bad Request

401 Unauthorized

404 Not Found

500 Internal Server Error
```

---

# Git Standards

Commit often.

Each commit should represent one logical change.

Good commit messages

```text
Add user authentication

Create projects table

Implement project creation endpoint

Fix login validation
```

Avoid vague messages.

Bad

```text
Update

Fix

Changes

Work
```

---

# Documentation Standards

Every major feature should update:

* README
* API documentation
* Database documentation (if required)
* Architecture documentation (if affected)

Documentation is part of the feature, not an afterthought.

---

# Testing Standards

New business logic should include tests where practical.

Tests should verify expected behaviour rather than implementation details.

Use Go's standard testing package.

---

# Dependencies

Prefer the Go standard library whenever possible.

Only introduce external dependencies when they provide significant value.

Before adding a dependency, ask:

* Can the standard library solve this?
* Is the dependency actively maintained?
* Does it simplify the project?
* Is it worth the additional complexity?

---

# Security Standards

Never store passwords in plain text.

Validate all user input.

Use parameterized SQL queries.

Never expose sensitive information in API responses.

Do not commit secrets to Git.

Store configuration using environment variables.

---

# Development Workflow

Every feature follows this process:

1. Understand the requirement.
2. Update documentation if necessary.
3. Design the solution.
4. Implement the feature.
5. Test the feature.
6. Refactor where appropriate.
7. Commit to Git.
8. Push to GitHub.

---

# Code Review Checklist

Before every commit, verify:

* Code is formatted with `gofmt`.
* No unused code remains.
* Errors are handled.
* Functions are small and focused.
* Names are meaningful.
* Documentation is updated.
* The application builds successfully.
* Tests pass.

---

# Guiding Philosophy

The goal of VECAI is not simply to build software.

The goal is to build software that is understandable, maintainable, secure, and capable of growing into a production-ready construction management platform.

Every line of code should make the project easier to maintain rather than more complicated.
