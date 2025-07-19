import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.jpeg";

function Header({ onLogoClick }) {
  return (
    <header className="App-header">
      <img src={Logo} className="App-logo" alt="logo" onClick={onLogoClick} style={{ cursor: 'pointer' }} />
      <h1 onClick={onLogoClick} style={{ cursor: 'pointer' }}>ZapQuiz</h1>
    </header>
  );
}

export default Header;
