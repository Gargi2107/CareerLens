function generateRoadmap(role) {
  const roadmap = {
    "Software Developer": [
      "Year 1: Learn programming basics",
      "Year 2: Build projects",
      "Year 3: Learn frameworks",
      "Year 4: Internship",
      "Year 5: Full-time developer role",
    ],

    "UI/UX Designer": [
      "Year 1: Learn design fundamentals",
      "Year 2: Practice Figma & Adobe XD",
      "Year 3: Build portfolio",
      "Year 4: Internship",
      "Year 5: UI/UX Designer role",
    ],

    "Data Analyst": [
      "Year 1: Learn Excel & statistics",
      "Year 2: Learn SQL & Python",
      "Year 3: Build data projects",
      "Year 4: Internship",
      "Year 5: Data Analyst role",
    ],
  };

  return roadmap[role] || [];
}

module.exports = generateRoadmap;
