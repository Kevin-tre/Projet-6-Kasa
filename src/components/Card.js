import React from "react";
import { Link } from "react-router-dom";

import "./card.scss";

const Card = (props) => {
  const { logement } = props;
  return (
    <Link
      className="card-link"
      to={`/logement/${logement.id}`}
      key={logement.id}
    >
      <div key={logement.id} className="card">
        <div className="card-title">
          <h3>{logement.title}</h3>
        </div>
        <img src={logement.cover} alt={logement.title} />
      </div>
    </Link>
  );
};

export default Card;
