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
  {
    /* Fill out remaining code here */
  }
});

router.delete("/:id", async (req, res) => {
  {
    /* Fill out remaining code here */
  }
});

module.exports = router;
