const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const assessmentRoutes = require("./routes/assessmentRoutes");
app.use("/api/assessment", assessmentRoutes);

// Serve React build
app.use(express.static(path.join(__dirname, "../client/build")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
