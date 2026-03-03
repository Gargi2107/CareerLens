import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />

      <div className="text-center py-24 px-4">
        <h1 className="text-5xl font-bold mb-6">
          Discover a career designed for{" "}
          <span className="text-indigo-600">who you are</span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Our multi-dimensional assessment uncovers your interests,
          personality, strengths and matches you with ideal careers.
        </p>

        <Link
          to="/assessment"
          className="inline-block mt-8 bg-indigo-600 text-white px-6 py-3 rounded-full"
        >
          Start Free Assessment
        </Link>
      </div>

      <div className="grid md:grid-cols-4 gap-6 px-10 py-16 bg-gray-50">
        {["Interests", "Personality", "Values", "Strengths"].map((item) => (
          <div key={item} className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="font-semibold text-lg mb-2">{item}</h3>
            <p className="text-sm text-gray-500">
              Discover insights about your {item.toLowerCase()}.
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;