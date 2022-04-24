// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFgB3p5fbf31_-0bhodLR5XizCQ3GbMjY",
  authDomain: "ema-john-simple-5eab5.firebaseapp.com",
  projectId: "ema-john-simple-5eab5",
  storageBucket: "ema-john-simple-5eab5.appspot.com",
  messagingSenderId: "999052405980",
  appId: "1:999052405980:web:f7a5f61b47a0e45aa2d819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;