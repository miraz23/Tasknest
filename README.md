Tasknest is a Django-React application for managing personal tasks. It provides a seamless user experience for authentication and task management, integrating tightly with the Tasknest backend API.

---

## Features
- **User Authentication:** Register and log in with JWT-based authentication. Tokens are securely stored in localStorage.
- **Task Management:**
  - List, create, edit, and delete tasks
  - Mark tasks as complete/incomplete
  - Filter tasks (all, completed, incomplete, upcoming)
  - View task details
  - Reorder tasks (drag-and-drop, powered by @hello-pangea/dnd)
- **Protected Routes:** Only authenticated users can access task pages; unauthenticated users are redirected to login.
- **UI:** Built with TailwindCSS for a clean, responsive design.
- **API Integration:** Uses Axios with JWT token in headers for secure API calls to the backend.

---

## Technology Stack
- React 19
- Vite (build tool)
- TailwindCSS
- Axios
- React Router v7
- JWT-decode
- Django REST Framework
- PostgreSQL
- Docker

---

## Running the Backend

Before starting the frontend, ensure the backend API is running. You have two main options:

### 1. Using Docker Compose (Recommended)
1. Navigate to the backend directory:
   ```bash
   cd ../../backend
   ```
2. Start the backend services:
   ```bash
   docker-compose up --build
   ```
   - The API will be available at `http://localhost:8000/api`

### 2. Running Manually (Development)
1. Navigate to the backend directory:
   ```bash
   cd ../../backend/tasknest
   ```
2. Create and activate a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r ../requirements.txt
   ```
4. Apply migrations and start the server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```
   - The API will be available at `http://localhost:8000/api`

For more details and advanced configuration, see [`backend/README.md`](../../backend/README.md).

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Backend API running (see backend README)

### Installation
1. Navigate to the frontend directory:
   ```bash
   cd frontend/tasknest
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   - The app will be available at [http://localhost:5173](http://localhost:5173) by default.
   - Ensure the backend API is running at `http://localhost:8000/api`

## Project Structure
- `src/`
  - `api/` — Axios instance and API functions for auth and tasks
  - `components/`
    - `Auth/` — Login and register forms
    - `Tasks/` — Task list, item, form, and detail components
    - `Layout/` — Navbar, buttons, inputs, private route
  - `pages/` — Main pages (Login, Register, Tasks, Task Detail)
  - `App.jsx` — Main app and router
  - `main.jsx` — Entry point
- `public/` — Static files (currently empty)

---

## API Usage
- **Base URL:** `http://localhost:8000/api` (configurable in `src/api/axios.js`)
- **Auth:**
  - `POST /token/` — Login
  - `POST /register/` — Register
- **Tasks:**
  - `GET /tasks/` — List tasks (with filters)
  - `POST /tasks/` — Create task
  - `GET /tasks/:id/` — Get task detail
  - `PUT /tasks/:id/` — Update task
  - `DELETE /tasks/:id/` — Delete task

---

## Screenshots

Below are screenshots demonstrating various features and views of Tasknest:

### Authentication

**Login Page:**
![Login Page](frontend/tasknest/src/assets/login.png)

**Register Page:**
![Register Page](frontend/tasknest/src/assets/register.png)

### Task Management

**Task List (Empty State):**
![Task List Empty](frontend/tasknest/src/assets/tasks-empty.png)

**Task List (Completed Task):**
![Task List Completed](frontend/tasknest/src/assets/tasks-completed.png)

### Backend & Database

**Docker Compose Running Backend:**
![Docker Backend](frontend/tasknest/src/assets/docker-backend.png)

**pgAdmin Viewing Tasks Table:**
![pgAdmin Tasks Table](frontend/tasknest/src/assets/pgadmin-tasks.png)

---