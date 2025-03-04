import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { headPhones } from "../../Constants/data";
import Navbar from "../Navbar";

function ProductPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-10 bg-[url('https://i.ytimg.com/vi/DV6cNyQ3nC4/maxresdefault.jpg')] bg-center bg-no-repeat bg-cover">
      <Navbar />
      {/* Main Product Section */}
      <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center justify-between px-5 mt-5 md:px-10 mb-10 gap-10">
        {/* Product Info */}
        <div className="z-10 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Stylish & Durable.
          </h2>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Experience crystal-clear audio and deep bass.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            ₹ 1999
          </p>
          <button className="flex items-center bg-green-500 text-black py-2 px-4 rounded-full hover:bg-green-600 transition text-sm sm:text-base">
            <FaShoppingCart className="mr-2" /> Add to Cart
          </button>
        </div>

        {/* Main Product Image */}
        {/* <div className="relative flex justify-center">
          <div className="absolute inset-0 text-gray-800 text-[60px] sm:text-[80px] md:text-[200px] font-bold opacity-10 flex items-center justify-center">
            ZG20
          </div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5720b7112443365.60145184afe19.jpg"
            alt="Headphone"
            className="relative z-10 w-[200px] sm:w-[300px] md:w-[400px] object-contain"
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
        className="flex gap-4 overflow-x-auto px-5 w-full max-w-6xl"
      >
        {headPhones.map((product, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg p-4 w-[130px] sm:w-[150px] md:w-[180px] flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.img}
              alt="Product"
              className="w-full h-[100px] sm:h-[120px] md:h-[150px] object-contain mb-2"
            />
            <p className="text-xs sm:text-sm mb-1 text-center">
              Stylish & Durable.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mb-2 text-center">
              ₹ {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
