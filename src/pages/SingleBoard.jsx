import { React, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
function SingleBoard({ isAuth }) {
  const { id } = useParams();
  const [tasksList, setTasksList] = useState([]);
  const tasksListCollectionRef = collection(db, "Boards", id, "tasksList");
  useEffect(() => {
    if (!isAuth) {
      Navigate("/");
    } else {
      const fetchData = async () => {
        const result = await getDocs(tasksListCollectionRef);
        setTasksList(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

      fetchData();
    }
  }, []);
  return (
    <div className="bg-light-pink min-h-screen flex pt-20">
      {tasksList.map((list) => {
        return (
          <div>
            {console.log(list.listTitle)}
            <h1>{list.listTitle}</h1>
          </div>
        );
      })}
    </div>
  );
}
export default SingleBoard;
