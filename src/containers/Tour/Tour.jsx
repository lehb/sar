import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import AHRAction from "../ahrstep4/AHRAction";
import Header from "../header/Header";
import { TourInfos, DocsTour, AnomaliesTour } from "../tournée de prevention";
import ActionsTour from "../tournée de prevention/actions/ActionsTour";
const Tour = () => {
  const navigate = useNavigate();
  // const {dispatch, state}= useContext(ahrContext)
  const [page, setPage] = useState(0);
  const titles = ["Infos générales", "Documents", "Anomalies", "Actions"];
  const displayPage = () => {
    if (page === 0) {
      return <TourInfos page={page} setPage={setPage} type="tour" />;
    } else if (page === 1) {
      return <DocsTour page={page} setPage={setPage} type="tour" />;
    } else if (page === 2) {
      return <AnomaliesTour page={page} setPage={setPage} type="tour" />;
    } else if (page === 3) {
      return <ActionsTour page={page} setPage={setPage} type="tour" />;
    }
  };
  return (
    <>
      <Header title={titles[page]} />
      <div className="ahr_frame">{displayPage()}</div>
    </>
  );
};

export default Tour;
