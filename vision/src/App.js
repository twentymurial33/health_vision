import SignUp from "./components/SignUp";
import { AuthProvider } from "./AuthContext";
import Home from "./components/HomePage";
import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";
import { UserContext } from "./UserContext";

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
      <UserContext.Provider>
        <AuthProvider>
          <Router>
            <AppWrapper />
          </Router>
        </AuthProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
