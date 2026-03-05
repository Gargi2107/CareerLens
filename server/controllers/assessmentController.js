const questions = require("../data/questions.json");
const careers = require("../data/careers.json");
const calculateScores = require("../services/scoringEngine");
const matchCareers = require("../services/careerMatcher");
const generateRoadmap = require("../services/roadmapGenerator");

const getQuestions = (req, res) => {
  res.json(questions);
};
const submitAssessment = (req, res) => {
  const { answers } = req.body;

  const scores = calculateScores(answers, questions);
  const matchedCareers = matchCareers(scores, careers);

  const topCareers = matchedCareers.slice(0, 3).map((career) => ({
    ...career,
    roadmap: generateRoadmap(career.role),
  }));
  res.json({
    scores,
    careers: topCareers,
  });
};

module.exports = {
  getQuestions,
  submitAssessment,
};
