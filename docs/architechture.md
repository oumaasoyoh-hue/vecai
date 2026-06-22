# VECAI System Architecture

## 1. Overview

VECAI (Victoria Eagles Construct AI) is a web-based construction project management platform designed to digitize construction workflows and improve collaboration among project stakeholders.

The MVP follows a **modular monolithic architecture**, where the application is built as a single deployable service while keeping each business domain separated into independent modules.

This approach provides the simplicity required for a solo founder while allowing the system to scale as the product grows.

---

# 2. Architecture Principles

VECAI is built around the following principles:

* Simplicity before complexity
* Modular design
* Separation of concerns
* Idiomatic Go
* Secure by default
* Database-driven development
* API-first design
* Scalability for future AI integration

---

# 3. High-Level Architecture

```text
                        Browser
                           │
                           │ HTTP
                           ▼
                  Go HTTP Server
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
 Authentication      Project Module      Document Module
        │                  │                  │
        ├──────────────────┼──────────────────┤
                           ▼
                   Business Logic Layer
                           │
                           ▼
                   PostgreSQL Database
```

---

# 4. System Components

## 4.1 Client Layer

The client layer is responsible for user interaction.

Initial MVP:

* HTML Templates
* CSS
* JavaScript

Future versions:

* Mobile Application
* React Frontend
* Public REST API

---

## 4.2 Web Server

The Go HTTP server is responsible for:

* Receiving requests
* Authentication
* Authorization
* Input validation
* Routing
* Returning responses

The server does not contain business logic.

---

## 4.3 Business Logic Layer

This layer contains all application rules.

Responsibilities include:

* Creating projects
* Managing users
* Material tracking
* Daily reports
* BOQ management
* Supplier management
* Document handling

Business logic remains independent of the user interface.

---

## 4.4 Database Layer

The database stores all persistent application data.

Primary database:

PostgreSQL

Responsibilities:

* Store users
* Store projects
* Store documents
* Store BOQs
* Store suppliers
* Store quotations
* Store daily reports

Database access is isolated from business logic.

---

# 5. Core Modules

The application is divided into independent business modules.

## Authentication Module

Responsibilities

* User registration
* Login
* Password management
* Session management
* Role-based authorization

---

## User Management Module

Responsibilities

* User profiles
* Roles
* Permissions
* Team invitations

---

## Project Module

Responsibilities

* Create projects
* Update projects
* Archive projects
* Project dashboard

---

## Document Module

Responsibilities

* Upload documents
* Download documents
* Organize files
* Version tracking (future)

---

## BOQ Module

Responsibilities

* Store Bills of Quantities
* Edit BOQs
* Compare estimates
* Material breakdown

---

## Material Tracking Module

Responsibilities

* Record deliveries
* Record material usage
* Track inventory
* Detect wastage

---

## Daily Reports Module

Responsibilities

* Daily work logs
* Workforce attendance
* Site progress
* Photo uploads

---

## Supplier Module

Responsibilities

* Supplier profiles
* Supplier quotations
* Price comparison

---

# 6. Request Flow

Every request follows the same lifecycle.

```text
User

↓

Browser

↓

HTTP Request

↓

Router

↓

Authentication

↓

Validation

↓

Business Logic

↓

Database

↓

Response

↓

Browser
```

This predictable flow makes the application easier to understand and maintain.

---

# 7. Security Architecture

Security is implemented at multiple layers.

Authentication

* Secure password hashing
* Session management
* JWT (future)

Authorization

* Role-based access control

Validation

* Server-side validation
* Input sanitization

Transport

* HTTPS in production

---

# 8. AI Integration Strategy

Artificial Intelligence is **not part of the initial MVP**.

The MVP focuses on collecting accurate project data.

Future AI services will analyze this data to provide:

* Material demand prediction
* Cost forecasting
* Productivity analysis
* Schedule recommendations
* Risk detection

AI acts as a decision-support tool rather than replacing construction professionals.

---

# 9. Scalability Strategy

The MVP is intentionally designed as a modular monolith.

As adoption grows, modules can be extracted into independent services without major architectural changes.

Potential future services include:

* AI Engine
* Notification Service
* Reporting Service
* File Storage Service
* Payment Service

---

# 10. Technology Stack

Backend

* Go
* Standard Library (`net/http`)

Database

* PostgreSQL

Frontend

* HTML Templates
* CSS
* JavaScript

Development

* Git
* GitHub
* Docker (future)

---

# 11. Architectural Goals

The architecture aims to achieve:

* Maintainability
* Simplicity
* Performance
* Scalability
* Security
* Reliability
* Extensibility

The primary objective is to build a production-ready MVP that can evolve into a full construction management platform without requiring a complete redesign.
