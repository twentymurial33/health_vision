import SignUp from "./components/SignUp";
import { AuthProvider } from "./AuthContext";
import Home from "./components/HomePage";
import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";

const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <SignUp /> },
    { path: "/Home", element: <Home /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <Router>
        <AppWrapper />
        <AuthProvider />
      </Router>
    </div>
  );
}

export default App;
