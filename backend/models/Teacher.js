const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    name: String,
    subject: String,
    qualification: String,
    image: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Teacher", teacherSchema);
