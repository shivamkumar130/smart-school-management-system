import { BrowserRouter, Routes, Route } from "react-router-dom";

// ================= PUBLIC PAGES =================
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Teachers from "./pages/Teachers";
import Facilities from "./pages/Facilities";
import Notices from "./pages/Notices";

// ================= AUTH PAGES =================
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

// ================= DASHBOARDS =================
import AdminDashboard from "./pages/AdminDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";

// ================= ADMIN / TEACHER CRUD PAGES =================
import AdminStudents from "./pages/AdminStudents";
import AdminTeachers from "./pages/AdminTeachers";
import AdminNotices from "./pages/AdminNotices";
import AdminAttendance from "./pages/AdminAttendance";
import AdminResults from "./pages/AdminResults";
import AdminHomework from "./pages/AdminHomework";
import AdminTimetable from "./pages/AdminTimetable";



// ================= STUDENT VIEW PAGES =================
import StudentNotices from "./pages/StudentNotices";
import StudentTimetable from "./pages/StudentTimetable";
import StudentAttendance from "./pages/StudentAttendance";
import StudentResults from "./pages/StudentResults";
import StudentHomework from "./pages/StudentHomework";

// ================= COMMON PAGES =================
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}

        <Route path="/" element={<Home />} />

        <Route path="/academics" element={<Academics />} />

        <Route path="/teachers" element={<Teachers />} />

        <Route path="/facilities" element={<Facilities />} />

        <Route path="/notices" element={<Notices />} />

        {/* ================= AUTH ROUTES ================= */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* ================= ADMIN ROUTES ================= */}

        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/admin/students" element={<AdminStudents />} />

        <Route path="/admin/teachers" element={<AdminTeachers />} />

        <Route path="/admin/notices" element={<AdminNotices />} />

        <Route path="/admin/attendance" element={<AdminAttendance />} />

        <Route path="/admin/results" element={<AdminResults />} />

        <Route path="/admin/homework" element={<AdminHomework />} />

        <Route path="/admin/timetable" element={<AdminTimetable />} />

        <Route path="/admin/academics" element={<Academics />} />

        {/* ================= TEACHER ROUTES ================= */}

        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />

        {/* Teacher uses same synced CRUD pages */}
        <Route path="/teacher/students" element={<AdminStudents />} />

        <Route path="/teacher/teachers" element={<AdminTeachers />} />

        <Route path="/teacher/notices" element={<AdminNotices />} />

        <Route path="/teacher/attendance" element={<AdminAttendance />} />

        <Route path="/teacher/results" element={<AdminResults />} />

        <Route path="/teacher/homework" element={<AdminHomework />} />
        <Route path="/teacher/timetable" element={<AdminTimetable />} />

        {/* ================= STUDENT ROUTES ================= */}

        <Route path="/student-dashboard" element={<StudentDashboard />} />

        <Route path="/student/profile" element={<Profile />} />

        <Route path="/student/homework" element={<StudentHomework />} />

        <Route path="/student/results" element={<StudentResults />} />

        <Route path="/student/attendance" element={<StudentAttendance />} />

        <Route path="/student/notices" element={<StudentNotices />} />

        <Route path="/student/timetable" element={<StudentTimetable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
