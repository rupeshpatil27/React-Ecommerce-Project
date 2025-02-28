import React, { useEffect, useRef, useState } from "react";
import "./ProductSlider.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import abc from "../../assets/sliderImages/abc.jpg";
import { products } from "../../common/Path";

const ProductSlider1 = ({ ProductSliderTitle }) => {
  let productList = useRef(null);
  let isDragging = false;
  let startX, startScrollLeft;

  const [scrollPosition, setScrollPosition] = useState(0);

  const dragStart = (e) => {
    isDragging = true;
    productList.current.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = productList.current.scrollLeft;
  };

  const dragging = (e) => {
    if (isDragging) {     
      productList.current.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
  };

  const dragStop = (e) => {
    isDragging = false;
    productList.current.classList.remove("dragging");
  };

  const handleScroll = () => {
    const { scrollLeft, offsetWidth, scrollWidth } = productList.current;
    const maxScroll = scrollWidth - offsetWidth;
    const position =
      scrollLeft === maxScroll ? "end" : scrollLeft > 0 ? "middle" : "start";
    setScrollPosition(position);
  };

  const scrollToNext = () => {
    const container = productList.current;
    if (container) {
      const nextScrollLeft =
        container.scrollLeft +
        (container.offsetWidth - productList.current.children[0].offsetWidth);
      container.scrollTo({
        left: nextScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const scrollToPrevious = () => {
    const container = productList.current;
    console.log(container);
    if (container) {
      const nextScrollLeft =
        container.scrollLeft -
        (container.offsetWidth - productList.current.children[0].offsetWidth);
      container.scrollTo({
        left: nextScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="product-card-slider">
      <div className="card-container">
        <a className="card-header">
          <div className="header-title">{ProductSliderTitle}</div>
          <div className="header-btn">
            <MdArrowForwardIos className="arrow-icn" />
          </div>
        </a>

        <div className="card-content">
          <div
            className="product-list"
            ref={productList}
            onMouseDown={dragStart}
            onMouseMove={dragging}
            onMouseUp={dragStop}
            onMouseLeave={dragStop}
            onScroll={handleScroll}
          >
            {products.map((products, index) => (
              <div className="product-card" key={index}>
                <div className="card">
                  <div className="img-con">
                    <img src={abc} draggable="false" />
                  </div>
                  <div className="details-con">
                    <span className="product-nm">Product {products}</span>
                    <span className="product-price">From 499Rs</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {scrollPosition !== "start" && (
            <button
              className="slider-btn left"
              id="left"
              onClick={scrollToPrevious}
            >
              <MdArrowBackIos className="arrow-icn " />
            </button>
          )}

          {scrollPosition !== "end" && (
            <button
              className="slider-btn right"
              id="right"
              onClick={scrollToNext}
            >
              <MdArrowForwardIos className="arrow-icn " />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider1;
