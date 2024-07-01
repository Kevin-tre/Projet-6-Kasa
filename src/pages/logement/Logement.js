import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import HostInfo from "../../components/logement/HostInfos";
import Rating from "../../components/logement/Rating";
import Slideshow from "../../components/logement/Slideshow";
import Tag from "../../components/logement/Tag";
import logementsData from "../../data/logements.json";
import "./logement.scss";

const Logement = () => {
  const { id } = useParams(); // Extraire l'ID de l'URL
  const [logement, setLogement] = useState(null); // Initialiser l'état du logement

  useEffect(() => {
    // Trouver le logement correspondant à l'ID dans les données
    const foundLogement = logementsData.find((logement) => logement.id === id);
    // Mettre à jour l'état du logement
    setLogement(foundLogement);
  }, [id]); // Execute cet effet lorsque l'ID change

  if (!logement) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="logement-container">
      <Slideshow pictures={logement.pictures} title={logement.title} />
      <div className="title-host">
        <div>
          <h1>{logement.title}</h1>
          <p className="title-host-location">{logement.location}</p>
        </div>
        <HostInfo host={logement.host} />
      </div>
      <div className="tag-rating">
        <Tag tags={logement.tags} />
        <Rating rating={logement.rating} />
      </div>
      <div className="logement-collapse-container">
        <div className="logement-collapse">
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Équipements" content={logement.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Logement;
