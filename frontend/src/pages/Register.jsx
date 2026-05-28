import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ps-sarangpur-gopalpur-backend.onrender.com/api/auth/register",
        formData,
      );

      alert(response.data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-4 border rounded-xl"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-4 border rounded-xl"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-4 border rounded-xl"
          />

          <select
            name="role"
            onChange={handleChange}
            className="w-full p-4 border rounded-xl"
          >
            <option value="student">Student</option>

            <option value="teacher">Teacher</option>

            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-4 rounded-xl"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
