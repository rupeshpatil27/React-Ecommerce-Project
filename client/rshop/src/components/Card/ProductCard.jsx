import React from "react";
import "./style.css"
import { icons } from "../../common/Path";

const ProductCard = ({data}) => {

  // get dynamic translate to top by

  // stralate value=scrollHeight- offsetHeight

  // by using useref

  return (
    <div className="product-card">
      <a className="card" href="">
        <a href="#" className="product-image-con">
          <div className="product-image">
            <img src={data.image} alt="" />
          </div>
        </a>
        <div className="product-whishlist">
          {icons.heart}
        </div>

        <div className="product-info">
          <h4 className="product-brand-name">Spark</h4>
          <h3 className="product-name">{data.name}</h3>

          <div className="product-price">
            <span className="product-discounted-price">₹{data.price}</span>
            <span className="product-retail-price">₹{data.retailPrice}</span>
            <span className="product-discount-percentage">
              {data.discount}% off
            </span>
          </div>

          <div className="xcelerator-info-tag">Only Few Left!</div>

          <div className="product-size">
            <span>Sizes: 7, 8, 9</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
