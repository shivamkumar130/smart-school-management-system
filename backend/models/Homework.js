const mongoose = require("mongoose");

const homeworkSchema = new mongoose.Schema({
  title: String,

  description: String,

  className: String,

  subject: String,

  dueDate: String,
});

module.exports = mongoose.model("Homework", homeworkSchema);
