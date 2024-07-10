import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import AboutUs from "../pages/about-us/AboutUs";
import Error404 from "../pages/error-404/Error404";
import Home from "../pages/home/Home";
import Logement from "../pages/logement/Logement";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/Projet-6-Kasa/" element={<Home />} />
          <Route exact path="/Projet-6-Kasa/about-us" element={<AboutUs />} />
          <Route exact path="/Projet-6-Kasa/error-404" element={<Error404 />} />
          <Route
            exact
            path="/Projet-6-Kasa/logement/:id"
            element={<Logement />}
          />
          <Route
            exact
            path="/Projet-6-Kasa/*"
            element={<Navigate replace to="/Projet-6-Kasa/error-404" />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
