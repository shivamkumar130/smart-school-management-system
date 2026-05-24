import ManagementPage from "../components/ManagementPage";

export default function AdminAttendance() {
  return (
    <ManagementPage
      title="Attendance Management"
      endpoint="http://localhost:5000/api/attendance"
      fields={[
        { name: "studentName", label: "Student Name" },
        { name: "className", label: "Class" },
        { name: "date", label: "Date", type: "date" },
        {
          name: "status",
          label: "Status",
          type: "select",
          options: ["Present", "Absent"],
        },
      ]}
      columns={[
        { key: "studentName", label: "Student" },
        { key: "className", label: "Class" },
        { key: "date", label: "Date" },
        { key: "status", label: "Status" },
      ]}
    />
  );
}
