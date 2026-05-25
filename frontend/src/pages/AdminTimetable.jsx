import ManagementPage from "../components/ManagementPage";

export default function AdminTimetable() {
  return (
    <ManagementPage
      title="Timetable Management"
      endpoint="http://localhost:5000/api/timetable"
      fields={[
        {
          name: "className",
          label: "Class",
        },

        {
          name: "day",
          label: "Day",
        },

        {
          name: "period1",
          label: "Period 1",
        },

        {
          name: "period2",
          label: "Period 2",
        },

        {
          name: "period3",
          label: "Period 3",
        },

        {
          name: "period4",
          label: "Period 4",
        },

        {
          name: "period5",
          label: "Period 5",
        },

        {
          name: "period6",
          label: "Period 6",
        },
      ]}
      columns={[
        {
          key: "className",
          label: "Class",
        },

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
    />
  );
}
