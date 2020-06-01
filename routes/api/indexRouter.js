const express = require("express");
const router = express.Router();
const TeacherApplication = require("../../database/models").TeacherApplications;
const { v4: uuidv4 } = require("uuid");
const path = require("path");

//SIGNING UP USERS

//SAVING TEACHER APPLICATION
router.post("/teach", async (req, res) => {
  try {
    let newApplication = TeacherApplication.build(JSON.parse(req.body.data));
    if (req.files) {
      let resume = req.files.resume;
      if (resume.mimetype.includes("pdf") || resume.mimetype.includes("word")) {
        allowedTypes = ["pdf", "docx", "doc"];
        allowedTypes.some((type) => {
          if (resume.name.includes(type)) resume.name = `${uuidv4()}.${type}`;
        });
        resume.mv(
          path.resolve(
            __dirname,
            "../../",
            "client/src/assets/uploads",
            resume.name
          ),
          (err) => {
            if (err) console.log(err);
            console.log("File Uploaded");
          }
        );
      } else {
        console.log("Incorrect Type");
      }
      newApplication.resumePath = resume.name;
    }
    await newApplication.save();
    console.log("App saved");
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
