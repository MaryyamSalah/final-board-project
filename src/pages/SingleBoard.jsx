import { React, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
function SingleBoard({ isAuth }) {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (!isAuth) {
      Navigate("/");
    }
  }, []);
  return <div className="bg-light-pink min-h-screen">{id}</div>;
}
export default SingleBoard;
