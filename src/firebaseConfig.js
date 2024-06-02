// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6wiDj9sijripVVT_37V7TnUkuqaiYwNs",
  authDomain: "jhero-portfolio-website.firebaseapp.com",
  projectId: "jhero-portfolio-website",
  storageBucket: "jhero-portfolio-website.appspot.com",
  messagingSenderId: "1048459245243",
  appId: "1:1048459245243:web:5c4ca3b8bb3ea37765db9e",
  measurementId: "G-S7629WGZC8",
  databaseURL: "https://jhero-portfolio-website-default-rtdb.firebaseio.com/"
}

const database = getDatabase(app)
