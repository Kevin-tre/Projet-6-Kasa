import React, { useState } from "react";
import "../components/collapse.scss";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { aboutList } = props;

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse">
        <h3>{aboutList.title}</h3>
        <button className={isOpen ? "active" : ""} onClick={toggleCollapse}>
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
      {isOpen && (
        <div className="collapse-content-open">
          <p>{aboutList.content}</p>
        </div>
      )}
      {!isOpen && (
        <div className="collapse-content-close">
          <p>{aboutList.content}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;

// Ou className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
