import React, { useContext, useState, useEffect } from "react";
import { FormAnnexe, Galery, PaginaBTN } from "../../../components";
import "./Actions_tour.css";
import { TourContext } from "../../../store/tourContext";
import { v4 as uuid } from "uuid";
const ActionsTour = ({ page, setPage }) => {
  const [error, setError] = useState(true)
  const [action, setAction] = useState({
    id: uuid(),
    title: "",
    resp: "",
    delai: "",
  });
  useEffect(() => {
    const fillAction = () => {
      if (
        action.id.length > 1 &&
        action.title.length > 1 &&
        action.delai.length > 1 &&
        action.resp.length
      )
       {
      setError(false)
      }
    }
    fillAction()
  }, [action])

  const reset = () => {
    setAction({
      id: uuid(),
      title: "",
      resp: "",
      delai: "",
    });
    setError(true)
  };
  const { stateTour, dispatchTour } = useContext(TourContext);
  return (
    <div>
      <div className="infos-action">
        <input
          type="text"
          name="title"
          className="input"
          id="title"
          placeholder="Action..."
          value={action.title}
          onChange={(e) => {
            setAction({ ...action, title: e.target.value });
          }}
        />
        <input
          type="text"
          name="resp"
          className="input"
          id="resp"
          placeholder="Responsable..."
          value={action.resp}
          onChange={(e) => {
            setAction({ ...action, resp: e.target.value });
          }}
        />
        <input
          type="date"
          name="delai"
          className="custom-inpt"
          id="delai"
          placeholder="Délai"
          value={action.delai}
          onChange={(e) => {
            setAction({ ...action, delai: e.target.value });
          }}
        />
      </div>
      <button
        onClick={() => {
          if (!error) {
            dispatchTour({ type: "ADD_ACTIONS_TOUR", payload: action });
            reset();
          }  
        }}
        className="button"
      >
        Enregistrer une action
      </button>
      {stateTour.actions.length > 0 && (
        <>
          <h3>Récapitulatif des actions arrêtées</h3>
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
        </>
      )}
      <PaginaBTN page={page} setPage={setPage} type="tour" />
    </div>
  );
};

export default ActionsTour;
