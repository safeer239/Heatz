import React from "react";

const images = [
  "https://5.imimg.com/data5/ECOM/Default/2023/12/365953767/BJ/SW/JF/132983634/7689188439-500x500.jpg",
  "https://i.pinimg.com/originals/ed/65/8b/ed658b31d241569f7af9a9445ab162fa.jpg",
  "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/2024/01/amazfit-feature-image-smartwatches.jpg",
  "https://m.media-amazon.com/images/I/51mIGwN1eFS.jpg",
  "https://specials-images.forbesimg.com/imageserve/6022c88978cebd45cbe981f2/960x0.jpg?cropX1=0&cropX2=5183&cropY1=0&cropY2=3455",
  "https://th.bing.com/th/id/OIP.r3tmDU-6hDrVVFTR0yM4GwHaE8?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.MQJVyLIYa7rGC3TbHDPcDwHaFC?rs=1&pid=ImgDetMain",
  "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/2024/01/amazfit-feature-image-smartwatches.jpg",
];

function ImageCarousel() {
  return (
    <div className="bg-black py-8 px-20">
      <div className="overflow-x-auto scroll-smooth ">
        <div className="flex gap-4 scroll-snap-x">
          {images.map((image, index) => (
            <img
              style={{
                overflowX: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 rounded-lg object-cover transition-transform duration-300  scroll-snap-align-start"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
