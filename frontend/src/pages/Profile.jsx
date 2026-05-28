import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  // ================= FETCH PROFILE =================
  const fetchProfile = async () => {
    try {
      const email = localStorage.getItem("email");

      // BACKEND FETCH
      const response = await axios.get(
        `https://ps-sarangpur-gopalpur-backend.onrender.com/api/students/profile/${email}`,
      );

      setStudent(response.data);
    } catch (error) {
      console.log(error);

      // FALLBACK LOCALSTORAGE
      setStudent({
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        className: localStorage.getItem("className"),
        fatherName: localStorage.getItem("fatherName"),
        mobile: localStorage.getItem("mobile"),
        rollNumber: localStorage.getItem("rollNumber"),

        // fallback attendance
        presentCount: 0,
        absentCount: 0,
        attendancePercentage: 0,
      });
    }
  };

  // ================= LOADING =================
  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* PAGE TITLE */}
      <h1 className="text-5xl font-bold text-blue-900 mb-10">
        Student Profile
      </h1>

      {/* PROFILE CARD */}
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-5xl mx-auto">
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* PROFILE ICON */}
          <div className="w-32 h-32 rounded-full bg-blue-900 flex items-center justify-center text-white text-6xl font-bold">
            {student.name?.charAt(0)}
          </div>

          {/* BASIC INFO */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 uppercase">
              {student.name}
            </h2>

            <p className="text-xl text-gray-700 mt-3">
              Roll No: {student.rollNumber}
            </p>

            <p className="text-xl text-gray-700 mt-2">
              Class: {student.className}
            </p>
          </div>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* FATHER NAME */}
          <div className="bg-gray-100 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              Father Name
            </h3>

            <p className="text-xl text-gray-700">
              {student.fatherName || "N/A"}
            </p>
          </div>

          {/* MOBILE */}
          <div className="bg-gray-100 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Mobile</h3>

            <p className="text-xl text-gray-700">{student.mobile || "N/A"}</p>
          </div>

          {/* EMAIL */}
          <div className="bg-gray-100 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Email</h3>

            <p className="text-xl text-gray-700">{student.email || "N/A"}</p>
          </div>

          {/* ATTENDANCE */}
          <div className="bg-gray-100 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Attendance
            </h3>

            <div className="space-y-3">
              <p className="text-xl text-gray-700">
                Present:
                <span className="font-bold text-green-600 ml-2">
                  {student.presentCount || 0}
                </span>
              </p>

              <p className="text-xl text-gray-700">
                Absent:
                <span className="font-bold text-red-600 ml-2">
                  {student.absentCount || 0}
                </span>
              </p>

              <p className="text-xl text-gray-700">
                Attendance:
                <span className="font-bold text-blue-700 ml-2">
                  {student.attendancePercentage || 0}%
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
