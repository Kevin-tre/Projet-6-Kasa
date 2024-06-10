import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import logements from "../../data/logements.json";
import "./home.scss";

const Home = () => {
  return (
    <div className="home_container">
      <Banner className="banner-home" />
      {logements.map((logement) => {
        return (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <h3>{logement.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
