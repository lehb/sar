import React from "react";
import "./headingReport.css";
import logo from "../../assets/logo_ocp.png";
const HeadingReport = ({ rapport, text }) => {
  return (
    <div className="heading">
      <img src={logo} alt="logo" />
      <div className="heading-title">
        <h1>Rapport {rapport}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeadingReport;
