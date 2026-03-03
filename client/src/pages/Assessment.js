import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

function Assessment() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/assessment/questions")
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleNext = () => {
    const updatedAnswers = [...answers, selectedOption];
    setAnswers(updatedAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      const scores = {
        Analytical: 0,
        Creative: 0,
        Practical: 0,
      };

      updatedAnswers.forEach((answer) => {
        if (answer === "Strongly Agree") scores.Analytical += 2;
        if (answer === "Agree") scores.Creative += 2;
        if (answer === "Neutral") scores.Practical += 1;
      });

      const careerSuggestions = [];

      if (scores.Analytical >= 10)
        careerSuggestions.push("Software Developer");
      else if (scores.Creative >= 10)
        careerSuggestions.push("UI/UX Designer");
      else if (scores.Practical >= 5)
        careerSuggestions.push("Project Manager");
      else careerSuggestions.push("Generalist");

      navigate("/result", {
        state: {
          scores,
          careerSuggestions,
        },
      });
    }
  };

  if (questions.length === 0) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <p className="text-lg font-semibold">Loading...</p>
        </div>
        <Footer />
      </>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-indigo-50 flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-2xl p-10 rounded-2xl shadow-xl">

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>
                {currentIndex + 1} / {questions.length}
              </span>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Count */}
          <h3 className="text-gray-500 text-sm mb-2">
            Question {currentIndex + 1} of {questions.length}
          </h3>

          {/* Question Text */}
          <h2 className="text-xl font-semibold mb-6">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {[
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
            ].map((option, index) => (
              <div
                key={index}
                onClick={() => setSelectedOption(option)}
                className={`p-3 rounded-lg cursor-pointer text-center font-medium transition-all duration-200
                ${
                  selectedOption === option
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {option}
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className="mt-6 w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {currentIndex === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Assessment;