import { IoSearch } from "react-icons/io5";
import {
    MdOutlineAccountCircle,
    MdOutlineShoppingCart,
    MdKeyboardArrowDown,
    MdArrowForwardIos,
    MdStar,
    MdArrowBackIos,
    MdCheckCircle,
    MdInfo,
    MdWarning,
    MdError,
    MdLogout,
    MdNotificationsNone ,
} from "react-icons/md";
import { AiOutlineHeart, AiOutlineCustomerService } from "react-icons/ai";
import { FaBoxOpen, FaHeart, FaRegHeart } from "react-icons/fa";

import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineLocalOffer, MdOutlinePayments } from "react-icons/md";
import { TbRosetteDiscount } from "react-icons/tb";
import { PiHeadset,PiPackage } from "react-icons/pi";

export const icons = {
    arrow: <MdKeyboardArrowDown className="arrow-icon" />,
    arrowdown: <MdKeyboardArrowDown className="icon" />,
    cart: <MdOutlineShoppingCart className="icon" />,
    Account: <MdOutlineAccountCircle className="icon" />,
    heart1: <AiOutlineHeart className="icon" />,
    customercare: <AiOutlineCustomerService className="icon" />,
    search: <IoSearch className="icon" />,
    heart: <FaRegHeart className="icon" />,
    heartFilled: <FaHeart className="icon" />,
    arrowRight: <MdArrowForwardIos className="icon" />,
    arrowLeft: <MdArrowBackIos className="icon" />,
    star: <MdStar className="icon" />,
    success: <MdCheckCircle className="icon" />,
    info: <MdInfo className="icon" />,
    warning: <MdWarning className="icon" />,
    error: <MdError className="icon" />,
    shiping: <LiaShippingFastSolid className="icon" />,
    offer: <MdOutlineLocalOffer className="icon" />,
    payment: <MdOutlinePayments className="icon" />,
    discount: <TbRosetteDiscount className="icon" />,
    headset: <PiHeadset className="icon" />,
    logout: <MdLogout className="icon" />,
    notification: <MdNotificationsNone   className="icon" />,
    oders: <PiPackage className="icon" />,
};

import grocery from "../assets/categoryBarImages/grocery.png";
import mobile from "../assets/categoryBarImages/mobile.png";
import fashion from "../assets/categoryBarImages/Fashion.png";
import electronics from "../assets/categoryBarImages/Electronics.png";
import furniture from "../assets/categoryBarImages/furniture.jpg";
import appliences from "../assets/categoryBarImages/appliences.jpg";
import aroplane from "../assets/categoryBarImages/aroplane.png";
import toys from "../assets/categoryBarImages/toys.png";
import shoppinglogo from "../assets/categoryBarImages/shopping.png";


export const categoryBarImagepath = {
    grocery: grocery,
    mobile: mobile,
    fashion: fashion,
    electronics: electronics,
    furniture: furniture,
    appliences: appliences,
    aroplane: aroplane,
    toys: toys,
    shoppinglogo: shoppinglogo,
};


import image1 from "../assets/sliderImages/img1.jpg";
import image2 from "../assets/sliderImages/img2.jpg";
import image3 from "../assets/sliderImages/img3.jpeg";
import imageBannerSlider1 from "../assets/sliderImages/imgeBannerSlider1.jpg";
import imageBannerSlider2 from "../assets/sliderImages/imgeBannerSlider2.jpg";
import imageBannerSlider3 from "../assets/sliderImages/imgeBannerSlider3.jpg";

export const sliderImage = {
    image1: image1,
    image2: image2,
    image3: image3,
    imageBannerSlider1: imageBannerSlider1,
    imageBannerSlider2: imageBannerSlider2,
    imageBannerSlider3: imageBannerSlider3,
};

import imagebanner from "../assets/bannerImages/imagebanner.jpeg";
import imagebannertitle from "../assets/bannerImages/imagebannertitle.jpg";
import imagewidebanner1 from "../assets/bannerImages/imagewidebanner1.jpg";
import imagewidebanner2 from "../assets/bannerImages/imagewidebanner2.jpg";
import productImageBanner1 from "../assets/bannerImages/product1.jpg";
import productImageBanner2 from "../assets/bannerImages/product2.jpg";

// export const sliderBannerImage = [
// ];

export const bannerImage = {
    imagebanner: imagebanner,
    productImageBanner1: productImageBanner1,
    productImageBanner2: productImageBanner2,
    imagebannertitle: imagebannertitle,
    imagewidebanner1: imagewidebanner1,
    imagewidebanner2: imagewidebanner2,
};

import product1 from "../assets/productImages/product1.jpeg";
import product2 from "../assets/productImages/product2.jpeg";
import product3 from "../assets/productImages/product3.jpeg";
import product4 from "../assets/productImages/product4.jpeg";
import product5 from "../assets/productImages/product5.jpeg";


export const ProductImage = {
    product1: product1,
    product2: product2,
    product3: product3,
    product4: product4,
    product5: product5,
};