const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const assessmentRoutes = require("./routes/assessmentRoutes");

// Use routes
app.use("/api/assessment", assessmentRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});