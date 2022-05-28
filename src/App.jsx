import React, { useContext } from "react";
import { Register, Ahr, Login, Fourmulaires, AhrReport } from "./containers/index";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./store/userContext";
import { AhrContextProvider } from "./store/ahrContext";
const App = () => {
  return (
    <div className="app">
      <AuthContextProvider>
        <AhrContextProvider>
          <Routes>
            <Route path="/" element={<Ahr />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="ahr" element={<Ahr />} />
            <Route path="ahr-report" element={<AhrReport />} />
          </Routes>
        </AhrContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
