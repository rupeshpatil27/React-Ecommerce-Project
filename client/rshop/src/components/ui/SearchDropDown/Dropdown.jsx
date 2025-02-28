import React, { useState } from "react";

import "./DropDown.css";
import { icons } from "../../../common/Path";

const Dropdown = ({ productList }) => {
  const [click, setClick] = useState(false);
  const [selectedProductCat, setSelectedProductCat] = useState("");
  const [selectedProductCatIndex, setSelectedProductCatIndex] = useState("");

  const [popoverTop, setPopoverTop] = useState(null);

  return (
    <>
      <div className="select-box-continer">
        <div className="open-select-box" onClick={(e) => {
        setClick(!click)
        setPopoverTop(e.currentTarget.offsetHeight)
      }
      }>
          <div className="select-text-con">
            <p
              className={`selected-txt ${selectedProductCatIndex !== "" && "active"
                }`}
            >
              {selectedProductCatIndex === ""
                ? "All Categories"
                : selectedProductCat}
            </p>
          </div>
          <div className={`select-icon-con ${click ? "active" : ""}`}>
            {icons.arrowdown}
          </div>
        </div>

      
          <div style={{top: popoverTop || undefined }} className={`select-box ${click ? "active" : ""}`}>
            <div className="select-box-input-box">
              <input
                className="select-box-input"
                placeholder="Search hear..."
              />
            </div>
            <div className="select-box-content">
              <div
                className={`select-box-item ${selectedProductCatIndex === "" ? "selected" : " "
                  }`}
                onClick={(e) => {
                  setClick(false);
                  setSelectedProductCatIndex("");
                }}
              >
                All Categories
              </div>

              {productList.map((product, index) => (
                <div
                  key={index}
                  className={`select-box-item ${selectedProductCatIndex === index ? "selected" : " "
                    }`}
                  onClick={(e) => {
                    setClick(false);
                    setSelectedProductCat(product);
                    setSelectedProductCatIndex(index);
                  }}
                >
                  {product}
                </div>
              ))}
            </div>
          </div>
      
      </div >
    </>
  );
};

export default Dropdown;
