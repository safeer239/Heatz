import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image:
      "https://img.freepik.com/premium-photo/illustration-wireless-mouseacid-aesthetic-stylec4d-oc-render_945369-10280.jpg",
    title: "Boost up your Gaming experience.",
    subtitle: "Learn more",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-photo/mouse-with-blue-light-that-says-microsoft-it_745528-1379.jpg",
    title: "Boost up your Gaming experience.",
    subtitle: "Learn more",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/premium-photo/photo-wireless-mouse-mechanical-keyboard_1056572-19298.jpg",
    title: "Boost up your Gaming experience.",
    subtitle: "Learn more",
  },
];

function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative bg-black  flex flex-col items-center justify-between px-4 md:px-16 py-10 mt-8">
      {/* Text Section */}
      <div className="text-white max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-none mb-4 text-center md:text-left">
          Boost up your <br /> Gaming experience.
        </h1>
        <p className="text-white text-sm md:text-base text-center md:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-6xl h-[300px] md:h-[500px] overflow-hidden rounded-xl shadow-xl">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">
                {slide.title}
              </h2>
              <button className="px-4 md:px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                {slide.subtitle}
              </button>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white/20 p-1 md:p-2 rounded-full hover:bg-white/40 transition"
          onClick={handlePrev}
        >
          <FaChevronLeft className="text-white w-4 h-4 md:w-6 md:h-6" />
        </button>
        <button
          className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white/20 p-1 md:p-2 rounded-full hover:bg-white/40 transition"
          onClick={handleNext}
        >
          <FaChevronRight className="text-white w-4 h-4 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}

export default Content;
