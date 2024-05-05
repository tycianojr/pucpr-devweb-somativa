import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../components/Cadastro";
import Login from "../components/Login";
import Principal from "../components/Principal";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;