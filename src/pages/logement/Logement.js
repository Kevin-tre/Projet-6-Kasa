import React from "react";
import { useParams } from "react-router-dom";

const Logement = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Logement;
