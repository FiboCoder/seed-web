import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQn41osyOCm_hYjvUeb-Q4XcSOrrL6A28",
  authDomain: "cashfy-8d941.firebaseapp.com",
  projectId: "cashfy-8d941",
  storageBucket: "cashfy-8d941.appspot.com",
  messagingSenderId: "815918664596",
  appId: "1:815918664596:web:99fa0c0f259df5fbc45d81",
  measurementId: "G-P67EZFFJRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);