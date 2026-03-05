function matchCareers(scores, careers) {
  return careers
    .map((career) => {
      let matchScore = 0;

      career.traits.forEach((trait) => {
        if (scores[trait]) {
          matchScore += scores[trait];
        }
      });

      return {
        ...career,
        fitPercentage: Math.min(100, matchScore * 5),
      };
    })
    .sort((a, b) => b.fitPercentage - a.fitPercentage);
}

module.exports = matchCareers;