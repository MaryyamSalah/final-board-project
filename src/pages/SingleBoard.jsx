import { React } from "react";
import { useParams } from "react-router-dom";
function SingleBoard() {
  const { id } = useParams();
  return <div className="bg-gray-100 min-h-screen">{id}</div>;
}
export default SingleBoard;
