import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-yellow-400 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Menu */}
        <div className="flex flex-wrap gap-8 font-semibold text-black">
          <Link to="/">Home</Link>

          <Link to="/academics">Academics</Link>

          <Link to="/teachers">Teachers</Link>

          <Link to="/facilities">Facilities</Link>

          <Link to="/notices">Notice Board</Link>
        </div>

        {/* Login */}
        <Link
          to="/login"
          className="bg-blue-900 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
