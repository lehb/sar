import React from "react";
import "./ImgCom.css";
const ImgComp = ({ src, width, height, name }) => {
  console.log(name, src);
  return (
    <div className="container-img">
      {src!=undefined ?<img src={src} alt={name} style={{ width: width, height: height }} />:null}
      <div className="content">
      {name.length?<p>{name}</p>:null} 
      </div>
    </div>
  );
};
export default ImgComp;
