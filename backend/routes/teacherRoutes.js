const express = require("express");

const router = express.Router();

const multer = require("multer");

const fs = require("fs");

const Teacher = require("../models/Teacher");

// ================= STORAGE =================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }

    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
});

// ================= GET =================
router.get("/", async (req, res) => {
  const teachers = await Teacher.find();

  res.json(teachers);
});

// ================= ADD =================
router.post(
  "/",
  upload.single("image"),

  async (req, res) => {
    try {
      const teacher = new Teacher({
        ...req.body,

        image: req.file ? req.file.filename : "",
      });

      await teacher.save();

      res.json(teacher);
    } catch (error) {
      console.log(error);

      res.status(500).json({
        error: error.message,
      });
    }
  },
);

// ================= UPDATE =================
router.put(
  "/:id",
  upload.single("image"),

  async (req, res) => {
    try {
      const oldTeacher = await Teacher.findById(req.params.id);

      let image = oldTeacher.image;

      // DELETE OLD IMAGE
      if (req.file) {
        if (oldTeacher.image && fs.existsSync(`uploads/${oldTeacher.image}`)) {
          fs.unlinkSync(`uploads/${oldTeacher.image}`);
        }

        image = req.file.filename;
      }

      const updated = await Teacher.findByIdAndUpdate(
        req.params.id,

        {
          ...req.body,

          image,
        },

        {
          new: true,
        },
      );

      res.json(updated);
    } catch (error) {
      console.log(error);

      res.status(500).json({
        error: error.message,
      });
    }
  },
);

// ================= DELETE =================
router.delete(
  "/:id",

  async (req, res) => {
    try {
      const teacher = await Teacher.findById(req.params.id);

      // DELETE IMAGE
      if (teacher.image && fs.existsSync(`uploads/${teacher.image}`)) {
        fs.unlinkSync(`uploads/${teacher.image}`);
      }

      await Teacher.findByIdAndDelete(req.params.id);

      res.json({
        message: "Teacher Deleted",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        error: error.message,
      });
    }
  },
);

module.exports = router;
