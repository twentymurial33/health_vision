import SignUp from "./components/SignUp";
import { app } from "./firebase-config";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  return (
    <div>
      <SignUp />
    </div>
  );
}

export default App;
