const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
  subject: String,

  teacher: String,

  day: String,

  time: String,

  className: String,
});

module.exports = mongoose.model("Timetable", timetableSchema);
