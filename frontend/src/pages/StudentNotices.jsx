import ReadOnlyPage from "../components/ReadOnlyPage";

export default function StudentNotices() {
  return (
    <ReadOnlyPage
      title="Student Notices"
      endpoint="http://localhost:5000/api/notices"
      columns={[
        { key: "title", label: "Title" },
        { key: "message", label: "Message" },
      ]}
    />
  );
}
