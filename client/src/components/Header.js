import React from "react";
import logo from "../assets/writesmith logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const showalert = () =>{
    alert("Wait!");
  }  
  return (
    <>
      <header className="App-header">
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>  
      <div className="header-right">
      <Link to="/login">
      <button onClick={showalert}>
        Login
      </button>
      </Link>
      <Link to="/signup">
      <button onClick={showalert}>
        Sign Up
      </button>
      </Link>
      </div>
     
      </header>
    </>
  );
};

export default Header;
