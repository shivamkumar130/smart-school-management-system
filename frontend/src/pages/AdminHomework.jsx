import ManagementPage from "../components/ManagementPage";

export default function AdminHomework() {
  return (
    <ManagementPage
      title="Homework Management"
      endpoint="http://localhost:5000/api/homework"
      fields={[
        {
          name: "title",
          label: "Title",
        },

        {
          name: "subject",
          label: "Subject",
        },

        {
          name: "className",
          label: "Class",
        },

        {
          name: "description",
          label: "Description",
          type: "textarea",
        },

        {
          name: "dueDate",
          label: "Due Date",
          type: "date",
        },
      ]}
      columns={[
        {
          key: "title",
          label: "Title",
        },

        {
          key: "subject",
          label: "Subject",
        },

        {
          key: "className",
          label: "Class",
        },

        {
          key: "description",
          label: "Description",
        },

        {
          key: "dueDate",
          label: "Due Date",
        },
      ]}
    />
  );
}