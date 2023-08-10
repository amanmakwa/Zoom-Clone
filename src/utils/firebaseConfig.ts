import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5brJ3RX1vVnt1ChUJNg0y46TECEhwKGw",
  authDomain: "zoom-clone-1b5fa.firebaseapp.com",
  databaseURL: "https://zoom-clone-1b5fa-default-rtdb.firebaseio.com",
  projectId: "zoom-clone-1b5fa",
  storageBucket: "zoom-clone-1b5fa.appspot.com",
  messagingSenderId: "634888978203",
  appId: "1:634888978203:web:73282ddac032eb9cb8ddbe",
  measurementId: "G-N90VB6R1VE"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
