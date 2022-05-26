import React, { useContext, useState, useEffect } from "react";
import "./infos.css";
import { FormAnnexe } from "../../components";
import { ahrContext } from "../../store/ahrContext";
const InfosGenerals = () => {
  const { dispatch, state } = useContext(ahrContext);
  const [infos, setInfos] = useState({
    desc: "",
    encadrant: "",
    hse: "",
    hse_ee: "",
    lieu: "",
    ee: "",
  });
  const [hasError, setHasError] = useState(true);

  useEffect(() => {
    if (
      infos.lieu.length &&
      infos.desc.length  &&
      infos.encadrant.length  &&
      infos.ee.length  &&
      infos.hse.length  &&
      infos.hse_ee
    ) {
      setHasError(!hasError);
    }
  }, [infos]);

  useEffect(() => {
    if(!hasError){
      dispatch({ type: "ADD_AHR_INFOS", payload: infos });
    }
  }, [infos]);
  const handleChange = (event) => {
    event.preventDefault()
    setInfos({
      ...infos,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="infos_generals">
      <input
        type="text"
        name="lieu"
        value={infos.lieu}
        onChange={handleChange}
        placeholder="Lieu..."
      />
      <input
        type="text"
        name="encadrant"
        value={infos.encadrant}
        onChange={handleChange}
        placeholder="Encadrant HM..."
      />
      <input
        type="text"
        name="hse"
        value={infos.hse}
        onChange={handleChange}
        placeholder="HSE OCP... "
      />
      <input
        type="text"
        name="hse_ee"
        value={infos.hse_ee}
        onChange={handleChange}
        placeholder="HSE EE "
      />
      <input
        type="text"
        name="desc"
        value={infos.desc}
        onChange={handleChange}
        placeholder="Description de la mission... "
      />
      <input
        type="text"
        name="ee"
        value={infos.ee}
        onChange={handleChange}
        placeholder="Entreprise externe..."
      />
      <FormAnnexe type="Nature" />
    </div>
  );
};
export default InfosGenerals;
