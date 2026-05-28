import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();

  const [password, setPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://ps-sarangpur-gopalpur-backend.onrender.com/api/auth/reset-password/${token}`,
        { password },
      );

      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Reset Password
        </h1>

        <form onSubmit={handleReset} className="space-y-5">
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-4 rounded-xl"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
