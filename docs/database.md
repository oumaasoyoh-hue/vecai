# VECAI Database Design

## Purpose

This document defines the database structure for VECAI (Victoria Eagles Construct AI).

The database is responsible for storing all application data in a secure, consistent, and scalable manner.

The MVP uses **PostgreSQL** as the primary relational database.

---

# Database Goals

The database is designed to:

* Maintain data integrity
* Reduce duplication
* Support future growth
* Enable efficient querying
* Support AI-powered analytics
* Protect sensitive information

---

# Database Overview

The MVP stores information about:

* Users
* Projects
* Team Members
* Daily Reports
* Materials
* BOQs
* Documents
* Suppliers
* Quotations

---

# Entity Relationship Overview

```text
                    Users
                      │
          ┌───────────┴───────────┐
          │                       │
          ▼                       ▼
      Projects             Daily Reports
          │                       │
          │                       │
          ├───────────────┐       │
          │               │       │
          ▼               ▼       ▼
     Materials      Documents   Team Members
          │
          │
          ▼
         BOQ
          │
          ▼
     Supplier Quotes
          │
          ▼
      Suppliers
```

---

# Users Table

Stores application users.

| Column        | Type      | Description        |
| ------------- | --------- | ------------------ |
| id            | UUID      | Primary Key        |
| first_name    | VARCHAR   | First name         |
| last_name     | VARCHAR   | Last name          |
| email         | VARCHAR   | Unique email       |
| password_hash | TEXT      | Encrypted password |
| role          | VARCHAR   | User role          |
| phone         | VARCHAR   | Phone number       |
| created_at    | TIMESTAMP | Creation date      |
| updated_at    | TIMESTAMP | Last update        |

---

# Projects Table

Stores construction projects.

| Column            | Type      |
| ----------------- | --------- |
| id                | UUID      |
| name              | VARCHAR   |
| description       | TEXT      |
| location          | VARCHAR   |
| client_name       | VARCHAR   |
| status            | VARCHAR   |
| start_date        | DATE      |
| expected_end_date | DATE      |
| created_by        | UUID      |
| created_at        | TIMESTAMP |
| updated_at        | TIMESTAMP |

Relationship

* One project belongs to one creator.
* One project has many reports.
* One project has many materials.
* One project has many documents.

---

# Project Members Table

Associates users with projects.

| Column     | Type      |
| ---------- | --------- |
| id         | UUID      |
| project_id | UUID      |
| user_id    | UUID      |
| role       | VARCHAR   |
| joined_at  | TIMESTAMP |

This enables many users to work on many projects.

---

# Daily Reports Table

Stores daily site reports.

| Column          | Type      |
| --------------- | --------- |
| id              | UUID      |
| project_id      | UUID      |
| user_id         | UUID      |
| report_date     | DATE      |
| completed_work  | TEXT      |
| workers_present | INTEGER   |
| remarks         | TEXT      |
| created_at      | TIMESTAMP |

Each report belongs to one project.

---

# Materials Table

Tracks materials delivered and used.

| Column        | Type      |
| ------------- | --------- |
| id            | UUID      |
| project_id    | UUID      |
| material_name | VARCHAR   |
| quantity      | DECIMAL   |
| unit          | VARCHAR   |
| unit_cost     | DECIMAL   |
| supplier      | VARCHAR   |
| delivery_date | DATE      |
| created_at    | TIMESTAMP |

Future AI features will analyse this data.

---

# BOQ Table

Stores Bills of Quantities.

| Column         | Type      |
| -------------- | --------- |
| id             | UUID      |
| project_id     | UUID      |
| item_name      | VARCHAR   |
| quantity       | DECIMAL   |
| unit           | VARCHAR   |
| estimated_cost | DECIMAL   |
| actual_cost    | DECIMAL   |
| created_at     | TIMESTAMP |

---

# Documents Table

Stores project documents.

| Column       | Type      |
| ------------ | --------- |
| id           | UUID      |
| project_id   | UUID      |
| uploaded_by  | UUID      |
| filename     | VARCHAR   |
| file_type    | VARCHAR   |
| file_size    | BIGINT    |
| storage_path | TEXT      |
| uploaded_at  | TIMESTAMP |

Only metadata is stored in PostgreSQL.

The files themselves are stored separately.

---

# Suppliers Table

Stores supplier information.

| Column         | Type      |
| -------------- | --------- |
| id             | UUID      |
| company_name   | VARCHAR   |
| contact_person | VARCHAR   |
| phone          | VARCHAR   |
| email          | VARCHAR   |
| location       | VARCHAR   |
| created_at     | TIMESTAMP |

---

# Quotations Table

Stores supplier quotations.

| Column         | Type      |
| -------------- | --------- |
| id             | UUID      |
| supplier_id    | UUID      |
| project_id     | UUID      |
| total_price    | DECIMAL   |
| quotation_date | DATE      |
| status         | VARCHAR   |
| created_at     | TIMESTAMP |

---

# User Roles

Supported roles include:

* Administrator
* Contractor
* Site Engineer
* Quantity Surveyor
* Architect
* Supplier
* Client

Role-based permissions are enforced in the application.

---

# Relationships

## One-to-Many

User

↓

Projects

---

Project

↓

Daily Reports

---

Project

↓

Materials

---

Project

↓

Documents

---

Project

↓

BOQ Items

---

Supplier

↓

Quotations

---

# Many-to-Many

Users

↓

Project Members

↓

Projects

A user may belong to many projects.

A project may contain many users.

---

# Indexes

Indexes improve query performance.

Recommended indexes:

* email
* project_id
* supplier_id
* report_date
* created_at

---

# Constraints

The database enforces:

* Primary Keys
* Foreign Keys
* Unique emails
* Required fields
* Valid relationships

This prevents invalid data from being stored.

---

# Soft Deletes

Important business records should not be permanently deleted.

Instead, future versions may include:

| Column     |
| ---------- |
| deleted_at |

This allows records to be restored if needed.

---

# Audit Fields

Every major table should include:

```text
created_at

updated_at
```

Future versions may also include:

```text
created_by

updated_by
```

---

# Data Flow

```text
User
   │
   ▼
Browser
   │
   ▼
HTTP Request
   │
   ▼
Business Logic
   │
   ▼
PostgreSQL
   │
   ▼
Response
```

---

# Future Database Expansion

The following tables are planned for future releases:

* Notifications
* Payments
* Equipment
* Inventory
* AI Predictions
* Risk Analysis
* Activity Logs
* Chat Messages
* Project Milestones
* Tasks
* Attendance
* Weather Records

---

# Database Design Principles

VECAI follows these principles:

* Normalize data where practical.
* Avoid duplicate information.
* Use foreign keys to maintain integrity.
* Store timestamps for auditing.
* Keep business rules in the application layer.
* Design for scalability without sacrificing simplicity.

The database serves as the foundation of the platform, enabling accurate project management today and AI-powered decision support in future releases.
