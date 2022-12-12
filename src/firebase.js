// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAamKhwdPMO0Klrtav0vs0EzA4DskCrZv0",
  authDomain: "bordproject-13269.firebaseapp.com",
  projectId: "bordproject-13269",
  storageBucket: "bordproject-13269.appspot.com",
  messagingSenderId: "148551919566",
  appId: "1:148551919566:web:1ba1b3cf9621c737c3ad9f",
  measurementId: "G-SNXYN7PJ7K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);
