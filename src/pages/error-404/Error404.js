import React from "react";
import { Link } from "react-router-dom";
import "../error-404/error404.scss";

const Error404 = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      <Link to="/">
        <p>Retourner sur la page d’accueil</p>
      </Link>
    </div>
  );
};

export default Error404;
