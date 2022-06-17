import React from "react";
import { ImgComp, Title } from "../../components";
import "./reportActions.css";
const ReportActions = ({ data, title }) => {
  return (
    <div className="actions-container">
        <Title title={title}/>
      <div className="actions">
          {
              data ? data.map((a,i)=>{
                  return (<div className="imgReportSize">
                    <ImgComp key={i} src={a.img} name={a.title} />
                          </div>)
              }):`Aucune ${title}`
          }
      </div>
    </div>
  );
};
export default ReportActions;
