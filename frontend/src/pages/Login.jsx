import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ps-sarangpur-gopalpur-backend.onrender.com/api/auth/login",
        {
          email,
          password,
        },
      );

      // Save Data
      // Save Data
      localStorage.setItem("token", response.data.token);

      localStorage.setItem("role", response.data.role);

      localStorage.setItem("name", response.data.name);

      localStorage.setItem("email", response.data.email);

      localStorage.setItem("className", response.data.className);

      localStorage.setItem("rollNumber", response.data.rollNumber);

      localStorage.setItem("fatherName", response.data.fatherName);

      localStorage.setItem("mobile", response.data.mobile);
      // Redirect
      if (response.data.role === "admin") {
        navigate("/admin-dashboard");
      } else if (response.data.role === "teacher") {
        navigate("/teacher-dashboard");
      } else {
        navigate("/student-dashboard");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Login Portal
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border rounded-xl outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border rounded-xl outline-none"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-4 rounded-xl hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600">Don't have an account?</p>

          <Link
            to="/register"
            className="text-blue-900 font-bold mt-2 inline-block hover:underline"
          >
            Register Here
          </Link>
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-blue-900 font-medium hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
