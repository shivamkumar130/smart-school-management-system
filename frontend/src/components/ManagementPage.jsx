import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function ManagementPage({ title, endpoint, fields = [], columns = [] }) {
  // ================= INITIAL FORM =================
  const initialForm = useMemo(() => {
    const obj = {};

    fields.forEach((f) => {
      obj[f.name] = f.defaultValue || "";
    });

    return obj;
  }, [fields]);

  // ================= STATES =================
  const [items, setItems] = useState([]);

  const [formData, setFormData] = useState(initialForm);

  const [editingId, setEditingId] = useState(null);

  // ================= FETCH =================
  const fetchItems = async () => {
    try {
      const res = await axios.get(endpoint);

      setItems(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();

    // eslint-disable-next-line
  }, []);

  // ================= CHANGE =================
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // FILE INPUT
    if (files) {
      setFormData((prev) => ({
        ...prev,

        [name]: files[0],
      }));

      return;
    }

    // NORMAL INPUT
    setFormData((prev) => ({
      ...prev,

      [name]: value,
    }));
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const hasFileField = fields.some((field) => field.type === "file");

      let payload = formData;

      let config = {};

      // FILE FORM
      if (hasFileField) {
        const formPayload = new FormData();

        Object.keys(formData).forEach((key) => {
          formPayload.append(key, formData[key]);
        });

        payload = formPayload;

        config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
      }

      // UPDATE
      if (editingId) {
        await axios.put(`${endpoint}/${editingId}`, payload, config);

        alert("Updated Successfully");
      }

      // ADD
      else {
        await axios.post(endpoint, payload, config);

        alert("Added Successfully");
      }

      // RESET
      setFormData(initialForm);

      setEditingId(null);

      fetchItems();
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  // ================= EDIT =================
  const handleEdit = (item) => {
    const newData = {};

    fields.forEach((f) => {
      newData[f.name] = item[f.name] ?? "";
    });

    setFormData(newData);

    setEditingId(item._id);
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${endpoint}/${id}`);

      alert("Deleted Successfully");

      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  // ================= PRINT =================
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900">{title}</h1>

        <button
          onClick={handlePrint}
          className="
          bg-green-600
          text-white
          px-5
          py-3
          rounded-xl
          "
          type="button"
        >
          Print
        </button>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="
        bg-white
        p-6
        rounded-3xl
        shadow-lg
        mb-10
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field) => {
            // TEXTAREA
            if (field.type === "textarea") {
              return (
                <textarea
                  key={field.name}
                  name={field.name}
                  placeholder={field.label}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className="
                  p-4
                  border
                  rounded-xl
                  min-h-32
                  "
                />
              );
            }

            // SELECT
            if (field.type === "select") {
              return (
                <select
                  key={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className="
                  p-4
                  border
                  rounded-xl
                  "
                >
                  <option value="">Select {field.label}</option>

                  {(field.options || []).map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              );
            }

            // FILE INPUT
            if (field.type === "file") {
              return (
                <input
                  key={field.name}
                  type="file"
                  name={field.name}
                  accept="image/*"
                  onChange={handleChange}
                  className="
                  p-4
                  border
                  rounded-xl
                  bg-white
                  "
                />
              );
            }

            // NORMAL INPUT
            return (
              <input
                key={field.name}
                type={field.type || "text"}
                name={field.name}
                placeholder={field.label}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className="
                p-4
                border
                rounded-xl
                "
              />
            );
          })}
        </div>

        <button
          type="submit"
          className="
          mt-6
          bg-blue-900
          text-white
          px-6
          py-3
          rounded-xl
          "
        >
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      {/* DATA */}
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="
            bg-white
            p-6
            rounded-3xl
            shadow-lg
            "
          >
            {/* IMAGE */}
            {item.image && (
              <img
                src={`https://ps-sarangpur-gopalpur-backend.onrender.com/uploads/${item.image}`}
                alt=""
                className="
                w-28
                h-28
                rounded-full
                object-cover
                mb-6
                "
              />
            )}

            <div className="grid md:grid-cols-3 gap-4">
              {columns.map((col) => (
                <div key={col.key}>
                  <p className="text-sm text-gray-500">{col.label}</p>

                  <p className="font-semibold">{String(item[col.key] ?? "")}</p>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => handleEdit(item)}
                className="
                bg-yellow-500
                text-white
                px-4
                py-2
                rounded-lg
                "
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => handleDelete(item._id)}
                className="
                bg-red-500
                text-white
                px-4
                py-2
                rounded-lg
                "
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

export default ManagementPage;
