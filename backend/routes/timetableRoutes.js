const express = require("express");

const router = express.Router();

const Timetable = require("../models/Timetable");

// ================= GET =================
router.get("/", async (req, res) => {
  try {
    const data = await Timetable.find();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// ================= ADD =================
router.post("/", async (req, res) => {
  try {
    const newData = new Timetable(req.body);

    await newData.save();

    res.json(newData);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// ================= UPDATE =================
router.put("/:id", async (req, res) => {
  try {
    const updated = await Timetable.findByIdAndUpdate(
      req.params.id,

      req.body,

      { new: true },
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// ================= DELETE =================
router.delete("/:id", async (req, res) => {
  try {
    await Timetable.findByIdAndDelete(req.params.id);

    res.json({
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
