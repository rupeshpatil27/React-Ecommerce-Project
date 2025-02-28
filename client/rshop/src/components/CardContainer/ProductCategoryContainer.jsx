import React, { useEffect, useState } from "react";

import "./style.css";
import { product } from "../../common/Data";
import { icons } from "../../common/Path";

const ProductCategoryContainer = ({title}) => {
  const [productListByCaetegory, setProductListByCaetegory] = useState([]);

  useEffect(() => {
    setProductListByCaetegory(product);
  }, []);

  return (
    <div className="product-category-container">
      <div className="product-container">
        <div className="header">
          <div className="title">{title}</div>
          <div className="btn-con">
            <a href="#">
              {icons.arrowRight}
            </a>
          </div>
        </div>

        <div className="products-list">
          {productListByCaetegory.map((data, index) => (
            <div className="product" key={index}>
              <div className="card">
                <a href="#" className="product-image-container">
                  <div className="product-image">
                    <img src={data.image} alt="" />
                  </div>
                </a>

                <div className="wishlist-con">
                {icons.heart}
                </div>

                <div>
                  <div>
                    <a className="prodcut-name" href="#">
                      {data.name}
                    </a>
                  </div>
                  <div className="rating-review-container">
                    <div className="rating">
                      {data.rating}
                      {icons.star}
                    </div>
                    <span className="review">{data.review}</span>
                  </div>

                  <div className="price-con">
                    <div className="price">₹{data.price}</div>
                    <div className="retail-price">₹{data.retailPrice}</div>
                    <div className="discount">{data.discount}% off</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryContainer;
