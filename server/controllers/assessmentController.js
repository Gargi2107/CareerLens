const fs = require("fs");
const path = require("path");

const getQuestions = (req, res) => {
  try {
    const filePath = path.join(__dirname, "../data/questions.json");
    const questions = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error reading questions file" });
  }
};

module.exports = { getQuestions };