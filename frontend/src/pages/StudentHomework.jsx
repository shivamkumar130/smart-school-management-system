import { useEffect, useState } from "react";

import axios from "axios";

function StudentHomework() {
  const [homework, setHomework] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHomework();
  }, []);

  const fetchHomework = async () => {
    try {
      // GET CLASS FROM LOGIN
      const className = localStorage.getItem("className");

      console.log("Student Class:", className);

      // FETCH ALL HOMEWORK
      const response = await axios.get("https://ps-sarangpur-gopalpur-backend.onrender.com/api/homework");

      console.log(response.data);

      // FILTER BY CLASS
      const filteredHomework = response.data.filter(
        (item) => item.className === className,
      );

      setHomework(filteredHomework);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-10 text-3xl font-bold">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-blue-900 mb-10">Homework</h1>

      {/* NO HOMEWORK */}
      {homework.length === 0 && (
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold text-red-500">No Homework Found</h2>
        </div>
      )}

      {/* HOMEWORK LIST */}
      <div className="grid gap-6">
        {homework.map((item) => (
          <div key={item._id} className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-blue-900">{item.title}</h2>

            <p className="mt-4 text-lg">{item.description}</p>

            <p className="mt-4">
              <span className="font-bold">Subject:</span> {item.subject}
            </p>

            <p className="mt-2">
              <span className="font-bold">Class:</span> {item.className}
            </p>

            <p className="mt-2">
              <span className="font-bold">Due Date:</span> {item.dueDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentHomework;
