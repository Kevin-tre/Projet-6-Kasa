import React from "react";
import banneraboutus from "../../assets/images/banner-about-us.png";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import aboutList from "../../data/aboutList";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Banner imageSrc={banneraboutus} alt="Bannière du site" />
      <div className="collapse-about-us">
        {aboutList.map((AboutList, index) => (
          <Collapse
            key={index}
            title={AboutList.title}
            content={AboutList.content}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
