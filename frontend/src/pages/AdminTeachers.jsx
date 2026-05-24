import ManagementPage from "../components/ManagementPage";

export default function AdminTeachers() {
  return (
    <ManagementPage
      title="Teacher Management"
      endpoint="http://localhost:5000/api/teachers"
      fields={[
        { name: "name", label: "Teacher Name" },
        { name: "qualification", label: "Qualification" },
        { name: "experience", label: "Experience" },
        { name: "subject", label: "Subject" },
        { name: "mobile", label: "Mobile" },
        { name: "email", label: "Email", type: "email" },
      ]}
      columns={[
        { key: "name", label: "Name" },
        { key: "qualification", label: "Qualification" },
        { key: "experience", label: "Experience" },
        { key: "subject", label: "Subject" },
        { key: "email", label: "Email" },
      ]}
    />
  );
}
