import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useRef } from "react";
import { TrendingProduct } from "../Constants/data";

function TrendingProducts() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-black flex flex-col items-center justify-between px-20 py-10 mt-8">
      <div className="text-white max-w-5xl flex mb-8">
        <div className="w-170 flex">
          <h1 className="text-3xl font-bold leading-none mb-4">
            Trending Products.
          </h1>
        </div>
        <div>
          <p className="text-white text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 z-10"
        >
          <FaChevronLeft />
        </button>

        <div
          ref={carouselRef}
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="no-scrollbar"
        >
          {TrendingProduct.map((product, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg min-w-[200px] shadow-lg"
              style={{ flex: "0 0 auto" }}
            >
              <img
                src={product.img}
                alt="product"
                className="w-60 h-100 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 z-10"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default TrendingProducts;
