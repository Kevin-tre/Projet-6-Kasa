import React from "react";
import "./rating.scss";

const Rating = ({ rating }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span
        key={index}
        className={index < rating ? "filled-star" : "empty-star"}
      >
        <i className="fa-solid fa-star"></i>
      </span>
    ));
  return <div className="rating">{stars}</div>;
};

export default Rating;
