const express = require("express");
const Result = require("../models/Result");

const router = express.Router();

const calcTotal = (body) =>
  Number(body.maths || 0) + Number(body.english || 0) + Number(body.evs || 0);

router.get("/", async (req, res) => {
  try {
    const results = await Result.find().sort({ createdAt: -1 });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const payload = {
      ...req.body,
      total: calcTotal(req.body),
    };
    const result = new Result(payload);
    await result.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const payload = {
      ...req.body,
      total: calcTotal(req.body),
    };
    const updated = await Result.findByIdAndUpdate(req.params.id, payload, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Result.findByIdAndDelete(req.params.id);
    res.json({ message: "Result deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
