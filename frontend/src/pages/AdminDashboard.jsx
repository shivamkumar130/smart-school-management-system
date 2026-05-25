import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const name = localStorage.getItem("name");

  // Logout Function
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
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>

            <p className="mt-2 text-lg text-gray-200">Welcome, {name}</p>
          </div>

          <button
            onClick={handleLogout}
            className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* DASHBOARD SECTION */}
      <div className="p-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">
          School Management System
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* STUDENTS */}
          <Link
            to="/admin/students"
            className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
          >
            <h2 className="text-3xl font-bold text-blue-900">Students</h2>

            <p className="mt-4 text-gray-600">Manage all student records</p>
          </Link>

          {/* TEACHERS */}
          <Link
            to="/admin/teachers"
            className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
          >
            <h2 className="text-3xl font-bold text-blue-900">Teachers</h2>

            <p className="mt-4 text-gray-600">Manage teacher details</p>
          </Link>

          {/* NOTICES */}
          <Link
            to="/admin/notices"
            className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
          >
            <h2 className="text-3xl font-bold text-blue-900">Notices</h2>

            <p className="mt-4 text-gray-600">Upload school notices</p>
          </Link>

          {/* ATTENDANCE */}
          <Link
            to="/admin/attendance"
            className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
          >
            <h2 className="text-3xl font-bold text-blue-900">Attendance</h2>

            <p className="mt-4 text-gray-600">Manage attendance records</p>
          </Link>

          {/* RESULTS */}
          <Link
            to="/admin/results"
            className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
          >
            <h2 className="text-3xl font-bold text-blue-900">Results</h2>

            <p className="mt-4 text-gray-600">Manage student results</p>
          </Link>

          {/* REPORTS */}
          <Link
            to="/admin/timetable"
            className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
          >
            <h2 className="text-3xl font-bold text-blue-900">Timetable</h2>

            <p className="mt-4 text-gray-600">Manage class timetables</p>
          </Link>
          <Link
            to="/attendance-camera"
            className="
              bg-white
              p-8
              rounded-3xl
              shadow-lg
              hover:-translate-y-2
              transition
              "

          >
            <h2 className="text-2xl font-bold text-blue-900">AI Attendance</h2>

            <p className="mt-3 text-gray-600">Open camera attendance system</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
