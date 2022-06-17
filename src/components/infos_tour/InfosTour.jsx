import React, { useContext, useState, useEffect } from "react";
import "./infos.css";
import { FormAnnexe } from "..";
import { TourContext } from "../../store/tourContext";
const InfosTour = ({type,action}) => {
  const { dispatchTour, stateTour } = useContext(TourContext);
  const [infos, setInfos] = useState({
    organisme: "",
    hse_ocp: ""
  });
  const [hasError, setHasError] = useState(true);
  useEffect(() => {
    if (
      infos.organisme.length &&
      infos.hse_ocp.length 
    ) {
      setHasError(false);
    }
  }, [infos]);
  useEffect(() => {
    if ( !hasError) {
      dispatchTour({type:'ADD_TOUR_INFOS', payload:infos})
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
        name="organisme"
        value={infos.organisme}
        onChange={handleChange}
        placeholder="Organisme..."
      />
      <input
        type="text"
        name="hse_ocp"
        value={infos.hse_ocp}
        onChange={handleChange}
        placeholder="HSE OCP..."
      />
      <FormAnnexe type={type} action='ADD_NATURE_TOUR' ph='Nature...' />
    </div>
  );
};
export default InfosTour;
