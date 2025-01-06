// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-gpt-f37bc.firebaseapp.com",
  projectId: "netflix-gpt-f37bc",
  storageBucket: "netflix-gpt-f37bc.firebasestorage.app",
  messagingSenderId: "87159418918",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-37MCS0174F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);