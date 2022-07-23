import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRoutes,
} from "react-router-dom";

import "./App.css";
import LoginForm from "./components/LoginPageComponent/LoginForm";

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // return form login
  const LoginFormApp = () => (
    <div>
      {user.email !== "" ? (
        <div className="logout-div">
          <button className="logout-btn" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );

  //Routes
  const RoutesComponent = () =>
    useRoutes([
      {
        path: "login",
        element: <LoginFormApp />,
      },
      {
        path: "/",
        element: <LoginFormApp />,
      },
    ]);

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Welcome!");
      setUser({
        email: details.email,
        password: details.password,
      });
    } else {
      console.log("Details not match!");
      setError("Details not match!");
    }
  };

  const Logout = () => {
    setUser({ email: "", password: "" });
    setError("");
  };

  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
}

export default App;
