import Products from "./products";

import product9 from "../img/product9.png";
import product10 from "../img/product10.png";
import product11 from "../img/product11.png";
import product12 from "../img/product12.png";
import product13 from "../img/product13.png";
import product14 from "../img/product14.png";
import product15 from "../img/product15.png";
import product16 from "../img/product16.png";
import product17 from "../img/product17.png";
import product18 from "../img/product18.png";
import product19 from "../img/product19.png";

const allProducts = [
  ...Products,
  {
    img: product9,
    title: "Hatchback",
    text: "Ford Fiesta ST 2015 ",
    price: "10 500 €",
    key: 9,
  },
  {
    img: product10,
    title: "Suv",
    text: "BMW X6 2022 ",
    price: "55 250 €",
    key: 10,
  },
  {
    img: product11,
    title: "Sedan",
    text: "Mazda CX-5 2017 ",
    price: "23 750 €",
    key: 11,
  },
  {
    img: product12,
    title: "Hatchback",
    text: "Chevrolet Sail 2012 ",
    price: "13 750 €",
    key: 12,
  },
  {
    img: product13,
    title: "Motorbike",
    text: "Buell EBR 1190RX 2013 ",
    price: "9 000 €",
    key: 13,
  },
  {
    img: product14,
    title: "Hatchback",
    text: "Volkswagen Polo 2005",
    price: "5 000 €",
    key: 14,
  },
  {
    img: product15,
    title: "Sedan",
    text: "Volkswagen Arteon 2020",
    price: "17 500 €",
    key: 15,
  },
  {
    img: product16,
    title: "Sedan",
    text: "Tesla Model S 2019",
    price: "42 500 €",
    key: 16,
  },
  {
    img: product17,
    title: "Sedan",
    text: "Chevrolet Camaro 2015",
    price: "55 000 €",
    key: 17,
  },
  {
    img: product18,
    title: "Motorbike",
    text: "KTM 450 EXC Enduro 2010 ",
    price: "6 500 €",
    key: 18,
  },
  {
    img: product19,
    title: "Motorbike",
    text: "Kawasaki Ninja ZX-14 2012 ",
    price: "11 700 €",
    key: 19,
  },
];

export default allProducts;
