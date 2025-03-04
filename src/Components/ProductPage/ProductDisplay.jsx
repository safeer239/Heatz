import React from 'react';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { headPhones } from '../../Constants/data';

function ProductDisplay() {
  return (
    <div className="bg-black text-white min-h-screen py-10 px-4 sm:px-6 lg:px-10">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {["Computer Parts", "Phone", "Sound", "Wearables", "Others", "All Products"].map((filter, index) => (
          <button
            key={index}
            className="text-xs sm:text-sm py-1 px-3 rounded-md bg-gray-800 hover:bg-gray-700 transition"
          >
            {filter}
          </button>
        ))}
        <button className="text-xs sm:text-sm py-1 px-3 rounded-md bg-gray-800 hover:bg-gray-700 transition">
          Sort by
        </button>
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Headphones For You!</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 sm:p-4 lg:p-6">
        {headPhones.map((product) => (
          <div
            key={product.id}
            className="rounded-lg p-4 bg-white relative transition-transform transform hover:scale-105 shadow-md"
          >
            {/* Product Image */}
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-40 sm:h-48 object-contain mb-4"
            />
            {/* Product Info */}
            <div>
              <h3 className="text-sm sm:text-base text-black font-semibold mb-2">{product.title}</h3>
              <p className="text-xs sm:text-sm text-black mb-2">{product.description}</p>
              <p className="text-sm sm:text-lg text-black font-bold mb-4">{product.price}</p>
            </div>
            {/* Icons */}
            <div className="flex justify-between items-center">
              <button className="text-gray-400 hover:text-red-500 transition">
                <FaHeart />
              </button>
              <button className="text-gray-400 hover:text-green-500 transition">
                <FaShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDisplay;
