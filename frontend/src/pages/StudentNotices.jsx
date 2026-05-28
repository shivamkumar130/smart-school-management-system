import ReadOnlyPage from "../components/ReadOnlyPage";

export default function StudentNotices() {
  return (
    <ReadOnlyPage
      title="Student Notices"
      endpoint="https://ps-sarangpur-gopalpur-backend.onrender.com/api/notices"
      columns={[
        { key: "title", label: "Title" },
        { key: "message", label: "Message" },
      ]}
    />
  );
}
