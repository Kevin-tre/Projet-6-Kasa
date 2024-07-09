import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import HostInfo from "../../components/logement/HostInfos";
import Rating from "../../components/logement/Rating";
import Slideshow from "../../components/logement/Slideshow";
import Tag from "../../components/logement/Tag";
import logementsData from "../../data/logements.json";
import "./logement.scss";

const Logement = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Extraire l'ID de l'URL
  const [logement, setLogement] = useState(null); // Initialiser l'état du logement
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Trouver le logement correspondant à l'ID dans les données
    const foundLogement = logementsData.find((logement) => logement.id === id);
    if (!foundLogement) {
      return navigate("/error-404");
    } else {
      // Mettre à jour l'état du logement
      setLogement(foundLogement);
      setLoading(false);
    }
  }, [id, navigate]); // Execute cet effet lorsque l'ID change

  return loading ? (
    <div>Chargement...</div>
  ) : (
    <div className="logement-container">
      <Slideshow pictures={logement.pictures} title={logement.title} />
      <div className="title-host-container">
        <div className="title-tag">
          <h1>{logement.title}</h1>
          <p className="title-tag-location">{logement.location}</p>
          <Tag tags={logement.tags} />
        </div>
        <div className="host-rating">
          <HostInfo host={logement.host} />
          <Rating rating={logement.rating} />
        </div>
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
