import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB72Z7WJCzyebVX3KYPV0OAsIx3iJCh6Qg",
  authDomain: "somativawebdev.firebaseapp.com",
  projectId: "somativawebdev",
  storageBucket: "somativawebdev.appspot.com",
  messagingSenderId: "68382944",
  appId: "1:68382944:web:1eb046385ebbe0a8d26085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);