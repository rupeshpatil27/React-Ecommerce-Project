import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

import { sliderImageData } from "../../../common/Data";
import { icons } from "../../../common/Path";

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  let interval = "";

  useEffect(() => {
    interval = setInterval(() => {
      showNextImage();
    }, 2500);

    // clearInterval(interval);

    return () => clearInterval(interval);
  }, [imageIndex]);

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return sliderImageData.length - 1;
      return index - 1;
    });

    clearInterval(interval);
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === sliderImageData.length - 1) return 0;
      return index + 1;
    });
    clearInterval(interval);
  };

  return (
    <div className="image-slider-container">
      <div className="slider-container">
        <div className="img-container">
          {sliderImageData.map((img, index) => (
            <img
              src={img.image}
              key={index}
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        <button className="img-slide-btn prev" onClick={showPrevImage}>
          {icons.arrowLeft}
        </button>
        <button className="img-slide-btn next" onClick={showNextImage}>
          {icons.arrowRight}
        </button>
      </div>
      <div className="slider-dot-container">
        {sliderImageData.map((__, index) => (
          <div
            key={index}
            className="dot-progress"
            style={{ width: index === imageIndex ? "4rem" : "2rem" }}
          >
            <div
              className="dot-fill-bar"
              style={{
                animation:
                  index === imageIndex
                    ? "dotslide 2.5s ease-in-out forwards"
                    : "none",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
