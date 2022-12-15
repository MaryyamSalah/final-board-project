import { React, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { async } from "@firebase/util";

function Boards({ navigate }) {
  const [boardTitle, setBoardTitle] = useState("");
  function changeTitleInput(event) {
    setBoardTitle(event.target.value);
  }
  const boardCollection = collection(db, "Boards");
  const creteBoard = async (event) => {
    event.preventDefault();
    if (boardTitle !== "") {
      const r = await addDoc(boardCollection, { title: boardTitle });
      const path = r._key.path.segments.join("/");
      const newCollectionRef = collection(db, path, "tasksList");
      await addDoc(newCollectionRef, {});
      navigate(`./sigleBoard:${r.id}`);
    }
  };
  const [boardsList, setBoardsList] = useState([]);
  const boardsCollectionRef = collection(db, "Boards");
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDocs(boardsCollectionRef);
      setBoardsList(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchData();
  }, []);
  function goToSingleBoard(id) {
    navigate(`./sigleBoard:${id}`);
  }
  async function remove(id) {
    const boardDoc = doc(db, "Boards", id);
    await deleteDoc(boardDoc);
    setBoardsList(boardsList.filter((bord) => bord.id !== id));
  }
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 px-2 py-2 gap-5">
        {boardsList.map((bord) => {
          return (
            <div className="border-gray-800 border rounded-lg">
              <h1 className="text-2xl text-center mt-6">{bord.title}</h1>
              <button
                className="rounded-md bg-purple-800 text-gray-200 mb-2 py-2 w-36 mt-3 flex flex-col justify-center mx-auto"
                onClick={() => goToSingleBoard(bord.id)}
              >
                <span>Open</span>
              </button>
              <button
                className="rounded-md bg-purple-800 text-gray-200 mb-10 py-2 w-36 flex flex-col text-center mt-3 mx-auto"
                onClick={() => remove(bord.id)}
              >
                <span>Delete</span>
              </button>
            </div>
          );
        })}
        <div className="border-gray-800 border rounded-lg">
          <form
            onSubmit={creteBoard}
            className="flex items-center flex-col mt-5 rounded-lg"
          >
            <input
              type="text"
              onChange={changeTitleInput}
              className="px-2 py-1 text-lg"
            />
            <input
              type="submit"
              className="rounded-md cursor-pointer bg-purple-800 text-gray-200 mb-10 py-2 px-6 mt-3 flex mx-auto"
              value="Add New"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Boards;
