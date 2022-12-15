import { React } from "react";
import { Link } from "react-router-dom";

function Navbar({ isAuth, signUserOut }) {
  return (
    <nav className="bg-gray-800 py-3 relative z-20">
      <div className="max-w-6xl mx-auto ">
        <Link
          to="/"
          className="text-gray-300 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"
        >
          Home
        </Link>
        <Link
          to="/boards"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium "
        >
          Boards
        </Link>
        <Link
          to="/aboutus"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium "
        >
          About us
        </Link>
        {isAuth ? (
          <button
            onClick={signUserOut}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium "
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/login"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
