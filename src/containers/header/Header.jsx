import React from "react";
import "./header.css";
import {  Navbar } from "../../components";

const Header = ({title}) => {
  return (
    <div className="header">
      <Navbar />
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
