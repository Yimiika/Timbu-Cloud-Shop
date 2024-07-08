import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";

const calculateDiscount = (oldPrice, newPrice) => {
  const discount = ((oldPrice - newPrice) / oldPrice) * 100;
  return Math.round(Math.abs(discount));
};

let related_product = [
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
];

export default related_product;
