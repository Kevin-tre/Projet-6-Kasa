import React from "react";
import "./tag.scss";

const Tag = (logement) => {
  return (
    <div>
      <ul className="tag">
        {logement.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tag;
