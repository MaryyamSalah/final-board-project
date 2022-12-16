import { React } from "react";
import png1 from "../images/4041.webp";
import png2 from "../images/4042.webp";
import png3 from "../images/4043.webp";
import png4 from "../images/4044.webp";
import png5 from "../images/4045.svg";
import png6 from "../images/img7.png";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-light-pink">
      <div className="-translate-y-20">
        <img src={png6} alt="" className="w-96 mx-auto" />
        <div className="relative z-10 -translate-y-10">
          <h2 className="text-gray-800 text-center text-6xl font-bold">
            Page Not Found
          </h2>
          <h3 className="text-purple-800 text-center text-lg mt-2">
            Maybe You Are Searching For Halit's Cake
          </h3>
          <div className="flex justify-center">
            <Link
              to="/"
              className="rounded-md bg-purple-800 text-white mb-10 py-2 px-6 mt-3 mr-5 w-44 "
            >
              Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
