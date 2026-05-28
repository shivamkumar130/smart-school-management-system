import ManagementPage from "../components/ManagementPage";

export default function AdminNotices() {
  return (
    <ManagementPage
      title="Notice Management"
      endpoint="https://ps-sarangpur-gopalpur-backend.onrender.com/api/notices"
      fields={[
        {
          name: "title",
          label: "Notice Title",
        },

        {
          name: "date",
          label: "Notice Date",
        },
      ]}
      columns={[
        {
          key: "title",
          label: "Title",
        },

        {
          key: "date",
          label: "Date",
        },
      ]}
    />
  );
}
