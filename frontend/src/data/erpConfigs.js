export const studentConfig = {
  title: "Student Management",
  endpoint: "http://localhost:5000/api/students",
  fields: [
    { name: "name", label: "Student Name", type: "text" },
    { name: "rollNumber", label: "Roll Number", type: "text" },
    { name: "className", label: "Class", type: "text" },
    { name: "fatherName", label: "Father Name", type: "text" },
    { name: "mobile", label: "Mobile Number", type: "text" },
  ],
  columns: [
    { key: "name", label: "Name" },
    { key: "rollNumber", label: "Roll" },
    { key: "className", label: "Class" },
    { key: "fatherName", label: "Father" },
    { key: "mobile", label: "Mobile" },
  ],
};

export const teacherConfig = {
  title: "Teacher Management",
  endpoint: "http://localhost:5000/api/teachers",
  fields: [
    { name: "name", label: "Teacher Name", type: "text" },
    { name: "qualification", label: "Qualification", type: "text" },
    { name: "experience", label: "Experience", type: "text" },
    { name: "subject", label: "Subject", type: "text" },
    { name: "mobile", label: "Mobile Number", type: "text" },
    { name: "email", label: "Email", type: "email" },
  ],
  columns: [
    { key: "name", label: "Name" },
    { key: "qualification", label: "Qualification" },
    { key: "experience", label: "Experience" },
    { key: "subject", label: "Subject" },
    { key: "email", label: "Email" },
  ],
};

export const noticeConfig = {
  title: "Notice Management",
  endpoint: "http://localhost:5000/api/notices",
  fields: [
    { name: "title", label: "Notice Title", type: "text" },
    { name: "message", label: "Notice Message", type: "textarea" },
  ],
  columns: [
    { key: "title", label: "Title" },
    { key: "message", label: "Message" },
  ],
};

export const attendanceConfig = {
  title: "Attendance Management",
  endpoint: "http://localhost:5000/api/attendance",
  fields: [
    { name: "studentName", label: "Student Name", type: "text" },
    { name: "className", label: "Class", type: "text" },
    { name: "date", label: "Date", type: "date" },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: ["Present", "Absent"],
    },
  ],
  columns: [
    { key: "studentName", label: "Student" },
    { key: "className", label: "Class" },
    { key: "date", label: "Date" },
    { key: "status", label: "Status" },
  ],
};

export const resultConfig = {
  title: "Result Management",
  endpoint: "http://localhost:5000/api/results",
  fields: [
    { name: "studentName", label: "Student Name", type: "text" },
    { name: "className", label: "Class", type: "text" },
    { name: "maths", label: "Maths Marks", type: "number" },
    { name: "english", label: "English Marks", type: "number" },
    { name: "evs", label: "EVS Marks", type: "number" },
  ],
  columns: [
    { key: "studentName", label: "Student" },
    { key: "className", label: "Class" },
    { key: "maths", label: "Maths" },
    { key: "english", label: "English" },
    { key: "evs", label: "EVS" },
    { key: "total", label: "Total" },
  ],
  beforeSave: (data) => ({
    ...data,
    maths: Number(data.maths || 0),
    english: Number(data.english || 0),
    evs: Number(data.evs || 0),
    total:
      Number(data.maths || 0) +
      Number(data.english || 0) +
      Number(data.evs || 0),
  }),
};

export const homeworkConfig = {
  title: "Homework Management",
  endpoint: "http://localhost:5000/api/homework",
  fields: [
    { name: "title", label: "Homework Title", type: "text" },
    { name: "subject", label: "Subject", type: "text" },
    { name: "className", label: "Class", type: "text" },
    { name: "dueDate", label: "Due Date", type: "date" },
    { name: "description", label: "Description", type: "textarea" },
  ],
  columns: [
    { key: "title", label: "Title" },
    { key: "subject", label: "Subject" },
    { key: "className", label: "Class" },
    { key: "dueDate", label: "Due Date" },
  ],
};

export const studentNoticeReadOnlyConfig = {
  title: "Student Notices",
  endpoint: "http://localhost:5000/api/notices",
  columns: [
    { key: "title", label: "Title" },
    { key: "message", label: "Message" },
  ],
};

export const studentAttendanceReadOnlyConfig = {
  title: "Student Attendance",
  endpoint: "http://localhost:5000/api/attendance",
  columns: [
    { key: "studentName", label: "Student" },
    { key: "className", label: "Class" },
    { key: "date", label: "Date" },
    { key: "status", label: "Status" },
  ],
  filterField: "studentName",
};

export const studentResultReadOnlyConfig = {
  title: "Student Results",
  endpoint: "http://localhost:5000/api/results",
  columns: [
    { key: "studentName", label: "Student" },
    { key: "className", label: "Class" },
    { key: "maths", label: "Maths" },
    { key: "english", label: "English" },
    { key: "evs", label: "EVS" },
    { key: "total", label: "Total" },
  ],
  filterField: "studentName",
};

export const studentHomeworkReadOnlyConfig = {
  title: "Student Homework",
  endpoint: "http://localhost:5000/api/homework",
  columns: [
    { key: "title", label: "Title" },
    { key: "subject", label: "Subject" },
    { key: "className", label: "Class" },
    { key: "dueDate", label: "Due Date" },
  ],
  filterField: "className",
};
