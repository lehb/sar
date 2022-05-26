import React, { useContext } from "react";
import "./ahrReport.css";
import { HeadingReport, ImgComp, TextComp, Title } from "../../components";
import ReportFourmulaires from "../Fourmulaires/ReportFourmulaires";
import DocsReport from "../DocReport/DocsReport";
import ReportActions from "../actions/ReportActions";
import { ahrContext } from "../../store/ahrContext";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'
const AhrReport = () => {
const { state } = useContext(ahrContext);
const exportAsImage =  () => {
  window.print()
//   const element = document.getElementById('report')
//   const html = document.getElementsByTagName("html")[0];
//   const body = document.getElementsByTagName("body")[0];
//   let htmlWidth = html.clientWidth;
//   let bodyWidth = body.clientWidth;
//   const newWidth = element.scrollWidth - element.clientWidth;
//   if (newWidth > element.clientWidth) {
//   htmlWidth += newWidth;
//   bodyWidth += newWidth;
//   }
//   html.style.width = htmlWidth + "px";
//   body.style.width = bodyWidth + "px";
//   const canvas = await html2canvas(element);
//   const image = canvas.toDataURL("image/png", 1.0);
// let pdf = new jsPDF()
// pdf.addImage(image,"png", 15, 40, 180, 180)
// pdf.save('sample.pdf')
//   html.style.width = null;
//   body.style.width = null;
  };
  
  return (
    <div id="report" className="report">
      <div className="report-content">
        <HeadingReport
          rapport="Assistance AHR"
          text={`Assistance effectuée le ${Date().slice(8, 10)} ${Date().slice(
            4,
            7
          )} ${Date().slice(11, 15)} à ${Date().slice(16, 21)}`}
        />
        <div className="desc-infos">
          <TextComp title="Infos" type="infos" data={state.infos_generales} />
          <TextComp
            title="Description"
            type="description"
            data={state.infos_generales.desc}
          />
        </div>
        <div className="nat-them">
          <div className="nature">
            <Title title="Nature" />
            <ImgComp
              src={state.infos_generales.img_nature}
              name={state.infos_generales.nature}
            />
          </div>
          <TextComp
          title="Thématique"
          type="thématique"
          data={state.thematique}
        />
        </div>
        <div className="f">
        <ReportFourmulaires fourmulaires={state.fourmulaires} />

          </div>
          <div className="d">
        <DocsReport docs={state.documents} />

            </div>
            <div className="a">
        <ReportActions actions={state.actions} />

              </div>
      </div>
      <button onClick={exportAsImage}>Sauvegarder PDF</button>
    </div>
  );
};
export default AhrReport;
