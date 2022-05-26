import React from "react";
import "./ImgCom.css";
const ImgComp = ({ src, width, height, name }) => {
  return (
    <div className="container-img">
      {src.length?<img src={src} alt={name} style={{ width: width, height: height }} />:null}
      <div className="content">
      {name.length?<p>{name}</p>:null} 
      </div>
    </div>
  );
};

export default ImgComp;
