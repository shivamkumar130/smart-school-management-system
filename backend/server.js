const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const studentRoutes = require("./routes/studentRoutes");

const teacherRoutes = require("./routes/teacherRoutes");

const noticeRoutes = require("./routes/noticeRoutes");

const attendanceRoutes = require("./routes/attendanceRoutes");

const resultRoutes = require("./routes/resultRoutes");

const homeworkRoutes = require("./routes/homeworkRoutes");

const timetableRoutes = require("./routes/timetableRoutes");

const app = express();


// ================= MIDDLEWARE =================

app.use(cors());

app.use(express.json());

// ================= ROUTES =================

app.use("/api/auth", authRoutes);

app.use("/api/students", studentRoutes);

app.use("/api/teachers", teacherRoutes);

app.use("/api/notices", noticeRoutes);

app.use("/api/attendance", attendanceRoutes);

app.use("/api/results", resultRoutes);

app.use("/api/homework", homeworkRoutes);

app.use("/api/timetable", timetableRoutes);


// ================= DATABASE =================

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    console.log("MongoDB Connected");
  })

  .catch((error) => {
    console.log(error);
  });

// ================= TEST ROUTE =================

app.get("/", (req, res) => {
  res.send("School ERP Backend Running");
});

// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
