import React, { useState, useEffect, useContext } from "react";
import "./formannexe.css";
import inputImg from "../../assets/Capa 2.svg";
import ok from "../../assets/ok.png";
import { ahrContext } from "../../store/ahrContext";
import { TourContext } from "../../store/tourContext";
const FormAnnexe = ({ type, action, ph, id, setAction }) => {
  const { state, dispatch } = useContext(ahrContext);
  const { stateTour, dispatchTour } = useContext(TourContext);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [hasError, setHasError] = useState(true);
  const restAll = () => {
    setTitle("");
    setImg("");
    setHasError(true);
  };
  useEffect(() => {
    if (title && img) {
      setHasError(false);
    }
  }, [title, img]);
  useEffect(() => {
    if (!hasError) {
      if (type == "ahr") {
        switch (action) {
          case "ADD_NATURE":
            dispatch({ type: "ADD_NATURE", payload: { title, img } });
            break;
          case "ADD_DOCS":
            dispatch({ type: "ADD_DOCS", payload: { title, img } });
            restAll();
            break;
          case "ADD_ACTIONS":
            dispatch({ type: "ADD_ACTIONS", payload: { title, img } });
            restAll();
            break;
          case "ADD_FOURMULAIRES":
            dispatch({ type: "ADD_FOURMULAIRES", payload: { title, img } });
            restAll();
            break;
          default:
            break;
        }
      } else {
        switch (action) {
          case "ADD_NATURE_TOUR":
            dispatchTour({ type: "ADD_NATURE_TOUR", payload: { title, img } });
            break;
          case "ADD_DOCS_TOUR":
            dispatchTour({ type: "ADD_DOCS_TOUR", payload: { title, img } });
            restAll();
            break;
          case "ADD_ANOMALIES_TOUR":
            dispatchTour({
              type: "ADD_ANOMALIES_TOUR",
              payload: { id: id, title, img },
            });
            restAll();
            break;
          case "ADD_ACTIONS_TOUR":
            setAction({ ...action, title: title, img: img });
            break;
          default:
            break;
        }
      }
    }
  }, [hasError]);
  function convertImg(img) {
    const file = img;
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        setImg(reader.result);
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
          value={title}
          onChange={(e) => {
            e.preventDefault();
            setTitle(e.target.value);
          }}
          placeholder={ph}
        />
        <div className="input-wapper">
          <input
            type="file"
            id="inputFile"
            accept="image/*"
            onChange={(e) => {
              setImg(convertImg(e.target.files[0]));
            }}
          />
          <label htmlFor="inputFile">
            <div className="img-wrapper">
              {img ? (
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

export default FormAnnexe;
