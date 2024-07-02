import React from "react";
import bannerhome from "../../assets/images/banner-home.png";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import logements from "../../data/logements.json";
import "./home.scss";

const Home = () => {
  return (
    <div className="home_container">
      <Banner
        imageSrc={bannerhome}
        alt={"Bannière du site"}
        title={"Chez vous, partout et ailleurs"}
      />
      <div className="card-container">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
};

export default Home;
