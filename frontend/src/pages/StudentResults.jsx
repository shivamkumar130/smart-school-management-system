import { useEffect, useState, useCallback } from "react";
import axios from "axios";

function StudentResults() {
  const [results, setResults] = useState([]);

  const studentName = localStorage.getItem("name");

  const fetchResults = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://ps-sarangpur-gopalpur-backend.onrender.com/api/results",
      );

      const filteredResults = res.data.filter(
        (result) =>
          result.studentName?.toLowerCase() === studentName?.toLowerCase(),
      );

      setResults(filteredResults);
    } catch (error) {
      console.log(error);
    }
  }, [studentName]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  return <div>Student Results</div>;
}

export default StudentResults;
