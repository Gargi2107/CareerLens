const express = require("express");
const router = express.Router();
const { getQuestions } = require("../controllers/assessmentController");

router.get("/questions", getQuestions);

module.exports = router;