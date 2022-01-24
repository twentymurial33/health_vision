// import firebase from "firebase";
// import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyBj1VEuxGUcl6JipMjr4vlREiBjZpFBQbA",
  authDomain: "fitness-expo-bf40d.firebaseapp.com",
  projectId: "fitness-expo-bf40d",
  storageBucket: "fitness-expo-bf40d.appspot.com",
  messagingSenderId: "605510645043",
  appId: "1:605510645043:web:580116cf6f36d04a563a46",
  measurementId: "G-4HRQZH3Z0T",
};

const app = initializeApp(firebaseConfig);

export const auth = app.auth();
