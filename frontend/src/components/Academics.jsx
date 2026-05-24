import { useEffect, useState } from "react";
import axios from "axios";

function Academics() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students");

      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // CLASS LIST
  const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Academic Sections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {classes.map((className, index) => {
            // FILTER STUDENTS CLASSWISE
            const classStudents = students.filter(
              (student) => student.className === className,
            );

            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition"
              >
                <h3 className="text-2xl font-bold text-blue-900 text-center">
                  {className}
                </h3>

                <p className="mt-4 text-center text-gray-600">Total Students</p>

                <p className="text-4xl font-bold text-center text-blue-900 mt-2">
                  {classStudents.length}
                </p>

                {/* STUDENTS */}
                <div className="mt-6 space-y-2">
                  {classStudents.map((student) => (
                    <div
                      key={student._id}
                      className="bg-gray-100 p-2 rounded-lg text-center"
                    >
                      {student.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Academics;
