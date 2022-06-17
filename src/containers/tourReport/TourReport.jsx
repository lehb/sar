import React, { useContext, useEffect, useState } from "react";
import './tourreport.css';
import { HeadingReport, ImgComp, TextComp, Title } from "../../components";
import ReportFourmulaires from "../Fourmulaires/ReportFourmulaires";
import ReportActions from "../actions/ReportActions";
import { TourContext } from "../../store/tourContext";
import DocsReport from "../DocReport/DocsReport";
const TourReport = () => {
  const [actions_imm, setActions_imm] = useState([])
  const { stateTour } = useContext(TourContext);
useEffect(() => {
  console.log(stateTour);
 stateTour.anomalies.map((a)=>{
if(a.hasOwnProperty('action')){
  setActions_imm([...actions_imm,a['action']])
}
 })
}, []) 
  const exportAsImage = () => {
    window.print();
  };
  return (
    <div id="report" className="report">
      <div className="report-content">
        <HeadingReport
          rapport="Tournée de prévention"
          text={`effectuée le ${Date().slice(8, 10)} ${Date().slice(
            4,
            7
          )} ${Date().slice(11, 15)} à ${Date().slice(16, 21)}`}
        />
        <div className="desc-infos">
          <div className="nature">
            <Title title="Nature" />
            <ImgComp
              src={stateTour.infos_tour.img_nature}
              name={stateTour.infos_tour.nature}
            />
          </div>
          <TextComp title="Infos" type="tour" data={stateTour.infos_tour} />
        </div>
        <div className="f">
          <DocsReport docs={stateTour.documents} />
        </div>
        <div className="a">
          <ReportActions title="Anomalies" data={stateTour.anomalies} />
        </div>
        <div className="a">
          <ReportActions title="Actions immediates" data={actions_imm} />
        </div>
        <div className="a">
                    <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Responsable</th>
                <th>Délai</th>
              </tr>
            </thead>

            <tbody>
              {stateTour.actions
                ? stateTour.actions.map((a, id) => {
                    return (
                      <tr key={id}>
                        <td>{a.title}</td>
                        <td>{a.resp}</td>
                        <td>{a.delai}</td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
      <button className="NoPrint btn" onClick={exportAsImage}>Sauvegarder PDF</button>
    </div>
  );
};
export default TourReport;
