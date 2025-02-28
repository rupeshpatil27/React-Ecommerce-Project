import React from "react";
import "./CategoryBar.css";
import { CategoriesBarItem } from "../../../common/Element";
import { Link } from "react-router-dom";

const CategoryBar = () => {
  return (
    <div className="category-card-container">
      <div className="card-container">
        {CategoriesBarItem.map((category, index) => (
          <Link className="card-content" key={index} to={category.path}>
            <div className="img-con">
              <img src={category.img} />
            </div>
            <div className="cat-nm-con">
              <span>{category.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
