import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Result() {
  const { state } = useLocation();

  if (!state) return <p>No Results Found</p>;

  return (
    <><Navbar />
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold mb-6">
        Your Career Matches
      </h1>

      <div className="mb-6">
        {state.careerSuggestions.map((career, index) => (
          <p key={index}>{career}</p>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6">Trait Scores</h2>

      {Object.entries(state.scores).map(([trait, value]) => (
        <p key={trait}>
          {trait}: {value}
        </p>
      ))}
    </div>
    <Footer />
    </>
  );
}

export default Result;