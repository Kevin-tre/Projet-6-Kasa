import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/images/LOGO.png";
import "./header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <img src={LOGO} alt="Logo du site Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about-us">A propos</Link>
      </nav>
    </header>
  );
};

export default Header;
