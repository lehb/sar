import React from "react";
import { ImgComp, Title } from "../../components";
import "./reportActions.css";
const ReportActions = ({ actions }) => {
  return (
    <div className="actions-container">
        <Title title="Actions"/>
      <div className="actions">
          {
              actions ? actions.map((a,i)=>{
                  return (<div className="imgReportSize">
                    <ImgComp key={i} src={a.img} name={a.title} />
                    </div>)
              }):"Pas d'action"
          }
      </div>
    </div>
  );
};

export default ReportActions;
