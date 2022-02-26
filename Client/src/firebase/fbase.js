// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";

import * as auth from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDcRVWKFBP1bpfs7wPL1z178oYEUDYBfU",
  authDomain: "redeemer-1a3d9.firebaseapp.com",
  projectId: "redeemer-1a3d9",
  storageBucket: "redeemer-1a3d9.appspot.com",
  messagingSenderId: "4353583596",
  appId: "1:4353583596:web:c639101bc179b323e178c9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const authService = auth;
