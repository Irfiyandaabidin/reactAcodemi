import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu6mZCS740p_WC2-CIg5E4RDmjTuue1IM",
  authDomain: "fir-app-76b20.firebaseapp.com",
  projectId: "fir-app-76b20",
  storageBucket: "fir-app-76b20.appspot.com",
  messagingSenderId: "683020874181",
  appId: "1:683020874181:web:1c5d702dcf14ffa87fdbac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
