import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";

const calculateDiscount = (oldPrice, newPrice) => {
  const discount = ((oldPrice - newPrice) / oldPrice) * 100;
  return Math.round(Math.abs(discount));
};

let data_product = [
  {
    id: 1,
    name: "Bold Red Jacket",
    image: p1_img,
    location: "From Turkey",
    stars: 5,
    new_price: 17000.0,
    old_price: 20000.0,
    discount: calculateDiscount(17000.0, 20000.0),
  },
  {
    id: 2,
    name: "Dinner Gown",
    image: p2_img,
    location: "From Lagos",
    star: 3,
    new_price: 85.0,
    old_price: 120.5,
    discount: calculateDiscount(85.0, 120.5),
  },
  {
    id: 3,
    name: "Women Gown",
    image: p3_img,
    location: "From Lagos",
    stars: 4,
    new_price: 60.0,
    old_price: 100.5,
    discount: calculateDiscount(60.0, 100.5),
  },
  {
    id: 4,
    name: "Female Casual",
    image: p4_img,
    location: "From Lagos",
    stars: 4,
    new_price: 100.0,
    old_price: 150.0,
    discount: calculateDiscount(100.0, 150.0),
  },
  {
    id: 12,
    name: "Striped Flutter ",
    image: p5_img,
    location: "From Lagos",
    stars: 4,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 35,
    name: "Boys Orange",
    image: p6_img,
    location: "From Lagos",
    stars: 4,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Men Green Solid ",
    image: p7_img,
    location: "From Lagos",
    stars: 4,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve",
    image: p8_img,
    location: "From Lagos",
    stars: 4,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 15,
    name: "Men Green Solid Zippered ",
    image: p9_img,
    location: "From Lagos",
    stars: 4,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve",
    image: p10_img,
    location: "From Lagos",
    stars: 4,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Men Green Solid ",
    image: p11_img,
    location: "From Lagos",
    stars: 4,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 28,
    name: "Boys Orange ",
    image: p12_img,
    location: "From Lagos",
    stars: 4,
    new_price: 100.0,
    old_price: 150.0,
  },
];

export default data_product;
