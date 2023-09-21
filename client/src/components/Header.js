import React from "react";
import logo from "../assets/writesmith logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="App-header">
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>  
      </header>
    </>
  );
};

export default Header;
