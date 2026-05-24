import ReadOnlyPage from "../components/ReadOnlyPage";

export default function StudentAttendance() {
  const studentName = localStorage.getItem("name");

  return (
    <ReadOnlyPage
      title="Student Attendance"
      endpoint="http://localhost:5000/api/attendance"
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
