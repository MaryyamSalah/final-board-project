import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import SingleBoard from "./pages/SingleBoard";
import Boards from "./pages/Boards";
import About from "./pages/About";
function App() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("isAuth");
      setIsAuth(false);
    });
  };
  return (
    <div>
      <Navbar isAuth={isAuth} signUserOut={signUserOut} />
      <Routes>
        <Route path="/boards" element={<Boards navigate={navigate} />} />
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/sigleBoard:id" element={<SingleBoard />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
