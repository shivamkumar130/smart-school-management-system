import ReadOnlyPage from "../components/ReadOnlyPage";

export default function StudentAttendance() {
  const studentName = localStorage.getItem("name");

  return (
    <ReadOnlyPage
      title="Student Attendance"
      endpoint="https://ps-sarangpur-gopalpur-backend.onrender.com/api/attendance"
      columns={[
        { key: "studentName", label: "Student" },
        { key: "className", label: "Class" },
        { key: "date", label: "Date" },
        { key: "status", label: "Status" },
      ]}
      // FILTER ONLY LOGIN STUDENT
      filterField="studentName"
      filterValue={studentName}
    />
  );
}
