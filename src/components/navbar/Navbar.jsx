import React, {useContext} from "react";
import "./navbar.css";
import logo from '../../assets/linesmenu.svg'
import {Link } from "react-router-dom";
import { AuthContext } from "../../store/userContext";

const Navbar = () => {
  const {state} = useContext(AuthContext)
  return(<div className="navbar"> 
    <div className="logo">
      <h1>SAR</h1>
    </div>
    <div className="signing">
      {
        !state?.user?.isAuthenticated?
        <Link to="/login"> <button >
        Log in
      </button></Link>:
      <Link to="/login"> <button >
      Log out
    </button></Link>
      }
      
      <Link to="/register"> 
      <p>Sign up</p>
     </Link>
      
    </div>
    <nav className="navbar-toggle">
    <img src={logo} alt="menu"/>   
    </nav>
     </div>) 
};

export default Navbar;

