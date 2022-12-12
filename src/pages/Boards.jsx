import { React, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function Boards() {
  const navigate = useNavigate();
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
    navigate(`sigleBoard:${id}`);
  }
  return (
    <div>
      {boardsList.map((bord) => {
        return (
          <div>
            <h1 onClick={() => goToSingleBoard(bord.id)}>{bord.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
export default Boards;
