import { useMemo, useReducer, createContext } from "react";
import ahrReducer from "./ahrReducer";
const initialState = {
  createdBy: "",
  infos_generales: {
    desc: "",
    encadrant: "",
    hse: "",
    lieu: "",
    ee: "",
    hse_ee: "",
    nature: "",
    img_nature: "",
  },
  fourmulaires:[],
  thematique: "",
  documents: [], //array of objects {doc:'',img:''}
  actions: [], //array of objects {action:'',img:''}
};

const ahrContext = createContext();
const AhrContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ahrReducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <ahrContext.Provider value={contextValue}>{children}</ahrContext.Provider>
  );
};
export { ahrContext, AhrContextProvider };
