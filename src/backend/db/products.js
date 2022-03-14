import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img:
      "https://rukminim1.flixcart.com/image/612/612/kwxv98w0/book/l/z/y/do-epic-shit-original-imag9gcfcwfvwtep.jpeg?q=70",
    name: "Do Epic Shit",
    author: "Ankur Warikoo",
    price: 500,
    originalPrice: 1000,
    isBestSeller: true,
    category: "self help",
    rating: 4.5
  },
  {
    _id: uuid(),
    img:
      "https://rukminim1.flixcart.com/image/612/612/jpu324w0/book/0/9/0/believe-in-yourself-original-imafbzz2h7yfg5zz.jpeg?q=70",
    name: "Believe In Yourself",
    author: "Joseph",
    price: 250,
    originalPrice: 1200,
    isBestSeller: false,
    category: "fiction",
    rating: 4
  },
  {
    _id: uuid(),
    img:
      "https://rukminim1.flixcart.com/image/612/612/ki96c280-0/book/3/p/n/one-indian-girl-original-imafy2zrymfbtygz.jpeg?q=70",
    name: "One Indian Girl",
    author: "Chetan Bhagat",
    price: 150,
    originalPrice: 250,
    isBestSeller: false,
    category: "self help",
    rating: 2
  },
  {
    _id: uuid(),
    img:
      "https://rukminim1.flixcart.com/image/612/612/kokdci80/regionalbooks/t/x/c/zero-to-one-original-imag2zzngtfasecu.jpeg?q=70",
    name: "Zero To One",
    author: "Peter Thiel",
    price: 50,
    originalPrice: 500,
    isBestSeller: false,
    category: "fiction",
    rating: 3.5
  },
  {
    _id: uuid(),
    img:
      "https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/0/6/q/ikigai-original-imag7kc7q5ugy2km.jpeg?q=70",
    name: "IKIGAI",
    author: "I dont Know",
    price: 600,
    originalPrice: 1500,
    isBestSeller: false,
    category: "non fiction",
    rating: 1
  },
  {
    _id: uuid(),
    img:
      "https://rukminim1.flixcart.com/image/612/612/kgwld3k0/book/1/9/4/rich-dad-poor-dad-original-imafxf885pytvycy.jpeg?q=70",
    name: "Rich Dad Poor Dad",
    author: "Robert Kiyoski",
    price: 350,
    originalPrice: 500,
    isBestSeller: false,
    category: "non fiction",
    rating: 2
  }
];
