import React, { useContext } from "react";
import { Register, Ahr, Login, Tour, AhrReport, TourReport } from "./containers/index";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./store/userContext";
import { AhrContextProvider } from "./store/ahrContext";
import {TourContextProvider} from './store/tourContext'
const App = () => {
  return (
    <div className="app">
       <React.StrictMode>
       <AuthContextProvider>
        <AhrContextProvider>
          <TourContextProvider>
          <Routes>
            <Route path="/" element={<Tour />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="ahr" element={<Ahr />} />
            <Route path="tour-report" element={<TourReport />} />
            <Route path="ahr-report" element={<AhrReport />}
             />
          </Routes>
          </TourContextProvider>
          
        </AhrContextProvider>
      </AuthContextProvider>
       </React.StrictMode>
      
    </div>
  );
};

export default App;
