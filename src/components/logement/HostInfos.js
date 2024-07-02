import React from "react";
import "./hostinfos.scss";

const HostInfo = ({ host }) => {
  return (
    <div className="host-info">
      <p>{host.name}</p>
      <img className="host-info-picture" src={host.picture} alt={host.name} />
    </div>
  );
};

export default HostInfo;
