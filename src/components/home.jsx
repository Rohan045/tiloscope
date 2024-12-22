import React from "react";
import logo from "../assests/TiloScopeLogo.png";
import "../styles/home.css";
import AuthForm from "./authentication.jsx";

const HomePage = () => {
  const handleEnterGame = () => {
    alert("Welcome to TiloScope! Entering the game...");
    // Add game entry logic here
  };

  return (
    <div className="homepage-container">
      <div className="homepage-logo-section">
        <img src={logo} alt="TiloScope Logo" className="homepage-logo" />
      </div>
      <div className="homepage-button-section">
        <AuthForm />
      </div>
    </div>
  );
};

export default HomePage;