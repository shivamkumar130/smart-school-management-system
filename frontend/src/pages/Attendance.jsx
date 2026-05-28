import { useState } from "react";

function Attendance() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "AADITI KUMARI",
      present: false,
    },
    {
      id: 2,
      name: "ANAMIKA KUMARI",
      present: false,
    },
    {
      id: 3,
      name: "ARJUN KUMAR",
      present: false,
    },
    {
      id: 4,
      name: "DIVYAN KUMAR",
      present: false,
    },
  ]);

  const toggleAttendance = (id) => {
    const updatedStudents = students.map((student) =>
      student.id === id
        ? {
            ...student,
            present: !student.present,
          }
        : student,
    );

    setStudents(updatedStudents);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-10">
        Student Attendance
      </h1>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <div className="space-y-5">
          {students.map((student) => (
            <div
              key={student.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <h2 className="text-xl font-medium">{student.name}</h2>

              <button
                onClick={() => toggleAttendance(student.id)}
                className={`px-5 py-2 rounded-xl text-white font-semibold ${
                  student.present ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {student.present ? "Present" : "Absent"}
              </button>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-blue-900 text-white px-8 py-3 rounded-xl hover:bg-blue-800 transition">
          Save Attendance
        </button>
      </div>
    </div>
  );
}

export default Attendance;
