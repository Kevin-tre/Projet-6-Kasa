import React, { useState } from "react";
import "../components/collapse.scss";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, content } = props;

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse">
        <h3>{title}</h3>
        <button className={isOpen ? "active" : ""} onClick={toggleCollapse}>
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
      <div className={`collapse-content ${isOpen ? "open" : "close"}`}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((cnt, index) => (
              <li key={index} className="li-collapse">
                {cnt}
              </li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;

// Ou className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
