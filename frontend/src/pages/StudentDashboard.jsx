import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function StudentDashboard() {
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  const [homeworks, setHomeworks] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [results, setResults] = useState([]);

  const name = localStorage.getItem("name");

  // ================= LOAD STUDENT =================
  useEffect(() => {
    const studentData = {
      name: localStorage.getItem("name"),
      className: localStorage.getItem("className"),
    };

    setStudent(studentData);

    fetchHomework(studentData.className);
    fetchAttendance(studentData.name);
    fetchResults(studentData.name);
  }, []);

  // ================= FETCH HOMEWORK =================
  const fetchHomework = async (studentClass) => {
    try {
      const res = await axios.get("http://localhost:5000/api/homework");

      const filteredHomework = res.data.filter(
        (hw) => hw.className === studentClass,
      );

      setHomeworks(filteredHomework);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= FETCH ATTENDANCE =================
  const fetchAttendance = async (studentName) => {
    try {
      const res = await axios.get("http://localhost:5000/api/attendance");

      const filteredAttendance = res.data.filter(
        (att) => att.studentName === studentName,
      );

      setAttendance(filteredAttendance);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= FETCH RESULTS =================
  const fetchResults = async (studentName) => {
    try {
      const res = await axios.get("http://localhost:5000/api/results");

      const filteredResults = res.data.filter(
        (result) => result.studentName === studentName,
      );

      setResults(filteredResults);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= LOGOUT =================
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-blue-900 text-white p-6 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Student Dashboard</h1>

            <p className="mt-2 text-lg text-gray-200">Welcome, {name}</p>

            {student && (
              <p className="text-gray-300">Class: {student.className}</p>
            )}
          </div>

          <button
            onClick={handleLogout}
            className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* DASHBOARD */}
      <div className="p-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">
          Student Portal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* PROFILE */}
          <Link
            to="/student/profile"
            className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
          >
            <h2 className="text-2xl font-bold text-blue-900">Profile</h2>

            <p className="mt-3 text-gray-600">View student profile</p>
          </Link>

          {/* HOMEWORK */}
          <Link
            to="/student/homework"
            className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
          >
            <h2 className="text-2xl font-bold text-blue-900">Homework</h2>

            <p className="mt-3 text-gray-600">View assigned homework</p>

            <p className="mt-4 text-sm text-green-600 font-semibold">
              {homeworks.length} Homework Available
            </p>
          </Link>

          {/* RESULTS */}
          <Link
            to="/student/results"
            className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
          >
            <h2 className="text-2xl font-bold text-blue-900">Results</h2>

            <p className="mt-3 text-gray-600">View exam results</p>

            <p className="mt-4 text-sm text-green-600 font-semibold">
              {results.length} Results Uploaded
            </p>
          </Link>

          {/* ATTENDANCE */}
          <Link
            to="/student/attendance"
            className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
          >
            <h2 className="text-2xl font-bold text-blue-900">Attendance</h2>

            <p className="mt-3 text-gray-600">View attendance records</p>

            <p className="mt-4 text-sm text-green-600 font-semibold">
              {attendance.length} Attendance Records
            </p>
          </Link>

          {/* NOTICES */}
          <Link
            to="/student/notices"
            className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
          >
            <h2 className="text-2xl font-bold text-blue-900">Notices</h2>

            <p className="mt-3 text-gray-600">View school notices</p>
          </Link>

          {/* TIMETABLE */}
          <Link
            to="/student/timetable"
            className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
          >
            <h2 className="text-2xl font-bold text-blue-900">Timetable</h2>

            <p className="mt-3 text-gray-600">View class timetable</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
