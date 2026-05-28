import { useEffect, useState } from "react";
import axios from "axios";

function StudentResults() {
  const [results, setResults] = useState([]);

  const studentName = localStorage.getItem("name");

  useEffect(() => {
    fetchResults();
    
  }, []);

  const fetchResults = async () => {
    try {
      const res = await axios.get("https://ps-sarangpur-gopalpur-backend.onrender.com/api/results");

      // ONLY LOGIN STUDENT RESULT
      const filteredResults = res.data.filter(
        (result) =>
          result.studentName?.toLowerCase() === studentName?.toLowerCase(),
      );

      setResults(filteredResults);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Student Results</h1>

      <div className="space-y-6">
        {results.map((result, index) => (
          <div key={index} className="bg-white p-6 rounded-3xl shadow">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-gray-500">Student</p>
                <p className="font-bold">{result.studentName}</p>

                <p className="text-gray-500 mt-4">English</p>

                <p className="font-bold">{result.english}</p>
              </div>

              <div>
                <p className="text-gray-500">Class</p>

                <p className="font-bold">{result.className}</p>

                <p className="text-gray-500 mt-4">EVS</p>

                <p className="font-bold">{result.evs}</p>
              </div>

              <div>
                <p className="text-gray-500">Maths</p>

                <p className="font-bold">{result.maths}</p>

                <p className="text-gray-500 mt-4">Total</p>

                <p className="font-bold">{result.total}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentResults;
