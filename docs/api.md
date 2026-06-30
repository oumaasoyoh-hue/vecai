# VECAI API Specification

## Purpose

This document defines the REST API for VECAI (Victoria Eagles Construct AI).

The API enables communication between the frontend, mobile applications, and the backend server.

The MVP follows REST principles and exchanges data using JSON.

---

# Base URL

Development

```text
http://localhost:8080/api/v1
```

Production

```text
https://api.vecai.com/api/v1
```

---

# API Principles

* RESTful endpoints
* JSON request and response bodies
* Stateless communication
* Role-based authorization
* Meaningful HTTP status codes
* Consistent naming conventions

---

# Authentication

Most endpoints require authentication.

Authentication will initially use secure server-side sessions.

Future versions may introduce JWTs for mobile applications and third-party integrations.

---

# User Roles

The API supports role-based access.

Roles include:

* Administrator
* Contractor
* Site Engineer
* Quantity Surveyor
* Architect
* Supplier
* Client

Permissions are enforced on the server.

---

# Standard Response Format

Successful response

```json
{
  "success": true,
  "message": "Project created successfully",
  "data": {}
}
```

Error response

```json
{
  "success": false,
  "message": "Project not found"
}
```

---

# Authentication Endpoints

## Register User

### POST

```text
/auth/register
```

Request

```json
{
  "name": "Victor Ouma",
  "email": "victor@example.com",
  "password": "password123"
}
```

Response

```json
{
  "success": true,
  "message": "Account created successfully"
}
```

---

## Login

### POST

```text
/auth/login
```

Request

```json
{
  "email": "victor@example.com",
  "password": "password123"
}
```

---

## Logout

### POST

```text
/auth/logout
```

---

# User Endpoints

## Get Current User

### GET

```text
/users/me
```

---

## Update Profile

### PUT

```text
/users/me
```

---

# Project Endpoints

## Create Project

### POST

```text
/projects
```

Request

```json
{
  "name": "Residential Apartments",
  "location": "Kisumu",
  "start_date": "2026-07-01",
  "end_date": "2027-03-30"
}
```

---

## Get All Projects

### GET

```text
/projects
```

---

## Get Project

### GET

```text
/projects/{id}
```

---

## Update Project

### PUT

```text
/projects/{id}
```

---

## Delete Project

### DELETE

```text
/projects/{id}
```

---

# Team Management

## Invite Team Member

### POST

```text
/projects/{id}/members
```

---

## List Team Members

### GET

```text
/projects/{id}/members
```

---

## Remove Team Member

### DELETE

```text
/projects/{id}/members/{memberId}
```

---

# BOQ Endpoints

## Upload BOQ

### POST

```text
/projects/{id}/boq
```

---

## Retrieve BOQ

### GET

```text
/projects/{id}/boq
```

---

## Update BOQ

### PUT

```text
/projects/{id}/boq
```

---

# Material Tracking

## Record Material Delivery

### POST

```text
/projects/{id}/materials
```

Example

```json
{
  "material": "Cement",
  "quantity": 200,
  "unit": "Bags"
}
```

---

## Get Material Records

### GET

```text
/projects/{id}/materials
```

---

## Update Material Record

### PUT

```text
/projects/{id}/materials/{materialId}
```

---

# Daily Reports

## Create Daily Report

### POST

```text
/projects/{id}/reports
```

Example

```json
{
  "date": "2026-07-05",
  "workers": 18,
  "completed_work": "Foundation excavation completed",
  "remarks": "No delays"
}
```

---

## List Daily Reports

### GET

```text
/projects/{id}/reports
```

---

## Get Daily Report

### GET

```text
/projects/{id}/reports/{reportId}
```

---

# Document Management

## Upload Document

### POST

```text
/projects/{id}/documents
```

---

## List Documents

### GET

```text
/projects/{id}/documents
```

---

## Download Document

### GET

```text
/projects/{id}/documents/{documentId}
```

---

## Delete Document

### DELETE

```text
/projects/{id}/documents/{documentId}
```

---

# Supplier Endpoints

## Register Supplier

### POST

```text
/suppliers
```

---

## List Suppliers

### GET

```text
/suppliers
```

---

## Get Supplier

### GET

```text
/suppliers/{id}
```

---

# Quotation Endpoints

## Submit Quotation

### POST

```text
/projects/{id}/quotations
```

---

## List Quotations

### GET

```text
/projects/{id}/quotations
```

---

## Compare Quotations

### GET

```text
/projects/{id}/quotations/compare
```

---

# Dashboard

## Project Dashboard

### GET

```text
/dashboard/projects/{id}
```

Returns project summary including:

* Progress
* Material usage
* Daily reports
* Active workers
* Recent activity

---

# Future AI Endpoints

These endpoints are planned for future releases.

Material Prediction

```text
GET /projects/{id}/ai/material-forecast
```

Cost Forecast

```text
GET /projects/{id}/ai/cost-forecast
```

Productivity Analysis

```text
GET /projects/{id}/ai/productivity
```

Risk Detection

```text
GET /projects/{id}/ai/risk-analysis
```

---

# HTTP Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 204  | No Content            |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 409  | Conflict              |
| 422  | Validation Error      |
| 500  | Internal Server Error |

---

# API Versioning

All endpoints include an API version.

Example

```text
/api/v1/projects
```

Future versions will use:

```text
/api/v2/
```

without breaking existing clients.

---

# Security

The API will implement:

* HTTPS in production
* Password hashing
* Session authentication
* Role-based authorization
* Input validation
* SQL injection protection
* CSRF protection for web forms
* Rate limiting (future)

---

# API Design Guidelines

The API follows these conventions:

* Resource names use plural nouns (`/projects`, `/users`, `/suppliers`).
* HTTP methods define the action.
* URLs identify resources, not actions.
* JSON is used for request and response payloads.
* Error responses are descriptive but do not expose sensitive system information.
* Breaking API changes require a new version.

---

# MVP Scope

The first release of VECAI will implement:

* Authentication
* User management
* Project management
* Team management
* BOQ management
* Material tracking
* Daily reports
* Document management

Supplier management, quotation comparison, dashboards, and AI-powered endpoints are planned for later releases.
