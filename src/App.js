import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/common.css";
import Presentation from "./Component/Presentation";
import Home from "./Component/Home";
import Application from "./Component/Application";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </BrowserRouter>
  );
}
