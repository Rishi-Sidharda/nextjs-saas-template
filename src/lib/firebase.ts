// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvQWxUxChrAba24pAz8-sPEaxcEnVMXhQ",
  authDomain: "newtest-1aff8.firebaseapp.com",
  projectId: "newtest-1aff8",
  storageBucket: "newtest-1aff8.firebasestorage.app",
  messagingSenderId: "472815558217",
  appId: "1:472815558217:web:5359389c1c8982eef86998",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
