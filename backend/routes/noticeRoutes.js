const express = require("express");
const Notice = require("../models/Notice");

const router = express.Router();

// ================= GET ALL NOTICES =================
router.get("/", async (req, res) => {
  try {
    const notices = await Notice.find().sort({
      createdAt: -1,
    });

    res.json(notices);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// ================= ADD NOTICE =================
router.post("/", async (req, res) => {
  try {
    const notice = new Notice({
      title: req.body.title,
      date: req.body.date,
    });

    await notice.save();

    res.json({
      success: true,
      message: "Notice Added Successfully",
      notice,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// ================= UPDATE NOTICE =================
router.put("/:id", async (req, res) => {
  try {
    const updatedNotice = await Notice.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );

    res.json({
      success: true,
      message: "Notice Updated",
      updatedNotice,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// ================= DELETE NOTICE =================
router.delete("/:id", async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Notice Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
