const express = require("express");
const router = express.Router();

router.post("/teach", (req, res) => {
  console.log(req.body);
  console.log(req.files);
  try {
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
