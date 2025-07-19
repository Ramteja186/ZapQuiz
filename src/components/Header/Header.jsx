import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.jpeg";

function Header() {
  return (
    <header className="App-header">
      <img src={Logo} className="App-logo" alt="logo" />
      <h1>ZapQuiz</h1>
    </header>
  );
}

export default Header;
