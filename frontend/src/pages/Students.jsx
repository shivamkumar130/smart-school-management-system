import { useEffect, useState } from "react";

import axios from "axios";

function Students() {
  // ================= STATES =================
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");

  const [rollNumber, setRollNumber] = useState("");

  const [className, setClassName] = useState("");

  const [fatherName, setFatherName] = useState("");

  const [mobile, setMobile] = useState("");

  const [editingId, setEditingId] = useState(null);

  // ================= FETCH STUDENTS =================
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/students");

      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= ADD / UPDATE =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // UPDATE
      if (editingId) {
        await axios.put(`http://localhost:5000/api/students/${editingId}`, {
          name,
          rollNumber,
          className,
          fatherName,
          mobile,
        });

        alert("Student Updated");
      }

      // ADD
      else {
        await axios.post("http://localhost:5000/api/students", {
          name,
          rollNumber,
          className,
          fatherName,
          mobile,
        });

        alert("Student Added");
      }

      // CLEAR FORM
      setName("");

      setRollNumber("");

      setClassName("");

      setFatherName("");

      setMobile("");

      setEditingId(null);

      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);

      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  // ================= EDIT =================
  const handleEdit = (student) => {
    setName(student.name);

    setRollNumber(student.rollNumber);

    setClassName(student.className);

    setFatherName(student.fatherName);

    setMobile(student.mobile);

    setEditingId(student._id);
  };

  // ================= PRINT =================
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900">Student Management</h1>

        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          Print
        </button>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-lg mb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 border rounded-xl"
          />

          <input
            type="text"
            placeholder="Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            className="p-4 border rounded-xl"
          />

          <input
            type="text"
            placeholder="Class"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="p-4 border rounded-xl"
          />

          <input
            type="text"
            placeholder="Father Name"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            className="p-4 border rounded-xl"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="p-4 border rounded-xl"
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-900 text-white px-8 py-4 rounded-xl"
        >
          {editingId ? "Update Student" : "Add Student"}
        </button>
      </form>

      {/* STUDENT LIST */}
      <div className="space-y-6">
        {students.map((student) => (
          <div key={student._id} className="bg-white p-6 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900">{student.name}</h2>

            <p className="mt-2">Roll Number: {student.rollNumber}</p>

            <p>Class: {student.className}</p>

            <p>Father Name: {student.fatherName}</p>

            <p>Mobile: {student.mobile}</p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => handleEdit(student)}
                className="bg-yellow-500 text-white px-5 py-2 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(student._id)}
                className="bg-red-500 text-white px-5 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
