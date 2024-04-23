// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbMfl3J3WAmxaE2KetpXzju2MbxUnRuiQ",
  authDomain: "coffee-store-5f2d6.firebaseapp.com",
  projectId: "coffee-store-5f2d6",
  storageBucket: "coffee-store-5f2d6.appspot.com",
  messagingSenderId: "597768140979",
  appId: "1:597768140979:web:9cafe05eb58bc1f12958c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;