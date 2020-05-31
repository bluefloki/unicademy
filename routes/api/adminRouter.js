const express = require("express");
const router = express.Router();
const TeacherApplication = require("../../database/models").TeacherApplication;
const { v4: uuidv4 } = require("uuid");
const path = require("path");

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
  console.log(req.params.id);
  try {
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
});

module.exports = router;
