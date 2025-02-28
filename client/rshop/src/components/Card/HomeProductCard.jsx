import React from "react";
import "./style.css";

const HomeProductCard = ({ item }) => {
  return (
    <div className="home-product-card">
      <div className="card">
        <div className="product-image">
          <img src={item.img} draggable="false" />
        </div>
        <div className="home-product-info">
          <span className="product-name">Product {item.name}</span>
          <span className="product-price">From {item.price}Rs</span>
        </div>
      </div>
    </div>
  );
};

export default HomeProductCard;
