import { useEffect, useState } from "react";
import axios from "axios";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    const res = await axios.get("http://localhost:5000/api/teachers");

    setTeachers(res.data);
  };

  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold text-blue-900 mb-10">Our Teachers</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {teachers.map((teacher) => (
          <div key={teacher._id} className="bg-white p-6 rounded-3xl shadow">
            <img
              src={teacher.image}
              alt=""
              className="w-32 h-32 rounded-full mx-auto"
            />

            <h2 className="text-2xl font-bold text-center mt-4">
              {teacher.name}
            </h2>

            <p className="text-center text-gray-600">{teacher.subject}</p>

            <p className="text-center text-gray-500">{teacher.qualification}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
