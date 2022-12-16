import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
function Navbar({ isAuth, signUserOut }) {
  const [userProfile, setUserProfile] = useState(false);
  const [username, setusername] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserProfile(user.photoURL);
      setusername(user.photoURL);
    } else {
      setusername(false);
    }
  });
  return (
    <nav className="bg-gray-800 py-3 relative z-20">
      <div className="max-w-9xl mx-auto flex items-center px-10">
        <div>
          <Link
            to="/"
            className="text-white text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to="/boards"
            className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium "
          >
            Boards
          </Link>
        </div>
        <div>
          <Link
            to="/aboutus"
            className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium "
          >
            About us
          </Link>
        </div>
        <div className="ml-auto mr-3">
          {isAuth ? (
            <button
              onClick={signUserOut}
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium "
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/login"
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
            >
              Login
            </Link>
          )}
        </div>
        {userProfile !== false && (
          <div className="flex flex-col justify-center items-center">
            <img
              src={userProfile}
              alt=""
              className="rounded-full w-12 ring-2 ring-white"
            />
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
