import React from "react";
import "./style.css";

import { bannerImage } from "../../common/Path";
import {
  productImageBannerData,
  sliderBannerImageData,
} from "../../common/Data";
import {
  ImageAnounmentBanner,
  ImageFlexBanner,
  ProductCategoryContainer,
  ProductImageBanner,
  ProductImageBannerSlider,
} from "../../components";

const MobilePhoneStore = () => {
  return (
    <div className="store-container">
      <div className="store-header">
        <h1>Mobiles</h1>
        <div className="store-description">
          <p>
            <span>
              Mobile phones are no more merely a part of our lives. Whether it's
              to stay connected with friends and family or to keep abreast of
              important developments around the world, mobiles are no longer for
              sending a text or making a call. From budget to state-of-the-art
              smartphones; indigenous names to global big-wigs - a whole
              universe of mobiles await you on Flipkart. Whether you’re looking
              for waterdrop notch screens, a high screen to body ratio,
              AI-powered sensational cameras, high storage capacity, blazing
              quick processing engines or reflective glass designs, rest assured
              you won’t have to venture anywhere else for your smartphone needs.
              The information you are reading has been last updated on
              25-Jan-25.
            </span>
          </p>
        </div>
      </div>

      <div className="store-grid-container">
        <ImageAnounmentBanner image={bannerImage.imagebannertitle} />
      </div>

      <div className="store-grid-container">
        <ImageFlexBanner image={bannerImage.imagewidebanner1} />
      </div>

      <div className="store-grid-container">
        <ImageFlexBanner image={bannerImage.imagewidebanner2} />
      </div>

      <div className="store-grid-container">
        <ImageFlexBanner image={bannerImage.imagewidebanner2} />
      </div>

      <div className="store-grid-container">
        <ImageAnounmentBanner image={bannerImage.imagebannertitle} />
      </div>

      <div className="store-grid-container">
        <ImageFlexBanner image={bannerImage.imagewidebanner2} />
      </div>

      <div className="store-grid-container">
        <ImageFlexBanner image={bannerImage.imagewidebanner1} />
      </div>

      <div className="store-grid-container">
        <ProductImageBannerSlider data={sliderBannerImageData} />
      </div>

      <div className="store-grid-container">
        <ProductImageBanner data={productImageBannerData.slice(0, 9)} />
      </div>

      <div className="store-grid-container">
        <ProductImageBannerSlider data={sliderBannerImageData} />
      </div>

      <div className="store-grid-container">
        <ProductImageBanner data={productImageBannerData} />
      </div>

      <div className="store-grid-container">
        <ProductCategoryContainer title="Motorola smartphones" />
      </div>

      <div className="store-grid-container">
        <ProductCategoryContainer title="Poco smartphones" />
      </div>

      <div className="store-grid-container">
        <ProductCategoryContainer title="Vivo smartphones" />
      </div>
    </div>
  );
};

export default MobilePhoneStore;
