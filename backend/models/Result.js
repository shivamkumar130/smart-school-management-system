const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    className: { type: String, required: true },
    maths: { type: Number, default: 0 },
    english: { type: Number, default: 0 },
    evs: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Result", resultSchema);
