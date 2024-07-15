import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/images/LOGO.png";
import "./header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <img src={LOGO} alt="Logo du site Kasa" />
      <nav>
        <Link to="/Projet-7-Kasa/">Accueil</Link>
        <Link to="/Projet-7-Kasa/about-us">A propos</Link>
      </nav>
    </header>
  );
};

export default Header;
