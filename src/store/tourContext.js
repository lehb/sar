import { useMemo, useReducer, createContext } from "react";
import tourReducer from "./tourReducer";
const initialState = {
  createdBy: "",
  infos_tour: {
    organisme: "",
    hse_ocp: "",
    nature: "",
    img_nature: ""
  },
  anomalies: [],
  documents: [], //array of objects {doc:'',img:''}
  actions: [], //array of objects {action:'',img:''}
};

const TourContext = createContext();
const TourContextProvider = ({ children }) => {
  const [stateTour, dispatchTour] = useReducer(tourReducer, initialState);
  const contextValue = useMemo(() => {
    return { stateTour, dispatchTour };
  }, [stateTour, dispatchTour]);
  return (
    <TourContext.Provider value={contextValue}>{children}</TourContext.Provider>
  );
};
export { TourContext, TourContextProvider };
