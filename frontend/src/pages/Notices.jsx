import { useEffect, useState } from "react";
import axios from "axios";

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const res = await axios.get("https://ps-sarangpur-gopalpur-backend.onrender.com/api/notices");

      setNotices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="p-10 bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-900 mb-10">Latest Notices</h1>

      <div className="space-y-5">
        {notices.map((notice) => (
          <div
            key={notice._id}
            className="bg-white rounded-2xl shadow border-l-8 border-blue-900 p-6"
          >
            <h2 className="text-2xl font-bold text-blue-900">{notice.title}</h2>

            <p className="text-gray-500 mt-3">Date: {notice.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
