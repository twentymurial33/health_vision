import SignUp from "./components/SignUp";
import { AuthProvider } from "./AuthContext";
import Home from "./components/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import "./App.css";

const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "SignUp", element: <SignUp /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <Router>
        <AppWrapper />
      </Router>
    </div>
  );
}

export default App;
