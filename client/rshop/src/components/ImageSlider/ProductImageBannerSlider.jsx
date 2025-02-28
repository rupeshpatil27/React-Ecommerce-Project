import React, { useEffect, useState } from "react";
import "./style.css";

import { icons } from "../../common/Path";

const ProductImageBannerSlider = ({ data }) => {
  const [imageIndex, setImageIndex] = useState(0);

  let interval = "";

  useEffect(() => {
    interval = setInterval(() => {
      showNextImage();
    }, 2500);

    return () => clearInterval(interval);
  }, [imageIndex]);

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return data.length - 1;
      return index - 1;
    });

    clearInterval(interval);
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === data.length - 1) return 0;
      return index + 1;
    });
    clearInterval(interval);
  };

  return (
    <div className="slider-container">
      <div className="img-container">
        {data.map((img, index) => (
          <img
            src={img.image}
            key={index}
            className={`image ${imageIndex === index && "imageActive"}`}
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
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
  );
};

export default ProductImageBannerSlider;
