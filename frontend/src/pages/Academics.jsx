import { useEffect, useState } from "react";
import axios from "axios";

function Academics() {
  const [students, setStudents] = useState([]);

  // ================= FETCH =================
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(
          "https://ps-sarangpur-gopalpur-backend.onrender.com/api/students"
        );

        setStudents(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudents();
  }, []);

  // ================= GROUP CLASSWISE =================
  const groupedStudents = {};

  students.forEach((student) => {
    const cls = student.className;

    if (!groupedStudents[cls]) {
      groupedStudents[cls] = [];
    }

    groupedStudents[cls].push(student);
  });

  return (
    <section className="bg-gray-100 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-blue-900 mb-16">
          Academic Sections
        </h2>

        {Object.keys(groupedStudents).length === 0 ? (
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <p className="text-xl text-gray-500">No Student Data Available</p>
          </div>
        ) : (
          Object.keys(groupedStudents).map((cls) => (
            <div key={cls} className="mb-16">
              {/* CLASS HEADER */}
              <div className="bg-blue-900 text-white p-6 rounded-3xl mb-8 shadow-lg">
                <h3 className="text-4xl font-bold">Class {cls}</h3>

                <p className="mt-2 text-lg">
                  Total Students: {groupedStudents[cls].length}
                </p>
              </div>

              {/* STUDENTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedStudents[cls].map((student) => (
                  <div
                    key={student._id}
                    className="bg-white rounded-3xl shadow-xl p-8"
                  >
                    <h4 className="text-2xl font-bold text-blue-900 mb-4">
                      {student.name}
                    </h4>

                    <div className="space-y-2 text-gray-700">
                      <p>
                        <span className="font-semibold">Roll Number:</span>{" "}
                        {student.rollNumber}
                      </p>

                      <p>
                        <span className="font-semibold">Father Name:</span>{" "}
                        {student.fatherName}
                      </p>

                      <p>
                        <span className="font-semibold">Mobile:</span>{" "}
                        {student.mobile}
                      </p>

                      <p>
                        <span className="font-semibold">Email:</span>{" "}
                        {student.email}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Academics;
