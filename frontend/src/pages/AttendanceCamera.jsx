import Webcam from "react-webcam";

import { useRef, useState } from "react";

import axios from "axios";

function AttendanceCamera() {
  const webcamRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const capture = async () => {
    const imageSrc = webcamRef.current?.getScreenshot();

    console.log("Captured image:", imageSrc);

    // CHECK CAMERA
    if (!imageSrc) {
      alert("Camera capture failed");

      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/attendance/face",

        {
          image: imageSrc,
        },
      );

      alert(res.data.message);
    } catch (error) {
      console.log("Attendance Error:", error);

      console.log("Backend Response:", error.response?.data);

      alert(error.response?.data?.error || "Error in attendance");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">
        AI Face Attendance
      </h1>

      <div className="bg-white p-8 rounded-3xl shadow-xl">
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="rounded-3xl w-full"
        />

        <button
          onClick={capture}
          className="
          mt-6
          bg-blue-900
          text-white
          px-8
          py-4
          rounded-2xl
          "
        >
          {loading ? "Processing..." : "Capture Attendance"}
        </button>
      </div>
    </div>
  );
}

export default AttendanceCamera;
