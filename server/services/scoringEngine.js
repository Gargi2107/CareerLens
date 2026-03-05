function calculateScores(answers, questions) {
  const scores = {
    logical: 0,
    creative: 0,
    analytical: 0,
    stability: 0,
    math: 0,
  };

  answers.forEach((answer, index) => {
    const trait = questions[index].trait;

    let value = 0;

    if (answer === "Strongly Agree") value = 5;
    if (answer === "Agree") value = 4;
    if (answer === "Neutral") value = 3;
    if (answer === "Disagree") value = 2;
    if (answer === "Strongly Disagree") value = 1;

    scores[trait] += value;
  });

  return scores;
}

module.exports = calculateScores;