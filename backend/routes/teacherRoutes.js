const express = require("express");

const Teacher = require("../models/Teacher");

const router = express.Router();

// GET ALL
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find();

    res.json(teachers);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// ADD
router.post("/", async (req, res) => {
  try {
    const teacher = new Teacher(req.body);

    await teacher.save();

    res.json(teacher);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.json(updatedTeacher);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);

    res.json({
      message: "Teacher deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
