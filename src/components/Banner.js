import React from "react";
import bannerhome from "../assets/images/banner-home.png";

const Banner = () => {
  return (
    <div className="banner-home">
      <img
        className="banner-home-img"
        src={bannerhome}
        alt="Bannière du site"
      />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
