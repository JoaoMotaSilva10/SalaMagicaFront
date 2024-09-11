import React from "react";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Cadastro from "../CadastroSala/CadastroSala"
import Reservas from "../AnaliseReservas/AnaliseReservas"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CadastroSala" element={<Cadastro />} />
        <Route path="/Reservas" element={<Reservas />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
