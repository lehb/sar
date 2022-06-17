import React, { useState, useEffect, useContext } from "react";
import "./formannexe.css";
import inputImg from "../../assets/Capa 2.svg";
import ok from "../../assets/ok.png";
import { TourContext } from "../../store/tourContext";
const FormAnnexe_bis = ({
  id, 
  reg,
  setReg
}) => {
  const { stateTour, dispatchTour } = useContext(TourContext);
  const [hasError, setHasError] = useState(true);
  const [ac, setac] = useState("");
  const [acimg, setacimg] = useState("");
  const restAll = () => {
    setac("");
    setacimg("");
    setHasError(true);
    setReg(!reg)
  };
  useEffect(() => {
    if (ac && acimg) {
      setHasError(false);
    }
  }, [ac, acimg]);
  useEffect(() => {
    if (!hasError) {
      dispatchTour({
        type:'ADD_ACTION_IMM',payload:{ac,acimg,id}
      })
      restAll();
    }
  }, [hasError]);
  function convertImg(img) {
    const file = img;
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        setacimg(reader.result);
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  return (
    <div className="form-annexe">
      <div className="input-upload">
        <input
          style={{ width: "251px", marginRight: "4px", padding: "3px" }}
          type="text"
          value={ac}
          onChange={(e) => {
            e.preventDefault();
            setac(e.target.value);
          }}
          placeholder='Action immediate...'
        />
        <div className="input-wapper">
          <input
            type="file"
            id="inputFile-bis"
            accept="image/*"
            onChange={(e) => {
              setacimg(convertImg(e.target.files[0]));
            }}
          />
          <label htmlFor="inputFile-bis">
            <div className="img-wrapper">
              {acimg ? (
                <img src={ok} alt="upload" />
              ) : (
                <img src={inputImg} alt="upload" />
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormAnnexe_bis;
