import React, { useEffect, useState } from "react";

import "./ProductListing.css";
import { Link } from "react-router-dom";

import { productData, sortTypes } from "../../common/Data";
import { icons } from "../../common/Path";

import { FilterCategories, ProductCard } from "../../components";

const ProductListing = ({}) => {
  const [productListByCaetegory, setProductListByCaetegory] = useState([]);
  const [selectedSortTypeIndex, setSelectedSortTypeIndex] = useState(0);

  useEffect(() => {
    setProductListByCaetegory(productData);
  }, []);


  return (
    <div className="product-list-wrapper">
      <div className="prodcut-list-container">
        <div className="left-container">
          <div className="heading">
            <h1>Filters</h1>
          </div>

          <div className="product-filter-categories">
            <h1>Cotegories</h1>

            <div className="category-name">
              {icons.arrowLeft}
              <Link className="name">Footwear</Link>
            </div>

            <div className="category-name">
              {icons.arrowLeft}
              <Link className="name">Men's Footwear</Link>
            </div>

            <div className="category-name active">
              {icons.arrowLeft}
              <Link className="name">Men's Sports Shoes</Link>
            </div>
          </div>

          <FilterCategories/>
          <FilterCategories/>
          <FilterCategories/>
          <FilterCategories/>
          <FilterCategories/>
          
        </div>
        <div className="right-container">
          <div className="header">
            <div className="route-tracking-container">
              <div className="route-container">
                <Link className="route-link">Home</Link>                
                {icons.arrowRight}
              </div>
              <div className="route-container">
                <Link className="route-link">Footwear</Link>                
                {icons.arrowRight}
              </div>
              <div className="route-container">
                <Link className="route-link">Men's Footwear</Link>
                {icons.arrowRight}
              </div>
              <div className="route-container">
                <Link className="route-link">Men's Sports Shoess</Link>
                {icons.arrowRight}
              </div>
            </div>
            <div className="search-result-txt">
              <h1>Showing 1 - 40 of 2,12,380 results for "sports shoes"</h1>
            </div>
            <div className="product-sort-container">
              <ul>
                <li>Sort By</li>
                {sortTypes.map((item, index) => (
                  <li
                    className={selectedSortTypeIndex === index ? "active" : ""}
                    key={index}
                    onClick={(e) => {
                      setSelectedSortTypeIndex(index);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="products-container">
            <div className="product-list">
              {productListByCaetegory.map((data, index) => (
                <ProductCard data={data} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
