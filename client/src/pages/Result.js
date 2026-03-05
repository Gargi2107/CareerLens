import { useLocation } from "react-router-dom";

function Result() {
  const { state } = useLocation();
  if (!state) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold">No results found.</h2>
        <p>Please complete the assessment first.</p>
      </div>
    );
  }
  const student = JSON.parse(localStorage.getItem("student"));

  const { careers } = state;
  return (
    <div className="p-10">
      <div className="bg-gray-100 p-6 rounded mb-8">
        <h2 className="text-2xl font-bold">Student Profile</h2>
        <p>Name: {student?.name}</p>
        <p>Email: {student?.email}</p>
        <p>Grade: {student?.grade}</p>
      </div>
      <h1 className="text-3xl font-bold mb-6">Your Career Matches</h1>

      {careers.map((career, index) => (
        <div key={index} className="bg-white p-6 shadow rounded mb-6">
          <h2 className="text-xl font-semibold">
            {career.role} — {career.fitPercentage}%
          </h2>

          <p className="mt-2">
            Recommended Subjects: {career.subjects.join(", ")}
          </p>

          <p>Degree Path: {career.degreePath.join(", ")}</p>

          <p>Skills: {career.skills.join(", ")}</p>

          <p>Backup Careers: {career.backupCareers.join(", ")}</p>

          <div className="mt-3">
            <strong>5-Year Roadmap:</strong>
            <ul className="list-disc ml-5">
              {career.roadmap.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Result;
