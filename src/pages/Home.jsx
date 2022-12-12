import { async } from "@firebase/util";
import { React, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
function Home() {
  const [boardTitle, setBoardTitle] = useState("");
  function changeTitleInput(event) {
    setBoardTitle(event.target.value);
  }
  const boardCollection = collection(db, "Boards");
  const creteBoard = async (event) => {
    event.preventDefault();
    await addDoc(boardCollection, { title: boardTitle });
  };
  return (
    <div>
      <form boardTitle onSubmit={creteBoard}>
        <input type="text" onChange={changeTitleInput} />
        <input type="submit" className="bg-black text-white" />
      </form>
    </div>
  );
}
export default Home;
