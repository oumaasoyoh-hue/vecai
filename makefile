# ====================================================================================
# BARS & VARIABLES
# ====================================================================================
BINARY_NAME=auth-engine
MAIN_PATH=main.go

# ====================================================================================
# DEVELOPMENT COMMANDS
# ====================================================================================

.PHONY: run
run: ## Boot up the local auth engine with the volatile in-memory mock store
	go run $(MAIN_PATH)

.PHONY: build
build: ## Compile the Go application into a production-ready binary executable
	go build -o bin/$(BINARY_NAME) $(MAIN_PATH)

.PHONY: clean
clean: ## Remove compiled binary artifacts safely
	rm -rf bin/

# ====================================================================================
# QUALITY ASSURANCE & MAINTENANCE
# ====================================================================================

.PHONY: fmt
fmt: ## Enforce standardized Go formatting styling rules across all files
	go fmt ./...

.PHONY: vet
vet: ## Examine source code and report suspicious constructs (static analysis)
	go vet ./...

.PHONY: test
test: ## Run table-driven unit tests with code coverage metrics tracking enabled
	go test -v -cover ./...

.PHONY: tidy
tidy: ## Add missing and remove unused modules from go.mod
	go mod tidy

# ====================================================================================
# HELP SYSTEM
# ====================================================================================

.PHONY: help
help: ## Display this help tracking ledger showing all available targets
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help