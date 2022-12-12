import { React, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { addDoc, collection, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import Boards from "./Boards";
function Home() {
  const [boardTitle, setBoardTitle] = useState("");
  function changeTitleInput(event) {
    setBoardTitle(event.target.value);
  }
  const boardCollection = collection(db, "Boards");
  const creteBoard = async (event) => {
    event.preventDefault();
    const r = await addDoc(boardCollection, { title: boardTitle });
    const path = r._key.path.segments.join("/");
    const newCollectionRef = collection(db, path, "tasksList");
    await addDoc(newCollectionRef, {});
  };
  return (
    <div>
      <Boards />
      <form onSubmit={creteBoard}>
        <input type="text" onChange={changeTitleInput} />
        <input type="submit" className="bg-black text-white" />
      </form>
    </div>
  );
}
export default Home;
