import { React, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { async } from "@firebase/util";

function Boards({ navigate, isAuth }) {
  const [boardTitle, setBoardTitle] = useState("");
  function changeTitleInput(event) {
    setBoardTitle(event.target.value);
  }
  const boardCollection = collection(db, "Boards");
  const creteBoard = async (event) => {
    event.preventDefault();
    if (boardTitle !== "") {
      const r = await addDoc(boardCollection, {
        title: boardTitle,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
      const path = r._key.path.segments.join("/");
      const newCollectionRef = collection(db, path, "tasksList");
      await addDoc(newCollectionRef, {});
      navigate(`./sigleBoard:${r.id}`);
    }
  };
  const [boardsList, setBoardsList] = useState([]);
  const boardsCollectionRef = collection(db, "Boards");
  useEffect(() => {
    if (isAuth) {
      const fetchData = async () => {
        const result = await getDocs(boardsCollectionRef);
        setBoardsList(
          result.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      };

      fetchData();
    } else {
      navigate("/login");
    }
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
    <div className="bg-light-pink min-h-screen ">
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 px-10 pt-20 gap-5">
        {boardsList.map((bord) => {
          if (isAuth && bord.author.id === auth.currentUser.uid) {
            return (
              <div className="bg-gray-300 shadow-gray-800 shadow-lg rounded-lg">
                <h1 className="text-2xl text-center mt-6">{bord.title}</h1>
                <div className="flex  flex-col items-center">
                  <button
                    className="rounded-md bg-gray-800 text-gray-200 mb-2 py-2 px-6 mt-3 w-40"
                    onClick={() => goToSingleBoard(bord.id)}
                  >
                    <span>Open</span>
                  </button>
                  <button
                    className="rounded-md bg-purple-800 text-gray-200 mb-10 py-2 px-6 mt-3  w-40"
                    onClick={() => remove(bord.id)}
                  >
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            );
          }
        })}
        <div className="bg-gray-300 shadow-gray-800 shadow-lg rounded-lg overflow-hidden px-5">
          <h1 className="text-2xl text-center mt-6">Add New Board</h1>
          <form
            onSubmit={creteBoard}
            className="flex items-center flex-col mt-5 rounded-lg"
          >
            <input
              type="text"
              onChange={changeTitleInput}
              className="px-2 py-1 text-lg mx-5  bg-gray-800 text-white rounded-lg focus:outline-none focus:border-purple-700 focus:border"
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
