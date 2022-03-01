import firebase from "firebase";
require("firebase/auth");
const app = firebase.initializeApp({
  apiKey: "AIzaSyApFZXye56ga5pqtn0HmL8POP4GlShl5bA",
  authDomain: "test-34cc6.firebaseapp.com",
  projectId: "test-34cc6",
  storageBucket: "test-34cc6.appspot.com",
  messagingSenderId: "19269944890",
  appId: "1:19269944890:web:096e42c0b70d4354a7d703",
  measurementId: "G-XKGD3G3Y05",
});

export const auth = app.auth();
export default app;

// apiKey: "AIzaSyBj1VEuxGUcl6JipMjr4vlREiBjZpFBQbA",
// authDomain: "fitness-expo-bf40d.firebaseapp.com",
// projectId: "fitness-expo-bf40d",
// storageBucket: "fitness-expo-bf40d.appspot.com",
// messagingSenderId: "605510645043",
// appId: "1:605510645043:web:580116cf6f36d04a563a46",
// measurementId: "G-4HRQZH3Z0T",
