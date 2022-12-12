import { React } from "react";
import { Link } from "react-router-dom";

function Navbar({ isAuth, signUserOut }) {
  return (
    <nav className="bg-gray-800">
      <Link to="/">Home</Link>
      {isAuth ? (
        <button onClick={signUserOut}>Log Out</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
export default Navbar;
