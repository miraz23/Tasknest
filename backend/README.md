# Tasknest Backend

Tasknest is a task management backend built with Django and Django REST Framework, providing a secure, user-centric API for managing personal tasks. It supports JWT authentication, advanced filtering, and seamless integration with the Tasknest frontend.

---

## Features
- **User Registration & JWT Authentication**: Secure endpoints for user signup and login using JSON Web Tokens.
- **Task Management**: Create, read, update, delete, and reorder tasks. Each user can only access their own tasks.
- **Filtering & Search**: Filter tasks by status, search by title/description, and order by due date or custom order.
- **Upcoming Tasks**: Endpoint to fetch tasks with due dates in the future.
- **CORS Support**: Configured for local development and easily adjustable for production.
- **Dockerized**: Simple setup for development and production using Docker and Docker Compose.

---

## Technology Stack
- Python 3.10+
- Django 5.2.4
- Django REST Framework
- SimpleJWT (JWT authentication)
- PostgreSQL
- Docker & Docker Compose

---

## Getting Started

### Quick Start (Docker Compose)
1. Copy `.env.example` to `.env` and set environment variables (DB credentials, secret key, etc).
2. Build and start services:
   ```bash
docker-compose up --build
```
   - Backend API: [http://localhost:8000](http://localhost:8000)
   - PostgreSQL: port 5433
3. In a new terminal, apply migrations and create a superuser:
   ```bash
docker-compose exec web python tasknest/manage.py migrate
docker-compose exec web python tasknest/manage.py createsuperuser
```

### Manual Setup (No Docker)
1. Create and activate a virtual environment:
   ```bash
python -m venv venv
# On Unix/macOS:
source venv/bin/activate
# On Windows:
venv\Scripts\activate
```
2. Install dependencies:
   ```bash
pip install --upgrade pip
pip install -r requirements.txt
```
3. Configure PostgreSQL and environment variables (see `.env.example`).
4. Apply migrations and run the server:
   ```bash
python tasknest/manage.py migrate
python tasknest/manage.py runserver 0.0.0.0:8000
```

---

## API Overview
- **Base URL:** `/api/`
- **Auth:**
  - `POST /api/register/` — Register new user
  - `POST /api/token/` — Obtain JWT token
  - `POST /api/token/refresh/` — Refresh JWT token
- **Tasks:**
  - `GET /api/tasks/` — List user tasks (filter, search, order supported)
  - `POST /api/tasks/` — Create task
  - `GET /api/tasks/<id>/` — Retrieve task
  - `PUT /api/tasks/<id>/` — Update task
  - `DELETE /api/tasks/<id>/` — Delete task
  - `GET /api/tasks/upcoming/` — List upcoming tasks
  - `POST /api/tasks/reorder/` — Reorder tasks by ID list

All endpoints require JWT authentication except registration and token endpoints.

---

## Environment Variables
- See `.env.example` for required variables:
  - `DJANGO_DB_HOST`, `DJANGO_DB_NAME`, `DJANGO_DB_USER`, `DJANGO_DB_PASSWORD`, `SECRET_KEY`, `DEBUG`, etc.

---

## Deployment Notes
- **Production:**
  - Set `DEBUG=0` and a strong `SECRET_KEY` in `.env`.
  - Use a production WSGI server (e.g., gunicorn) and a reverse proxy (e.g., Nginx).
  - Restrict CORS and configure `ALLOWED_HOSTS`.
- **Docker:**
  - `Dockerfile` and `docker-compose.yml` provided for easy deployment.

---

## Project Structure
- `tasknest/` — Django project root
- `todos/` — App for task management (models, views, serializers, permissions)
- `requirements.txt` — Python dependencies
- `Dockerfile`, `docker-compose.yml` — Containerization

---

## License
This project is for educational/demo purposes. See LICENSE if present. 