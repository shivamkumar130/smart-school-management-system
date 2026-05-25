const express = require("express");
const Student = require("../models/Student");
const Attendance = require("../models/Attendance");
const router = express.Router();
const upload = require("../middleware/upload");
const fs = require("fs");
const path = require("path");

router.get("/profile/:email", async (req, res) => {
  try {
    const student = await Student.findOne({
      email: req.params.email,
    });

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    // COUNT PRESENT
    const presentCount = await Attendance.countDocuments({
      studentName: student.name,

      status: "Present",
    });

    // COUNT ABSENT
    const absentCount = await Attendance.countDocuments({
      studentName: student.name,

      status: "Absent",
    });

    // TOTAL
    const total = presentCount + absentCount;

    // PERCENTAGE
    const percentage =
      total > 0 ? ((presentCount / total) * 100).toFixed(1) : 0;

    res.json({
      ...student.toObject(),

      presentCount,

      absentCount,

      attendancePercentage: percentage,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newStudent = new Student({
      ...req.body,

      image: req.file ? req.file.filename : "",
    });

    await newStudent.save();

    res.json(newStudent);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    // FIND OLD STUDENT
    const oldStudent = await Student.findById(req.params.id);

    // DELETE OLD IMAGE
    if (req.file && oldStudent.image) {
      const oldImagePath = path.join(
        __dirname,
        "..",
        "uploads",
        oldStudent.image,
      );

      // CHECK FILE EXISTS
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);

        console.log("Old image deleted");
      }
    }

    // NEW IMAGE NAME
    let imageName = oldStudent.image;

    if (req.file) {
      imageName = req.file.filename;
    }

    // UPDATE STUDENT
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,

      {
        ...req.body,

        image: imageName,
      },

      {
        new: true,
      },
    );

    res.json(updatedStudent);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get(
  "/profile/:email",

  async (req, res) => {
    try {
      const student = await Student.findOne({
        email: req.params.email,
      });

      res.json(student);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
);

module.exports = router;
