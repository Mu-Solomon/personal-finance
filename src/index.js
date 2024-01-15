import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./components/Login";
import App from "./App";

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleCredentialsChange = (field, value) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [field]: value,
    }));
  };

  const handleLogin = () => {
    // Checking if the username and password match the criteria for showing the App component
    if (credentials.username === "kojja" && credentials.password === "kojja1") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      console.log("Invalid credentials");
    }
  };

  return (
    <React.StrictMode>
      {isLoggedIn ? (
        <App />
      ) : (
        <Login
          credentials={credentials}
          handleCredentialsChange={handleCredentialsChange}
          handleLogin={handleLogin}
          isLoggedIn={isLoggedIn}
        />
      )}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
