// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO_v4Yj_FgvCJgQu-gPsgx0jXBmIXgE5w",
  authDomain: "netflix-clone-64496.firebaseapp.com",
  projectId: "netflix-clone-64496",
  storageBucket: "netflix-clone-64496.appspot.com",
  messagingSenderId: "502243947955",
  appId: "1:502243947955:web:3bdafe2d2b72b026b187c6",
  measurementId: "G-ZS51EGMLWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);