import React from "react";
import { ImgComp, Title } from "../../components";
import "./docsReport.css";
const DocsReport = ({ docs }) => {
  console.log("documents :", docs);
  return (
    <div className="docs-container">
      <Title title="Documents" />
      <div className="docs">
        {docs
          ? docs.map((d, i) => {
              return (
               <div key={i} className="imgReportSize"><ImgComp key={i} src={d.img} name={d.title} /></div> 
              );
            })
          : "Pas de document"}
      </div>
    </div>
  );
};

export default DocsReport;
