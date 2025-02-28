import React, { useEffect, useRef, useState } from "react";
import "./CardSlider.css";

import {HomeProductCard} from "../index";

import { icons } from "../../common/Path";

const CardSlider = ({
  cardSliderTitle = "",
  data = null,
  isButtonVisible = false,
  isDraggable = false,
}) => {
  let cardList = useRef(null);
  let isDragging = false;
  let startX, startScrollLeft;

  const [isLeftScroll, setIsLeftScroll] = useState(false);
  const [isRightScroll, setIsRightScroll] = useState(true);

  useEffect(() => {
    // setTimeout(function () {
    //   cardList.current.scrollLeft = cardList.current.children[0].offsetWidth;
    // }, 1000);
  }, []);

  const dragStart = (e) => {
    if (!isDraggable) return;
    isDragging = true;
    cardList.current.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = cardList.current.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDraggable) return;
    if (isDragging) {
      cardList.current.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
  };

  const dragStop = (e) => {
    if (!isDraggable) return;
    isDragging = false;
    cardList.current.classList.remove("dragging");
  };

  const slideProducts = (type) => {
    const firstCardWidth = cardList.current.children[0].offsetWidth;
    cardList.current.scrollLeft +=
      type === "left" ? -firstCardWidth : firstCardWidth;
  };

  const handleSlideButton = () => {
    if (!isButtonVisible) return;

    setIsLeftScroll(cardList.current.scrollLeft <= 0 ? false : true);

    setIsRightScroll(
      cardList.current.scrollLeft >= cardList.current.scrollLeftMax
        ? false
        : true
    );
  };

  return (
    <div className="card-slider">
      <div className="card-container">
        <a className="card-header">
          <div className="header-title">{cardSliderTitle}</div>
          <div className="header-btn">
            {icons.arrowRight}
          </div>
        </a>

        <div className="card-body">
          <div
            className="card-list"
            ref={cardList}
            onMouseDown={dragStart}
            onMouseMove={dragging}
            onMouseUp={dragStop}
            onMouseLeave={dragStop}
            onScroll={handleSlideButton}
          >
            {data.map((item, index) => (
              <HomeProductCard key={index} item={item}/>
            ))}
          </div>

          {isButtonVisible && (
            <>
              {isLeftScroll && (
                <button
                  className="slider-btn left"
                  id="left"
                  onClick={() => slideProducts("left")}
                >
                 {icons.arrowLeft}
                </button>
              )}

              {isRightScroll && (
                <button
                  className="slider-btn right"
                  id="right"
                  onClick={() => slideProducts("right")}
                >
                  {icons.arrowRight}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
