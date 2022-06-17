import React,{useState, useContext, useEffect} from "react";
import "./galery.css";
import { ImgComp } from "../../components";
import FormAnnexe_bis from "../formAnnexe_bis/FormAnnexe_bis";
import { TourContext } from "../../store/tourContext";
const Galery = ({pieces, type, reg, setReg}) => {
  const {stateTour, dispatchTour} = useContext(TourContext)
  const [currentAno, setCurrentAno] = useState()
  return (
    <>
      <div className="galery">
        {pieces?.length
          ? pieces.map((p, id) => {
              return (
                <div
                  key={id}
                  className="galery__img-wrapper"
                  onDoubleClick={() => {
                    if(type=='anomalies'){
                   document.getElementById("myModal").style.display = "block";
                    }
                    setCurrentAno(p.id)
                  }}
                >
                  <div className="container-img-galery">
                    <ImgComp src={p.img} name={p.action?p.title+'[Résolu]' :p.title} />
                  </div>
                </div>
              );
            })
          : "Pas d'image téléchargée"}
      </div>
      {type=='anomalies'&&<div id="myModal" className="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              document.getElementById("myModal").style.display = "none";
            }}
          >
             &times;
          </span>
          <div className="container-check">
            <div className="check">
              <p>Anomalie réglée sur place?</p>
              <label className="switch">
                <input type="checkbox" checked={reg} onChange={()=>{
                  setReg(!reg)
                }} />
                <span className="slider"></span>
              </label>
            </div>
          </div>
          {reg&&<FormAnnexe_bis type='tour'  setReg={setReg} reg={reg} id={currentAno}/>}

        </div>
      </div>}
    </>
  );
};

export default Galery;
