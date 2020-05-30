const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");

router.post("/teach", (req, res) => {
  console.log(req);
  if (req.files) console.log(req.files);
  try {
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
