import ManagementPage from "../components/ManagementPage";

export default function AdminTeachers() {
  return (
    <ManagementPage
      title="Teacher Management"
      endpoint="http://localhost:5000/api/teachers"
      fields={[
        {
          name: "name",
          label: "Teacher Name",
        },

        {
          name: "subject",
          label: "Subject",
        },

        {
          name: "qualification",
          label: "Qualification",
        },

        {
          name: "experience",
          label: "Experience",
        },

        {
          name: "email",
          label: "Email",
        },
        {
          name: "image",
          label: "Teacher Image",
          type: "file",
        }
      ]}
      columns={[
        {
          key: "name",
          label: "Name",
        },

        {
          key: "subject",
          label: "Subject",
        },

        {
          key: "qualification",
          label: "Qualification",
        },

        {
          key: "experience",
          label: "Experience",
        },

        {
          key: "email",
          label: "Email",
        },
        {
          key: "image",
          label: "Teacher Image",
          type: "file",
        }
      ]}
    />
  );
}
