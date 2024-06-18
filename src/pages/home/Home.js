import React from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import logements from "../../data/logements.json";
import "./home.scss";

const Home = () => {
  return (
    <div className="home_container">
      <Banner />
      <div className="card-container">
        {logements.map((logement) => (
          <Card logement={logement} />
        ))}
      </div>
      {/* {logements.map((logement) => {
        return (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <h3>{logement.title}</h3>
          </Link>
        );
      })} */}
    </div>
  );
};

export default Home;
