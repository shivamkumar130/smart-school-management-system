import { useState } from "react";
import axios from "axios";
function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email },
      );

      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Forgot Password
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Enter your registered email to reset password.
        </p>

        <form onSubmit={handleReset} className="space-y-5">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border rounded-xl outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-4 rounded-xl hover:bg-blue-800 transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
