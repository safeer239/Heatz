import React, { useState } from "react";
import { headPhones } from "../Constants/data";
import { Link } from "react-router-dom";

const categories = ["Headset", "Mouse", "Keyboard", "10% Offers"];

const ProductCarousel = () => {
  const [activeCategory, setActiveCategory] = useState("Headset");

  return (
    <div className="bg-black text-white py-8 px-20 mb-4">
      <div className="flex justify-between">
        <div className="flex gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-green-500 text-black"
                  : "bg-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button className="text-green-500 hover:text-green-700">
            View All Products →
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {headPhones.map((product, index) => (
          <Link to="/product">
            <div
              key={index}
              className="bg-white text-black rounded-lg p-4 min-w-[250px] shadow-lg"
            >
              <img
                src={product.img}
                alt="product"
                className="w-full h-50 object-cover rounded-lg mb-4"
              />
              <p className="text-green-600 text-sm mb-1">
                {product.buyCategory}
              </p>
              <p className="text-sm mb-2">{product.description}</p>
              <p className="font-bold">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
