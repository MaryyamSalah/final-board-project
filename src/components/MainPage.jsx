import { React } from "react";
import Navbar from "./Navbar";

export default function Mainpage(props) {
  return (
    <div>
      <Navbar />
      <props.page />
    </div>
  );
}
