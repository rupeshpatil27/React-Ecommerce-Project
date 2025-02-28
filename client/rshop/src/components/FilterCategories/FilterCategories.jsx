import React, { useState } from "react";

import "./FilterCategories.css";

import { icons } from "../../common/Path";

const FilterCategories = () => {
  const [showFilterContent, setShowFilterContent] = useState(false);

  return (
    <div className="filter-wrapper">
      <div className="filter-container">
        <div
          className={`header${showFilterContent ? " active" : ""}`}
          onClick={() => setShowFilterContent(!showFilterContent)}
        >
          <div className="title">Brands</div>
          <div className="btn-con">
            {icons.arrowdown}
          </div>
        </div>

        <div className={`filter${showFilterContent ? " active" : ""}`}>
          <div className="content">
            <div className="filter-item">
              <input type="checkbox" id="filter-id" className="checkbox" />
              <label htmlFor="filter-id">adidas</label>
            </div>
            <div className="filter-item">
              <input type="checkbox" id="filter-id" className="checkbox" />
              <label htmlFor="filter-id">Reebok</label>
            </div>
            <div className="filter-item">
              <input type="checkbox" id="filter-id" className="checkbox" />
              <label htmlFor="filter-id">Nike</label>
            </div>
            <div className="filter-item">
              <input type="checkbox" id="filter-id" className="checkbox" />
              <label htmlFor="filter-id">Puma</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// use htmlFor insted of for for label
export default FilterCategories;
