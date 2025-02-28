import React from "react";

import "./style.css";
import { HomeImageProductCard } from "../index";

const HomeBoxContainer = ({ containerTitle = "", data }) => {
  return (
    <div className="box-container-small">
      <div className="box-container">
        <div className="header">
          <div className="title">{containerTitle}</div>
        </div>
        <div className="content">

          {data.map((item, index) => (
            <HomeImageProductCard key={index} item={item} />
          ))}

        </div>
        <div className="footer">
          <a href="#">See More</a>
        </div>
      </div>
    </div>
  );
};

export default HomeBoxContainer;
