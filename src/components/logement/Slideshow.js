import React, { useState } from "react";
import ArrowLeft from "../../assets/images/arrowleft.png";
import ArrowRight from "../../assets/images/arrowright.png";
import "./slideshow.scss";

const Slideshow = ({ pictures, title }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <img
        onClick={nextSlide}
        src={ArrowRight}
        alt="flèche droite"
        className=" arrow arrow-right"
      />
      {pictures.map((pictures, index) => {
        return (
          <img
            src={pictures}
            alt={title}
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <img
        onClick={prevSlide}
        src={ArrowLeft}
        alt="flèche gauche"
        className=" arrow arrow-left"
      />
      <div className="slide-numbers">
        <span>
          {slide + 1} / {pictures.length}
        </span>
      </div>
    </div>
  );
};

export default Slideshow;
