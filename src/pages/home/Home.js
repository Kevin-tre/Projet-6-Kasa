import React from "react";
import { Link } from "react-router-dom";
import logements from "../../data/logements.json";
import "./home.scss";
const Home = () => {
  return (
    <div className="home_container">
      {logements.map((logement) => (
        <Link to={`/logement/${logement.id}`}>
          <h3>{logement.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Home;
