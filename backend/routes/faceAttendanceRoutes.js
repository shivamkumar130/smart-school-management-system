const express = require("express");

const router = express.Router();

const fs = require("fs");

const { exec } = require("child_process");

const Student = require("../models/Student");

const Attendance = require("../models/Attendance");

// ================= FACE ATTENDANCE =================

router.post("/face", async (req, res) => {
  try {
    const { image } = req.body;

    // CHECK IMAGE
    if (!image) {
      return res.status(400).json({
        error: "No image received",
      });
    }

    console.log("Image received");

    // ================= SAVE CAMERA IMAGE =================

    const base64Data = image.replace(/^data:image\/jpeg;base64,/, "");

    fs.writeFileSync("temp/classroom.jpg", base64Data, "base64");

    console.log("classroom.jpg saved");

    // ================= FETCH STUDENTS =================

    const students = await Student.find();

    console.log("Students fetched:", students.length);

    // ================= SAVE STUDENT DATA =================

    fs.writeFileSync("temp/students.json", JSON.stringify(students));

    console.log("students.json saved");

    // ================= RUN PYTHON =================

    exec(
      "python faceRecognition.py",

      async (error, stdout, stderr) => {
        console.log("PYTHON STDOUT:");
        console.log(stdout);

        console.log("PYTHON STDERR:");
        console.log(stderr);

        // ================= EXEC ERROR =================

        if (error) {
          console.log("EXEC ERROR:");
          console.log(error);

          return res.status(500).json({
            error: stderr || error.message,
          });
        }

        try {
          // ================= PARSE PYTHON OUTPUT =================

          const presentIds = JSON.parse(stdout);

          console.log("Matched Students:", presentIds);

          const today = new Date().toISOString().split("T")[0];

          // ================= SAVE ATTENDANCE =================

          for (const student of students) {
            const status = presentIds.includes(String(student._id))
              ? "Present"
              : "Absent";

            await Attendance.create({
              studentName: student.name,

              className: student.className,

              date: today,

              status,
            });
          }

          console.log("Attendance Saved");

          // ================= SUCCESS RESPONSE =================

          res.json({
            message: "Attendance Marked Successfully",
          });
        } catch (e) {
          console.log("JSON PARSE ERROR:");

          console.log(e);

          res.status(500).json({
            error: "Python output parse error",
          });
        }
      },
    );
  } catch (error) {
    console.log("SERVER ERROR:");

    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// ================= EXPORT =================

module.exports = router;
