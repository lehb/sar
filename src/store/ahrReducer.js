import axiosInstance from "../utils/axiosInstance";
const ahrReducer = (state, action) => {
  console.log('initial state in reducer', state);

  const { type, payload } = action;
  switch (type) {
    case "POPULATE_AHRS":
      return {
       ...payload
      };
    case "ADD_NATURE":
      return {
        ...state,
        infos_generales: {
          ...state.infos_generales,
          nature: payload.title,
          img_nature: payload.img,
        },
      };
    case "ADD_AHR_INFOS":
      return {
        ...state,
        infos_generales: {
          ...state.infos_generales,
          desc: payload.desc,
          encadrant: payload.encadrant,
          hse: payload.hse,
          hse_ee: payload.hse_ee,
          lieu: payload.lieu,
          ee: payload.ee,
        },
      };
    case "ADD_THEMATIQUE":
      return {
        ...state,
        thematique: payload,
      };
    case "ADD_DOCS":
      return {
        ...state,
        documents: [...state.documents, payload],
      };
    case "ADD_FOURMULAIRES":
      console.log("payload",payload);
      return {
        ...state,
        fourmulaires: [...state.fourmulaires,payload],
      };
    case "ADD_ACTIONS":
      return {
        ...state,
        actions: [...state.actions, payload],
      };
      case "SAVE_AHR":
        axiosInstance.post('/ahr',payload)
        .then(res=>{
          console.log(res);
        })
        .catch(err=>console.log(err))
      return state;
    default:
      return state;
  }
};
export default ahrReducer;
