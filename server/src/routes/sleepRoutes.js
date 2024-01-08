const express = require("express");
const router = express.Router();
const {
  getSleeps,
  addSleep,
  deleteSleep,
} = require("../controllers/sleepController");

router.get("/", async (req, res) => {
  const sleeps = await getSleeps();
  res.send(sleeps);
});

router.post("/", async (req, res) => {
  const day = req.body.day;
  const hours = req.body.hours;
  const score = req.body.score;
  const result = await addSleep(day, hours, score);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const day = req.body.day;
  const hours = req.body.hours;
  const score = req.body.score;
  const result = await updateSleep(id, day, hours, score);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await deleteSleep(id);
  res.send(result);
});

module.exports = router;
