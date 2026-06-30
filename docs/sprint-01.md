# Sprint 01 – Project Foundation

## Sprint Goal

Establish the technical foundation of VECAI by setting up the project structure, configuring the development environment, connecting the application to PostgreSQL, and displaying the first working web page.

This sprint does **not** focus on business features.

Its objective is to prepare the application for rapid feature development in future sprints.

---

# Sprint Duration

**2 Weeks**

---

# Success Criteria

At the end of Sprint 01:

* The application starts successfully.
* PostgreSQL is connected.
* The project structure is complete.
* Documentation is organized.
* The browser displays the VECAI home page.
* The application can communicate with the database.

---

# Sprint Backlog

## 1. Repository Setup

### Tasks

* Create Git repository
* Configure `.gitignore`
* Create `README.md`
* Create documentation folder
* Initialize Go module

Deliverable

A clean project repository ready for development.

---

## 2. Project Structure

Create the following structure:

```text
vecai/
│
├── cmd/
│   └── server/
│       └── main.go
│
├── internal/
│   ├── auth/
│   ├── database/
│   ├── project/
│   ├── users/
│   ├── materials/
│   ├── reports/
│   ├── documents/
│   └── supplier/
│
├── migrations/
│
├── web/
│   ├── templates/
│   ├── static/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│
├── docs/
│
├── configs/
│
├── scripts/
│
├── go.mod
│
└── README.md
```

Deliverable

Standardized project layout.

---

## 3. Development Environment

### Tasks

* Install Go
* Install PostgreSQL
* Configure Git
* Configure VS Code
* Install useful Go extensions
* Verify project builds

Deliverable

A fully functional development environment.

---

## 4. Database Connection

### Tasks

* Create database
* Configure database connection
* Test database connectivity
* Create reusable database package

Deliverable

Application successfully connects to PostgreSQL.

---

## 5. HTTP Server

### Tasks

* Create HTTP server
* Configure routes
* Add graceful shutdown
* Add logging

Deliverable

Server running on:

```text
http://localhost:8080
```

---

## 6. Home Page

Create the first HTML page.

Display:

* VECAI logo
* Welcome message
* Navigation placeholder

Deliverable

The browser loads the VECAI landing page.

---

## 7. Configuration

### Tasks

Create environment variables.

Examples:

```text
PORT

DATABASE_URL

APP_ENV
```

Deliverable

Application configuration separated from source code.

---

## 8. Error Handling

Create reusable error handling.

Goals:

* Consistent responses
* Useful logs
* User-friendly messages

---

## 9. Logging

Implement basic logging.

Log:

* Server startup
* Incoming requests
* Errors
* Database connection status

---

## 10. Documentation Review

Verify:

* README
* Product documentation
* Architecture
* API
* Database
* Coding standards

All documentation should reflect the current project state.

---

# Deliverables

By the end of Sprint 01, the following should exist:

* Running Go application
* Connected PostgreSQL database
* Standard project structure
* HTTP server
* Landing page
* Configuration management
* Logging
* Updated documentation

---

# Out of Scope

The following items are intentionally excluded from Sprint 01:

* Authentication
* User registration
* Login
* Projects
* BOQ management
* Material tracking
* Daily reports
* File uploads
* AI features

These will be implemented in later sprints.

---

# Risks

| Risk                                      | Mitigation                                          |
| ----------------------------------------- | --------------------------------------------------- |
| Spending too much time organizing folders | Create only the folders required for the MVP.       |
| Database configuration issues             | Test the connection early before building features. |
| Scope creep                               | Do not implement business features in this sprint.  |
| Learning Go concepts                      | Build small pieces and test frequently.             |

---

# Definition of Done

Sprint 01 is complete when:

* The application builds successfully.
* No build errors exist.
* The server starts without issues.
* PostgreSQL is connected.
* The browser displays the VECAI home page.
* The project is committed to Git.
* Documentation is updated.

---

# Lessons Learned

At the end of the sprint, document:

* What went well.
* Challenges encountered.
* Technical decisions made.
* Improvements for Sprint 02.

This retrospective helps improve future development and keeps the project evolving in a structured way.
 