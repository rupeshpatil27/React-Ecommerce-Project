import { bannerImage, ProductImage, sliderImage } from "./Path";

const productImage = [ProductImage.product1, ProductImage.product2, ProductImage.product3, ProductImage.product4, ProductImage.product5];
const productPrice = ["100", "500", "15000", "2000", "4000", "300"];
const productName = ["aaa", "bbb", "ccc", "dddd"];

const numberArray = [];
for (var i = 1; i <= 15; i++) {
    const rni = Math.floor(Math.random() * productImage.length);
    const rnp = Math.floor(Math.random() * productPrice.length);

    numberArray.push({
        name: i,
        img: productImage[rni],
        price: productPrice[rnp],
    });
}

export const productsData = numberArray;

const numberArray1 = [];
for (var i = 1; i <= 4; i++) {
    const rni = Math.floor(Math.random() * productImage.length);
    const rnn = Math.floor(Math.random() * productName.length);

    numberArray1.push({
        name: productName[rnn],
        img: productImage[rni],
    });
}

export const productsCardData = numberArray1;


const productBannerImages = [bannerImage.productImageBanner1, bannerImage.productImageBanner2];

const numberArray3 = [];
for (var i = 1; i <= 18; i++) {
    const rni = Math.floor(Math.random() * productBannerImages.length);

    numberArray3.push({
        img: productBannerImages[rni],
    });
}

export const productImageBannerData = numberArray3;


export const sliderImageData = [
    { image: sliderImage.image1 },
    { image: sliderImage.image2 },
    { image: sliderImage.image3 },
];

export const sliderBannerImageData = [
    { image: sliderImage.imageBannerSlider1 },
    { image: sliderImage.imageBannerSlider2 },
    { image: sliderImage.imageBannerSlider3 },
];

export const sortTypes = [
    "Relevance",
    "Popularity",
    "Price -- Low to High",
    "Price -- High to Low",
    "Newest First",
];

export const productData = [
    {
        id: 1,
        image: ProductImage.product1,
        name: "realme P1 5G (Feather Blue, 128 GB)",
        rating: 4.5,
        review: 79467,
        price: 13999,
        retailPrice: 20000,
        discount: 33,
    },
    {
        id: 1,
        image: ProductImage.product2,
        name: "realme P1 5G (Feather Blue, 128 GB)",
        rating: 4.5,
        review: 79467,
        price: 13999,
        retailPrice: 20000,
        discount: 33,
    },
    {
        id: 1,
        image: ProductImage.product3,
        name: "realme P1 5G (Feather Blue, 128 GB)",
        rating: 4.5,
        review: 79467,
        price: 13999,
        retailPrice: 20000,
        discount: 33,
    },
    {
        id: 1,
        image: ProductImage.product5,
        name: "realme P1 5G (Feather Blue, 128 GB)",
        rating: 4.5,
        review: 79467,
        price: 13999,
        retailPrice: 20000,
        discount: 33,
    },
    {
        id: 1,
        image: ProductImage.product1,
        name: "realme P1 5G (Feather Blue, 128 GB)",
        rating: 4.5,
        review: 79467,
        price: 13999,
        retailPrice: 20000,
        discount: 33,
    },
    {
        id: 1,
        image: ProductImage.product2,
        name: "realme P1 5G (Feather Blue, 128 GB)",
        rating: 4.5,
        review: 79467,
        price: 13999,
        retailPrice: 20000,
        discount: 33,
    },
];


export const product=[
    {
      id: 1,
      image: ProductImage.product1,
      name: "realme P1 5G (Feather Blue, 128 GB)",
      rating: 4.5,
      review: 79467,
      price: 13999,
      retailPrice: 20000,
      discount: 33,
    },
    {
      id: 1,
      image: ProductImage.product1,
      name: "realme P1 5G (Feather Blue, 128 GB)",
      rating: 4.5,
      review: 79467,
      price: 13999,
      retailPrice: 20000,
      discount: 33,
    },
    {
      id: 1,
      image: ProductImage.product1,
      name: "realme P1 5G (Feather Blue, 128 GB)",
      rating: 4.5,
      review: 79467,
      price: 13999,
      retailPrice: 20000,
      discount: 33,
    },
    {
      id: 1,
      image: ProductImage.product1,
      name: "realme P1 5G (Feather Blue, 128 GB)",
      rating: 4.5,
      review: 79467,
      price: 13999,
      retailPrice: 20000,
      discount: 33,
    },
    {
      id: 1,
      image: ProductImage.product1,
      name: "realme P1 5G (Feather Blue, 128 GB)",
      rating: 4.5,
      review: 79467,
      price: 13999,
      retailPrice: 20000,
      discount: 33,
    },
    {
      id: 1,
      image: ProductImage.product1,
      name: "realme P1 5G (Feather Blue, 128 GB)",
      rating: 4.5,
      review: 79467,
      price: 13999,
      retailPrice: 20000,
      discount: 33,
    }
  ]