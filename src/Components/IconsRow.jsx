import React from "react";
import { Link } from "react-router-dom";

function IconRow() {
  return (
    <div className="relative bg-black rounded-xl py-4 px-2 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="flex space-x-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <Link to="/product">
            <img
              src="https://e7.pngegg.com/pngimages/603/643/png-clipart-noise-cancelling-headphones-audio-jbl-e65btnc-active-noise-control-headphones-electronics-bluetooth.png"
              width={40}
              height={40}
              key={index}
              className="text-gray-700 text-2xl transition-transform duration-300 hover:scale-110 rounded-3xl"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default IconRow;
