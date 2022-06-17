import React, { useContext, useState } from "react";
import { FormAnnexe, Galery, PaginaBTN } from "../../../components";
import "./AnomaliesTour.css";
import { TourContext } from "../../../store/tourContext";
import { v4 as uuid } from "uuid";
const AnomaliesTour = ({ page, setPage }) => {
  const [reg, setReg] = useState(false);
  const { stateTour, dispatchTour } = useContext(TourContext);
  return (
    <div className="anomalies">
      <FormAnnexe
        type="tour"
        action="ADD_ANOMALIES_TOUR"
        id={uuid()}
        ph="Anomalie..."
      />
      <Galery
        pieces={stateTour.anomalies}
        type="anomalies"
        reg={reg}
        setReg={setReg}
      />
      <PaginaBTN page={page} setPage={setPage} />
    </div>
  );
};
export default AnomaliesTour;
