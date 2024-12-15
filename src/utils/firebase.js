// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQDwmGoCDCS20WEG8hiesaggYC7ddousg",
  authDomain: "netflix-gpt-3c9d0.firebaseapp.com",
  projectId: "netflix-gpt-3c9d0",
  storageBucket: "netflix-gpt-3c9d0.firebasestorage.app",
  messagingSenderId: "904148951805",
  appId: "1:904148951805:web:982c5f112f637e4d441494",
  measurementId: "G-KPTT2N8F07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);