import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
function Navbar({ isAuth, signUserOut }) {
  return (
    <nav className="bg-gray-800 py-3 fixed top-0 left-0 z-20 w-full">
      <div className="max-w-9xl mx-auto flex items-center px-5  md:px-10">
        <div className="mr-6 md:mr-24">
          <Link href="#" className="text-4xl text-purple-500 font-bold" to="/">
            Re:Tasks
          </Link>
        </div>
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
        <div className="ml-auto mr-3 hidden sm:block">
          {isAuth ? (
            <button
              onClick={signUserOut}
              className="text-purple-500 hover:bg-gray-700  px-3 py-2 rounded-md text-xl font-medium "
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/login"
              className="text-purple-500 hover:bg-gray-700  px-3 py-2 rounded-md text-xl font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
