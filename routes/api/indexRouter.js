const express = require("express");
const router = express.Router();
const TeacherApplication = require("../../database/models").TeacherApplications;
const path = require("path");

//SIGNING UP USERS

//SAVING TEACHER APPLICATION
router.post("/teach", async (req, res) => {
  try {
    const applicationBody = JSON.parse(req.body.data);
    let resume;
    if (req.files) {
      resume = req.files.resume;
      if (resume.mimetype.includes("pdf") || resume.mimetype.includes("word")) {
        allowedTypes = ["pdf", "docx"];
        allowedTypes.some((type) => {
          if (resume.name.includes(type))
            resume.name = `${applicationBody.name}-${applicationBody.subject}-${
              Math.floor(Math.random() * 999) + 100
            }.${type}`;
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
            console.log("File uploaded");
          }
        );
      }
    }
    await TeacherApplication.create({
      ...applicationBody,
      resumePath: resume.name,
    });
    console.log("App saved");
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
