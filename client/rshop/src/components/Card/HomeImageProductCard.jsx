import React from "react";

const HomeImageProductCard = ({item}) => {
  return (
    <div className="home-image-product-card">
      <div className="img-con">
        <img src={item.img} alt="img" />
      </div>
      <div className="details-con">
        <span className="product-nm">{item.name}</span>
      </div>
    </div>
  );
};

export default HomeImageProductCard;
