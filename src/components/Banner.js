import React from "react";
import "../components/banner.scss";

const Banner = ({ imageSrc, alt, title }) => {
  return (
    <div className="banner">
      <img className="banner-img" src={imageSrc} alt={alt} />
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
