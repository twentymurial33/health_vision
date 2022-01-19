// import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}
      <HomePage />
    </div>
  );
}

export default App;
