import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 shadow">
      <h1 className="text-xl font-bold text-indigo-600"><Link to="/">CareerLens</Link></h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/assessment" className="bg-indigo-600 text-white px-4 py-2 rounded-full">
          Start Now
        </Link>
      </div>
    </div>
  );
}

export default Navbar;