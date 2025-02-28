import React, { useState } from "react";
import "./CategoriesNav.css";

import { icons } from "../../../../common/Path";
import { CategoriesNavItem } from "../../../../common/Element";

import {Menu} from "../../../index";

const CategoriesNav = () => {
  const [hovering, setHovering] = useState(null);
  const [menuCategory, setMenuCategory] = useState(null);

  const mouseLeave = () => {
    setHovering(null);
    setMenuCategory(null);
  };

  return (
    <div
      className="nav-bar-container"
      onMouseLeave={() => {
        setHovering(null);
        setMenuCategory(null);
      }}
    >
      <ul className="nav-list">
        {CategoriesNavItem.map((category, index) =>
          category.path === "" ? (
            <li
              className="nav-item"
              key={index}
              onMouseEnter={(event) => {
                setHovering(index);
                setMenuCategory(category.title);
              }}
            >
              {category.title}
              {icons.arrowdown}
            </li>
          ) : (
            <li
              className="nav-item"
              style={{ cursor: "pointer" }}
              key={index}
              onMouseEnter={() => {
                setHovering(null);
                setMenuCategory(null);
              }}
            >
              {category.title}
            </li>
          )
        )}

        <Menu
          hovering={hovering}
          mouseLeave={mouseLeave}
          menuCategory={menuCategory}
        />
      </ul>
    </div>
  );
};

export default CategoriesNav;
