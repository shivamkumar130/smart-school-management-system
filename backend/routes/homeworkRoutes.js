const express = require("express");

const router = express.Router();

const Homework = require("../models/Homework");

// ================= GET =================
router.get("/", async (req, res) => {
  try {
    const homework = await Homework.find();

    res.json(homework);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// ================= ADD =================
router.post("/", async (req, res) => {
  try {
    const newHomework = new Homework(req.body);

    await newHomework.save();

    res.json(newHomework);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// ================= UPDATE =================
router.put("/:id", async (req, res) => {
  try {
    const updatedHomework = await Homework.findByIdAndUpdate(
      req.params.id,

      req.body,

      {
        new: true,
      },
    );

    res.json(updatedHomework);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// ================= DELETE =================
router.delete("/:id", async (req, res) => {
  try {
    await Homework.findByIdAndDelete(req.params.id);

    res.json({
      message: "Homework Deleted",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
