# ==============================================================================
# Variables
# ==============================================================================
APP_NAME := vecai
MAIN_PATH := ./backend/cmd/api/main.go
MIGRATIONS_DIR := backend/db/migrations
# Changed port from 5432 to 5433 here:
DB_URL := postgres://postgres:postgres@localhost:5433/vecai?sslmode=disable

.PHONY: help build run test clean docker-up docker-down migrate-up migrate-down migrate-create

# ==============================================================================
# Development Commands
# ==============================================================================

build:
	@echo "[BUILD] Building $(APP_NAME) binary..."
	@mkdir -p bin
	@go build -o bin/$(APP_NAME) $(MAIN_PATH)

run:
	@echo "[RUN] Starting $(APP_NAME)..."
	@DATABASE_URL="$(DB_URL)" MIGRATIONS_PATH="$(MIGRATIONS_DIR)" go run $(MAIN_PATH)

test:
	@echo "[TEST] Running Go tests..."
	@go test -v -race ./...

clean:
	@echo "[CLEAN] Removing binaries..."
	@rm -rf bin/

# ==============================================================================
# Database & Docker Commands
# ==============================================================================

# Changed host port mapping from 5432:5432 to 5433:5432
docker-up:
	@echo "[DOCKER] Starting PostgreSQL container on port 5433..."
	@docker run --name vecai-db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=vecai -p 5433:5432 -d postgres:16-alpine || docker start vecai-db

docker-down:
	@echo "[DOCKER] Stopping PostgreSQL container..."
	@docker stop vecai-db && docker rm vecai-db

migrate-up:
	@echo "[MIGRATE] Running up migrations..."
	@migrate -path $(MIGRATIONS_DIR) -database "$(DB_URL)" up

migrate-down:
	@echo "[MIGRATE] Rolling back last migration..."
	@migrate -path $(MIGRATIONS_DIR) -database "$(DB_URL)" down 1

migrate-create:
	@if [ -z "$(NAME)" ]; then echo "Error: NAME is required. Example: make migrate-create NAME=add_users_table"; exit 1; fi
	@echo "[MIGRATE] Creating migration: $(NAME)..."
	@migrate create -ext sql -dir $(MIGRATIONS_DIR) -seq $(NAME)