import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Manuals from "./Pages/Manuals";
import Weather from "./Pages/Weather";
import Blog from "./Pages/Blog";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/Manuals" element={<Manuals />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
