import { useState } from "react";

function Homework() {
  const [homeworks] = useState([
    {
      id: 1,
      subject: "Mathematics",
      className: "Class 5",
      task: "Complete Exercise 3",
      dueDate: "20 May 2026",
    },
    {
      id: 2,
      subject: "English",
      className: "Class 4",
      task: "Write Essay on My School",
      dueDate: "22 May 2026",
    },
    {
      id: 3,
      subject: "EVS",
      className: "Class 3",
      task: "Learn Chapter 2",
      dueDate: "25 May 2026",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-10">
        Homework Management
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {homeworks.map((hw) => (
          <div
            key={hw.id}
            className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
          >
            <h2 className="text-2xl font-bold text-blue-900">{hw.subject}</h2>

            <p className="mt-4 text-gray-700">
              <span className="font-semibold">Class:</span> {hw.className}
            </p>

            <p className="mt-2 text-gray-700">
              <span className="font-semibold">Homework:</span> {hw.task}
            </p>

            <p className="mt-2 text-gray-700">
              <span className="font-semibold">Due Date:</span> {hw.dueDate}
            </p>

            <button className="mt-6 bg-blue-900 text-white px-5 py-3 rounded-xl hover:bg-blue-800 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homework;
