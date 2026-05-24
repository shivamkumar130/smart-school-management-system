import ReadOnlyPage from "../components/ReadOnlyPage";

function StudentTimetable() {
  const className = localStorage.getItem("className");

  console.log("Student Class:", className);

  return (
    <ReadOnlyPage
      title="Class Timetable"
      endpoint="http://localhost:5000/api/timetable"
      columns={[
        {
          key: "day",
          label: "Day",
        },

        {
          key: "period1",
          label: "Period 1",
        },

        {
          key: "period2",
          label: "Period 2",
        },

        {
          key: "period3",
          label: "Period 3",
        },

        {
          key: "period4",
          label: "Period 4",
        },

        {
          key: "period5",
          label: "Period 5",
        },

        {
          key: "period6",
          label: "Period 6",
        },
      ]}
      filterField="className"
      filterValue={className}
    />
  );
}

export default StudentTimetable;
