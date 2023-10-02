import { useState } from "react";
import logo from "../assets/writesmith logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const login= () =>{
    alert("Logging In!");
    setLoggedIn(true);
  }  

  const logout = () =>{
    setLoggedIn(false);
  }
  const [loggedIn, setLoggedIn] = useState(true);

  let headerButton;
  if (loggedIn) {
          
    console.log("loggedin")
    headerButton=
  
    <button onClick={logout}>
      Logout
    </button>
   
  }

  else{
    headerButton=
   <>
  
    <button onClick={login}>
      Login
    </button>
    
    <Link to="/signup">
    <button >
      Sign Up
    </button>
    </Link></>
  }
  return (
    <>
      <header className="App-header">
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link> 

      <div className="header-right">
        
    
     {headerButton}
      </div>
     
      </header>
    </>
  );
};

export default Header;
