// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYz_-88g-DkZAZUahu9ZepUWTnloZvQls",
  authDomain: "artes-rk.firebaseapp.com",
  projectId: "artes-rk",
  storageBucket: "artes-rk.appspot.com",
  messagingSenderId: "748583234283",
  appId: "1:748583234283:web:3fcf0bd8960043399bacae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);