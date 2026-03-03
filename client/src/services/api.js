import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api"
});

export const fetchQuestions = () => API.get("/assessment/questions");
export const submitAssessment = (data) =>
  API.post("/assessment/results/submit", data);