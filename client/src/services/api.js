import axios from "axios";
console.log(window.location.origin);
const API = axios.create({
  baseURL: "/api",
});

export const fetchQuestions = () => API.get("/assessment/questions");
export const submitAssessment = (data) =>
  API.post("/assessment/results/submit", data);
