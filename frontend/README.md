# P.S. Sarangpur Gopalpur School ERP Portal

A full-stack school management portal with a React frontend and Express/MongoDB backend.

## Project Overview

This repository contains two main parts:

- `backend/` - Express API server for authentication, students, teachers, notices, attendance, homework, results, and timetable management.
- `frontend/` - React application for public pages and role-based admin/student/teacher dashboards.

The app supports:

- user registration and login
- role-based access for admin, teacher, and student
- notices and announcements
- class attendance tracking
- homework management
- results display
- timetable management
- password recovery via email

## Technologies Used

- Frontend: React, React Router, Axios, Tailwind CSS, Create React App
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs, Nodemailer
- Development: CORS, dotenv, nodemon

## Folder Structure

- `backend/`
  - `server.js` - backend entrypoint
  - `routes/` - auth and CRUD API routes
  - `models/` - Mongoose schemas for User, Student, Teacher, Attendance, Homework, Notice, Result, Timetable
  - `config/mailConfig.js` - email transport configuration
- `frontend/`
  - `src/` - React pages and components
  - `src/pages/` - route views for login, register, dashboards, attendance, homework, notices, results, timetable, profile, reports
  - `src/components/` - shared UI sections like Navbar, Footer, Hero, Teachers, NoticeBoard

## Backend Setup

1. Open a terminal in `backend/`
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with:

```env
MONGO_URI=<your MongoDB connection string>
JWT_SECRET=<your jwt secret>
EMAIL_USER=<your gmail address>
EMAIL_PASS=<your gmail app password>
```

4. Start the backend server:

```bash
npm run dev
```

The backend runs by default on `https://ps-sarangpur-gopalpur-backend.onrender.com
## Frontend Setup

1. Open a terminal in `frontend/`
2. Install dependencies:

```bash
npm install
```

3. Start the frontend app:

```bash
npm start
```

The app runs by default on `http://localhost:3000`.

## API Endpoints

The backend exposes the following route groups:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password/:token`
- `GET/POST/PUT/DELETE /api/students`
- `GET/POST/PUT/DELETE /api/teachers`
- `GET/POST/PUT/DELETE /api/notices`
- `GET/POST/PUT/DELETE /api/attendance`
- `GET/POST/PUT/DELETE /api/results`
- `GET/POST/PUT/DELETE /api/homework`
- `GET/POST/PUT/DELETE /api/timetable`

## Notes

- The frontend uses the reset password URL `http://localhost:3000/reset-password/<token>` for password recovery.
- CORS is enabled in the backend so the React app can communicate with the API during development.

## Build & Deployment

- Production frontend build: `npm run build` from `frontend/`
- Backend production start: `npm start` from `backend/`

## Recommended Workflow

1. Start backend first.
2. Start frontend next.
3. Use browser at `http://localhost:3000`.

## Helpful Commands

From `backend/`:

```bash
npm run dev
```

From `frontend/`:

```bash
npm start
```

## License

This project is available under the ISC license.
