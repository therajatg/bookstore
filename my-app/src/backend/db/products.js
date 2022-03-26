import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/therajatg/image/upload/books/literature and fiction/1_maqnxo.jpg",
    title: "The Book of Longings",
    author: "Sue Monk Kidd",
    rating: 4.5,
    price: 699,
    categoryName: "Literature & Fiction",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/therajatg/image/upload/books/biographies/2_lghdjj.jpg",
    title: "You are Winner",
    author: "Junaid Qureshi",
    rating: 5.0,
    price: 860,
    categoryName: "horror",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/therajatg/image/upload/books/literature and fiction/9_lgdze5.jpg",
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    rating: 5.0,
    price: 1000,
    categoryName: "fiction",
  },

  {
    _id: uuid(),
    img: "http://res.cloudinary.com/therajatg/image/upload/books/literature and fiction/8_ziwqzc.jpg",
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    rating: 4.0,
    price: 850,
    categoryName: "fiction",
  },

  {
    _id: uuid(),
    img: "http://res.cloudinary.com/therajatg/image/upload/books/literature and fiction/7_odibmh.jpg",
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    rating: 4.5,
    price: 1000,
    categoryName: "fiction",
  },

  {
    _id: uuid(),
    img: "http://res.cloudinary.com/therajatg/image/upload/books/literature and fiction/6_kgfcpj.jpg",
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    rating: 4.0,
    price: 420,
    categoryName: "fiction",
  },

  {
    _id: uuid(),
    img: "http://res.cloudinary.com/therajatg/image/upload/books/literature and fiction/5_tzuuxr.jpg",
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    rating: 5.0,
    price: 670,
    categoryName: "fiction",
  },

  {
    _id: uuid(),
    img: "http://res.cloudinary.com/therajatg/image/upload/books/literature and fiction/4_bxwppc.jpg",
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    rating: 3.5,
    price: 240,
    categoryName: "fiction",
  }
];
