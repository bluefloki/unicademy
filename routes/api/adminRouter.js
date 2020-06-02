const express = require("express");
const router = express.Router();
const TeacherApplication = require("../../database/models").TeacherApplications;
const path = require("path");
const fs = require("fs");

//GETTING TEACHER APPLICATIONS
router.get("/teacherApplications", async (req, res) => {
  try {
    const allApplications = await TeacherApplication.findAll();
    res.status(201).json(allApplications);
  } catch (error) {
    res.status(400).json("Error");
  }
});

//GET SINGLE APPLICATION
router.get("/teacherApplications/:id", async (req, res) => {
  try {
    const application = await TeacherApplication.findOne({
      where: { id: req.params.id },
    });
    res.status(201).json(application);
  } catch (error) {
    console.log(error);
  }
});

//DELETING TEACHER APPLICATIONS
router.delete("/teacherApplications/:id", async (req, res) => {
  try {
    const application = await TeacherApplication.findOne({
      where: { id: req.params.id },
    });
    const { resumePath, id } = application;
    if (resumePath) {
      fs.unlink(
        path.resolve(
          __dirname,
          "../../",
          "client/src/assets/uploads",
          resumePath
        ),
        (error) => {
          if (error) console.log(error);
          console.log("file deleted");
        }
      );
    }
    await application.destroy();
    console.log("application deleted");
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
});

module.exports = router;
