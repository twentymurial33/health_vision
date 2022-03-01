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
      <AuthProvider>
        <Router>
          <AppWrapper />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
