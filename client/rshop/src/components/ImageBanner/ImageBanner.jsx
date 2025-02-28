import React from "react";
import "./style.css";

const ImageAnounmentBanner = ({ image }) => {
  return (
    <div className="image-announcement-banner">
      <div className="image-banner">
        <div className="image-con">
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  );
};

const ImageFlexBanner = ({ image }) => {
  return (
    <div className="image-flex-banner">
      <div className="image-banner">
        <a href="" className="image-banner-link">
          <div className="image-con">
            <img src={image} alt="image" />
          </div>
        </a>
      </div>
    </div>
  );
};

const ProductImageBanner = ({ data }) => {
  return (
    <div className="image-banner-container">
      {data.map((img, index) => (
        <div className="image-banner" key={index}>
          <a href="" className="image-banner-link">
            <div className="image-con">
              <img src={img.img} />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export { ImageAnounmentBanner, ImageFlexBanner,ProductImageBanner };
