import { useEffect, useState } from "react";
import axios from "axios";

function ReadOnlyPage({ title, endpoint, columns, filterField, filterValue }) {
  const [items, setItems] = useState([]);

  // ================= FETCH =================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(endpoint);

        setItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [endpoint]);
  console.log("Items:", items);

  console.log("Filter Field:", filterField);

  console.log("Filter Value:", filterValue);
  // ================= FILTER =================
  const filtered =
    filterField && filterValue
      ? items.filter(
          (item) =>
            String(item[filterField] || "")
              .trim()
              .toLowerCase() ===
            String(filterValue || "")
              .trim()
              .toLowerCase(),
        )
      : items;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900">{title}</h1>

        <button
          onClick={() => window.print()}
          className="bg-green-600 text-white px-5 py-3 rounded-xl"
        >
          Print
        </button>
      </div>

      {/* DATA */}
      <div className="space-y-6">
        {filtered.length === 0 ? (
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <p className="text-gray-500 text-lg">No Data Available</p>
          </div>
        ) : (
          filtered.map((item) => (
            <div key={item._id} className="bg-white p-6 rounded-3xl shadow-lg">
              <div className="grid md:grid-cols-3 gap-4">
                {columns.map((col) => (
                  <div key={col.key}>
                    <p className="text-sm text-gray-500">{col.label}</p>

                    <p className="font-semibold">
                      {String(item[col.key] ?? "")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ReadOnlyPage;
