const express = require("express");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const Notice = require("../models/Notice");
const Attendance = require("../models/Attendance");
const Result = require("../models/Result");
const Homework = require("../models/Homework");

const router = express.Router();

router.get("/summary", async (req, res) => {
  try {
    const [students, teachers, notices, attendance, results, homework] =
      await Promise.all([
        Student.countDocuments(),
        Teacher.countDocuments(),
        Notice.countDocuments(),
        Attendance.countDocuments(),
        Result.countDocuments(),
        Homework.countDocuments(),
      ]);

    res.json({
      students,
      teachers,
      notices,
      attendance,
      results,
      homework,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
