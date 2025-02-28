import React from "react";
import "./Home.css";

import { productsCardData, productsData } from "../../common/Data";
import { bannerImage, icons } from "../../common/Path";

import CategoryBar from "./CategoryBar/CategoryBar";
import ImageSlider from "./ImageSlider/ImageSlider";

import { CardSlider, HomeBoxContainer } from "../../components";

const Home = () => {
  return (
    <div className="home-container">
      <div className="grid-container grid-1">
        <CategoryBar />
      </div>
      <div className="grid-container grid-2">
        <ImageSlider />
      </div>

      <div className="grid-container grid-3">
        <CardSlider
          cardSliderTitle="Popular Products"
          data={productsData}
          isButtonVisible={true}
          isDraggable={true}
        />
      </div>

      <div className="grid-container grid-4">
        <HomeBoxContainer
          containerTitle="Revamp your home in style"
          data={productsCardData}
        />
      </div>

      <div className="grid-container grid-5">
        <HomeBoxContainer
          containerTitle="Appliances for your home | Up to 55% off"
          data={productsCardData}
        />
      </div>

      <div className="grid-container grid-6">
        <HomeBoxContainer
          containerTitle="Starting ₹149 | Headphones"
          data={productsCardData}
        />
      </div>

      <div className="grid-container grid-7">
        <HomeBoxContainer
          containerTitle="Automotive essentials | Up to 60% off"
          data={productsCardData}
        />
      </div>

      <div className="grid-container grid-8">
        <CardSlider
          cardSliderTitle="Best Of Electronics"
          data={productsData}
          isButtonVisible={true}
          isDraggable={true}
        />
      </div>

      <div className="grid-container grid-9">
        <div className="home-image-banner-container">
          <a href="#" className="image-bannner">
            <div className="image-container">
              <img src={bannerImage.imagebanner} alt="image" />
            </div>
          </a>
        </div>
      </div>

      <div className="grid-container grid-10">
        <div className="shopping-feature">
          <div className="feature">
            <div className="image-con">
              {icons.shiping}
            </div>
            <div className="feature-details">
              <h1>Free Shipping</h1>
              <span>From all orders over 500 Rs</span>
            </div>
          </div>

          <div className="feature">
            <div className="image-con">
              {icons.offer}
            </div>
            <div className="feature-details">
              <h1>Daily Surprise Offers</h1>
              <span>Save up to 25% off</span>
            </div>
          </div>

          <div className="feature">
            <div className="image-con">
              {icons.discount}
            </div>
            <div className="feature-details">
              <h1>Affordable Prices</h1>
              <span>Get Factory direct price</span>
            </div>
          </div>

          <div className="feature">
            <div className="image-con">
              {icons.payment}
            </div>
            <div className="feature-details">
              <h1>Secure Payments</h1>
              <span>100% Protected Payments</span>
            </div>
          </div>

          <div className="feature">
            <div className="image-con">
              {icons.headset}
            </div>
            <div className="feature-details">
              <h1>Support 24/7</h1>
              <span>Shop with an expert</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
