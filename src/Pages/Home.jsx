import React from "react";
import Hero from "../Components/Hero";
import Content from "../Components/Content";
import ProductCarousel from "../Components/ProductCarousel";
import FirstImgContent from "../Components/FirstImgContent";
import SecondImgContent from "../Components/SecondImgContent";
import TrendingProducts from "../Components/TrendingProducts";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Content />
      <ProductCarousel />
      <FirstImgContent />
      <Content />
      <ProductCarousel />
      <SecondImgContent />
      <TrendingProducts />
      <Footer />
    </div>
  );
}

export default Home;
