import React, { useState, useEffect, useContext } from "react";
import "./formannexe.css";
import inputImg from "../../assets/Capa 2.svg";
import ok from "../../assets/ok.png";
import { ahrContext } from "../../store/ahrContext";
const FormAnnexe = ({ type }) => {
  const { state, dispatch } = useContext(ahrContext);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [hasError, setHasError] = useState(true);
  useEffect(() => {
    if (title && img) {
      setHasError(false);
    }
  }, [title, img]);

  useEffect(() => {
    if (!hasError) {
      switch (type) {
        case "Nature":
          dispatch({ type: "ADD_NATURE", payload: { title, img } });
          break;
        case "Documents":
          dispatch({ type: "ADD_DOCS", payload: { title, img } });
          setTitle("");
          setImg("");
          setHasError(true);
          break;
        case "Action":
          dispatch({ type: "ADD_ACTIONS", payload: { title, img } });
          setTitle("");
          setImg("");
          setHasError(true);
          break;
        case "Fourmulaires":
          dispatch({ type: "ADD_FOURMULAIRES", payload: { title, img } });
          setTitle("");
          setImg("");
          setHasError(true);
          break;

        default:
          break;
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
      <input
        style={{ width: "251px", marginRight: "4px", padding: "3px" }}
        type="text"
        value={title}
        onChange={(e) => {
          e.preventDefault()
          setTitle(e.target.value);
        }}
        placeholder={type + "..."}
      />
      <div className="input-wapper">
        <input
          type="file"
          id="inputFile"
          accept="image/*"
          // value={img}
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
  );
};

export default FormAnnexe;
