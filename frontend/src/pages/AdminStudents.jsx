import ManagementPage from "../components/ManagementPage";

export default function TeacherStudents() {

  return (
    <ManagementPage
      title="Student Management"
      endpoint="http://localhost:5000/api/students"
      fields={[
        {
          name: "name",
          label: "Student Name",
        },

        {
          name: "className",
          label: "Class",
        },

        {
          name: "rollNumber",
          label: "Roll Number",
        },

        {
          name: "fatherName",
          label: "Father Name",
        },

        {
          name: "mobile",
          label: "Mobile Number",
        },

        {
          name: "email",
          label: "Email",
        },

        {
          name: "aadharNumber",
          label: "Aadhar Number",
        },

        {
          name: "image",
          label: "Student Image",
          type: "file",
        },
      ]}
      columns={[
        {
          key: "name",
          label: "Name",
        },

        {
          key: "className",
          label: "Class",
        },

        {
          key: "rollNumber",
          label: "Roll No",
        },

        {
          key: "fatherName",
          label: "Father Name",
        },

        {
          key: "mobile",
          label: "Mobile",
        },

        {
          key: "email",
          label: "Email",
        },

        {
          key: "aadharNumber",
          label: "Aadhar Number",
        },
      ]}
    />
  );
}