import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { headPhones } from "../../Constants/data";
import Navbar from "../Navbar";

function ProductPage() {
  return (
    <div className="bg-black text-white min-h-sceen flex flex-col items-center justify-center py-10 bg-[url('https://i.ytimg.com/vi/DV6cNyQ3nC4/maxresdefault.jpg')] bg-center bg-no-repeat bg-cover h-screen">
      <Navbar />
      {/* Main Product Section */}
      <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center justify-between px-5 mt-5 md:px-10 mb-25 gap-10 ">
        {/* Product Info */}
        <div className="z-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Stylish & Durable.
          </h2>
          <p className="text-gray-400 mb-6">
            Experience crystal-clear audio and deep bass.
          </p>
          <p className="text-xl md:text-2xl font-bold mb-4">₹ 1999</p>
          <button className="flex items-center bg-green-500 text-black py-2 px-4 rounded-full hover:bg-green-600 transition">
            <FaShoppingCart className="mr-2" /> Add to Cart
          </button>
        </div>

        {/* Main Product Image */}
        {/* <div className="relative flex justify-center">
          <div className="absolute inset-0 text-gray-800 text-[100px] md:text-[200px] font-bold opacity-10 flex items-center justify-center">
            ZG20
          </div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5720b7112443365.60145184afe19.jpg" // Replace with your image URL
            alt="Headphone"
            className="relative z-10 w-[300px] md:w-[400px] object-contain"
          />
        </div> */}
      </div>

      {/* Horizontal Product Carousel */}
      <div
        style={{
          overflowX: "auto",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
        }}
        className="flex gap-4 overflow-x-auto px-5  w-full max-w-6xl"
      >
        {headPhones.map((product, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg p-4 w-[150px] md:w-[180px] flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.img} // Replace with your image URL
              alt="Product"
              className="w-full mb-4"
            />
            <p className="text-sm mb-2 text-center">Stylish & Durable.</p>
            <p className="text-sm text-gray-400 mb-2 text-center">
              ₹ {product.price}
            </p>
          </div>
        ))}
      </div>

    
    </div>
  );
}

export default ProductPage;
