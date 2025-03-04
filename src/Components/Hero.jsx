import React from "react";
import Navbar from "./Navbar";
import Product from "./Product";

function Hero() {
  return (
    <div className="relative h-screen bg-black">
      <div
        className="bg-[url('https://www.yankodesign.com/images/design_news/2023/10/apple-watch-ultra-3-with-360-camera-is-for-smartwatch-photographers-of-tomorrow/Concept-Apple-Watch-Ultra-3-with-360-camera-3.jpg')] 
        bg-center bg-no-repeat bg-cover h-screen flex flex-col justify-between items-center text-white px-4 sm:px-8 md:px-16"
      >
        <div className="w-full">
          <Navbar />
        </div>
        <div className="mb-3 w-full max-w-4xl">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Hero;
