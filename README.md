# Smart School Management System

Full-stack School Management Portal — React frontend and Express/MongoDB backend. This README summarizes the project, analyzes the main components, and provides setup and usage instructions for development.

## Project Overview

- **Frontend:** React app (frontend/) providing UI for admins, teachers, and students.
- **Backend:** Express API (backend/) handling authentication, students, teachers, attendance, homework, notices, results and timetables.
- **Extras:** A Python script (`faceRecognition.py`) for face-based attendance and an uploads folder for media.

## Tech Stack

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB (expected)
- Extras: Python (face recognition), Multer for uploads, Nodemon for development

## Repository Structure (high level)

- `backend/` — Express server, models, routes, middleware, config
  - `server.js` — entry point for backend
  - `models/` — Mongoose models: `Student.js`, `Teacher.js`, `Attendance.js`, `Homework.js`, `Notice.js`, `Result.js`, `Timetable.js`, `User.js`
  - `routes/` — API routes grouped by resource (attendance, auth, students, teachers, etc.)
  - `config/` — configuration such as `mailConfig.js`
  - `middleware/` — upload helpers and other middleware
  - `faceRecognition.py` — face-attendance helper (runs separately in Python)

- `frontend/` — React SPA
  - `src/pages/` and `src/components/` — UI pages and components
  - `package.json` — frontend scripts and dependencies

## Key Files

- Backend: [backend/server.js](backend/server.js#L1) — starts the API server
- Frontend: [frontend/src/index.js](frontend/src/index.js#L1) — React entry
- Face recognition: [backend/faceRecognition.py](backend/faceRecognition.py#L1)

## Getting Started (Development)

Prerequisites:

- Node.js (16+ recommended)
- npm or yarn
- MongoDB running locally or remotely
- Python 3.x (if using face recognition feature)

Backend

1. Open a terminal and install dependencies:

```bash
cd backend
npm install
```

2. Provide environment variables (create a `.env` or set your env):

- `MONGODB_URI` — MongoDB connection string
- `PORT` — backend port (default 5000)
- Mail config or other secrets as used in `config/mailConfig.js`

3. Start the backend:

```bash
cd backend
npm run dev    # or `node server.js` / `nodemon server.js`
```

Frontend

1. Install dependencies and start the dev server:

```bash
cd frontend
npm install
npm start
```

2. The frontend dev server typically runs on `http://localhost:3000` and makes API calls to the backend. If needed, configure a proxy in `frontend/package.json`.

Face recognition (optional)

- The face recognition script is a separate Python utility in `backend/faceRecognition.py`. It likely requires OpenCV and additional Python packages — inspect the script to determine exact requirements. Run it with:

```bash
python backend/faceRecognition.py
```

## API Surface (overview)

Look under `backend/routes/` for endpoints. Main route groups include:

- `authRoutes.js` — authentication (login/register/reset)
- `studentRoutes.js` — student CRUD
- `teacherRoutes.js` — teacher CRUD
- `attendanceRoutes.js` & `faceAttendanceRoutes.js` — attendance endpoints
- `homeworkRoutes.js`, `noticeRoutes.js`, `resultRoutes.js`, `timetableRoutes.js` — respective features

Inspect each route file to see exact URLs and required parameters.

## Notes & Analysis

- The project is split cleanly between frontend and backend; start each service independently during development.
- Environment variables and a MongoDB instance are required to run the backend.
- File uploads are handled in `backend/middleware/upload.js` and stored under `backend/uploads/`.
- The `temp/` and `backend/students.json` files appear to contain sample or backup data.
- The Python face recognition utility is optional but useful for automated attendance; it will need separate dependencies.

## Common Tasks

- Run backend in development: `cd backend && npm run dev`
- Run frontend: `cd frontend && npm start`
- Build frontend for production: `cd frontend && npm run build`

## Contributing

- If you want changes to this README or project structure, open an issue or send a PR describing the intent and any setup steps.

## Next Steps (recommended)

1. Add an `.env.example` at `backend/` documenting required env variables.
2. Add a short CONTRIBUTING.md describing how to run backend, frontend, and the face recognition script.
3. Add a small script or Makefile to start both frontend and backend concurrently for easier developer onboarding.

