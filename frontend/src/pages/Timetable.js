const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
  },

  day: {
    type: String,
    required: true,
  },

  period1: String,
  period2: String,
  period3: String,
  period4: String,
  period5: String,
  period6: String,
});

module.exports = mongoose.model("Timetable", timetableSchema);
