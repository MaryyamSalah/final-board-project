import { React } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import sign from "../images/sign.png";
import google from "../images/google.png";
function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      navigate("/");
    });
  };
  return (
    <div>
      <div className="bg-light-pink min-h-screen flex justify-center items-center">
        <div className="max-w-sm bg-gray-800 mx-auto text-gray-200 w-96 rounded-2xl -translate-y-20">
          <div className="text-center">
            <img src={sign} alt="sign in image" />
            <p className="text-lg">Sign In With Google to Continue</p>
            <button
              onClick={signInWithGoogle}
              className="rounded-md bg-purple-800 mb-20 py-2 px-4 mt-3 flex mx-auto"
            >
              Sign In With Google
              <img src={google} alt="" className="w-5 ml-2 mt-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
