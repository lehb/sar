// import axiosInstance from "../utils/axiosInstance";
const tourReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_NATURE_TOUR":
      return {
        ...state,
        infos_tour: {
          ...state.infos_tour,
          nature: payload.title,
          img_nature: payload.img,
        },
      };
    case "ADD_TOUR_INFOS":
      return {
        ...state,
        infos_tour: {
          ...state.infos_tour,
          organisme: payload.organisme,
          hse_ocp: payload.hse_ocp,
        },
      };
    case "ADD_DOCS_TOUR":
      return {
        ...state,
        documents: [...state.documents, payload],
      };
    case "ADD_ANOMALIES_TOUR":
      return {
        ...state,
        anomalies: [...state.anomalies, payload],
      };
    case "ADD_ACTIONS_TOUR":
      return {
        ...state,
        actions: [...state.actions, payload],
      };
    case "ADD_ACTION_IMM":
      let action_imm = {
        title: payload.ac,
        img: payload.acimg,
      };
      const updatedAnomalie=state.anomalies.find(a=>a.id===payload.id)
      updatedAnomalie['action']=action_imm
      return {
        ...state,
        anomalies:[...state.anomalies]
      };
    default: 
      return state;
  }
};
export default tourReducer;
