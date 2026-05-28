import ManagementPage from "../components/ManagementPage";

export default function AdminResults() {
  return (
    <ManagementPage
      title="Result Management"
      endpoint="https://ps-sarangpur-gopalpur-backend.onrender.com/api/results"
      fields={[
        { name: "studentName", label: "Student Name" },
        { name: "className", label: "Class" },
        { name: "maths", label: "Maths Marks", type: "number" },
        { name: "english", label: "English Marks", type: "number" },
        { name: "evs", label: "EVS Marks", type: "number" },
      ]}
      columns={[
        { key: "studentName", label: "Student" },
        { key: "className", label: "Class" },
        { key: "maths", label: "Maths" },
        { key: "english", label: "English" },
        { key: "evs", label: "EVS" },
        { key: "total", label: "Total" },
      ]}
      beforeSave={(data) => ({
        ...data,
        maths: Number(data.maths || 0),
        english: Number(data.english || 0),
        evs: Number(data.evs || 0),
        total:
          Number(data.maths || 0) +
          Number(data.english || 0) +
          Number(data.evs || 0),
      })}
    />
  );
}
