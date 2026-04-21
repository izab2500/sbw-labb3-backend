const express = require("express");
const { getAllWorkexperiences, createWorkexperience, updateWorkexperience, deleteWorkexperience } = require("../controllers/workexperience")

const router = express.Router();

router.get("/workexperiences", getAllWorkexperiences);
router.post("/workexperiences", createWorkexperience);
router.put("/workexperiences/:id", updateWorkexperience);
router.delete("/workexperiences/:id", deleteWorkexperience);

module.exports = router;
