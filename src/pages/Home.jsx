import { React, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { addDoc, collection, setDoc, doc, deleteDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import Boards from "./Boards";
import Login from "./Login";
import home from "../images/home.png";
function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col xl:flex-row justify-between">
      <div className="flex justify-center flex-col text-center mt-20 xl:mt-0 xl:-translate-y-16 pl-20">
        <h1 className="text-6xl text-gray-800 font-bold ">
          Retask brings all your tasks, <br />
          teammates, and tools together
        </h1>
        <p className="text-purple-800 my-3">
          Keep everything in the same place—even if your team isn’t.
        </p>
        <div className="flex mx-auto">
          <Link
            to="./login"
            className="rounded-md bg-purple-800 text-gray-200 mb-10 py-2 px-6 mt-3 mr-5 w-40"
          >
            Login
          </Link>
          <Link
            to="./boards"
            className="rounded-md bg-gray-800 text-gray-200 mb-10 py-2 px-6 mt-3 w-40"
          >
            Create Board
          </Link>
        </div>
      </div>
      <div className="max-w-4xl mx-auto xl:mx-0">
        <img src={home} alt="" className="" />
      </div>
    </div>
  );
}
export default Home;
