# Tasknest API Documentation

## Overview
Tasknest provides a RESTful API for managing personal tasks. All endpoints (except registration and token endpoints) require JWT authentication.

**Base URL:** `/api/`

---

## Authentication

### Register
- **POST** `/api/register/`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```
- **Response:**
  ```json
  {
    "username": "your_username"
  }
  ```
- **Status Codes:** `201 Created`, `400 Bad Request`

### Obtain JWT Token
- **POST** `/api/token/`
- **Description:** Obtain JWT access and refresh tokens.
- **Request Body:**
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```
- **Response:**
  ```json
  {
    "refresh": "<refresh_token>",
    "access": "<access_token>"
  }
  ```
- **Status Codes:** `200 OK`, `401 Unauthorized`

### Refresh JWT Token
- **POST** `/api/token/refresh/`
- **Description:** Refresh JWT access token.
- **Request Body:**
  ```json
  {
    "refresh": "<refresh_token>"
  }
  ```
- **Response:**
  ```json
  {
    "access": "<new_access_token>"
  }
  ```
- **Status Codes:** `200 OK`, `401 Unauthorized`

---

## Tasks Endpoints

All endpoints below require the `Authorization: Bearer <access_token>` header.

### List Tasks
- **GET** `/api/tasks/`
- **Description:** List all tasks for the authenticated user. Supports filtering, searching, and ordering.
- **Query Parameters:**
  - `status`: Filter by status (`incomplete`, `completed`)
  - `search`: Search by title or description
  - `ordering`: Order by `order` or `due_date`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "user": 2,
      "title": "Buy groceries",
      "description": "Milk, eggs, bread",
      "status": "incomplete",
      "due_date": "2024-07-20",
      "order": 0
    }
  ]
  ```
- **Status Codes:** `200 OK`

### Create Task
- **POST** `/api/tasks/`
- **Description:** Create a new task.
- **Request Body:**
  ```json
  {
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "status": "incomplete", // optional
    "due_date": "2024-07-20", // optional
    "order": 0 // optional
  }
  ```
- **Response:**
  ```json
  {
    "id": 2,
    "user": 2,
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "status": "incomplete",
    "due_date": "2024-07-20",
    "order": 0
  }
  ```
- **Status Codes:** `201 Created`, `400 Bad Request`

### Retrieve Task
- **GET** `/api/tasks/{id}/`
- **Description:** Retrieve a single task by ID.
- **Response:**
  ```json
  {
    "id": 1,
    "user": 2,
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "status": "incomplete",
    "due_date": "2024-07-20",
    "order": 0
  }
  ```
- **Status Codes:** `200 OK`, `404 Not Found`

### Update Task
- **PUT** `/api/tasks/{id}/`
- **Description:** Update a task by ID.
- **Request Body:**
  ```json
  {
    "title": "Buy groceries and cook dinner",
    "description": "Milk, eggs, bread, chicken",
    "status": "completed",
    "due_date": "2024-07-21",
    "order": 1
  }
  ```
- **Response:** Updated task object.
- **Status Codes:** `200 OK`, `400 Bad Request`, `404 Not Found`

### Delete Task
- **DELETE** `/api/tasks/{id}/`
- **Description:** Delete a task by ID.
- **Status Codes:** `204 No Content`, `404 Not Found`

### List Upcoming Tasks
- **GET** `/api/tasks/upcoming/`
- **Description:** List tasks with a due date in the future.
- **Response:** Same as list tasks.
- **Status Codes:** `200 OK`

### Reorder Tasks
- **POST** `/api/tasks/reorder/`
- **Description:** Reorder tasks by providing a list of task IDs in the new order.
- **Request Body:**
  ```json
  {
    "order": [3, 1, 2]
  }
  ```
- **Response:**
  ```json
  {
    "status": "order updated"
  }
  ```
- **Status Codes:** `200 OK`, `400 Bad Request`

---

## Error Responses
- `401 Unauthorized`: Missing or invalid token.
- `403 Forbidden`: Not allowed to access this resource.
- `404 Not Found`: Resource does not exist.
- `400 Bad Request`: Invalid input or validation error.

---

## Example Usage

**cURL Example:**
```bash
curl -H "Authorization: Bearer <access_token>" http://localhost:8000/api/tasks/
``` 