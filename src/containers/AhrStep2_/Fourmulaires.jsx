import React, { useContext } from "react";
import "./fourmulaires.css";
import { ahrContext } from "../../store/ahrContext";
import { PaginaBTN, FormAnnexe, Galery } from "../../components";
const Fourmulaires = ({ page, setPage }) => {
  const { state, dispatch } = useContext(ahrContext);
  return (
    <div className="fourmulaires_step2">
      <FormAnnexe type="Fourmulaires" />
      <Galery type="Fourmulaires" pieces={state.fourmulaires} />
      <PaginaBTN page={page} setPage={setPage} />
    </div>
  );
};

export default Fourmulaires;
