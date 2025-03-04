import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

function FirstImgContent() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <img
          src={img1}
          className="w-full sm:w-[300px] md:w-[350px] object-cover rounded-lg shadow-lg"
          alt=""
        />
        <img
          src={img2}
          className="w-full sm:w-[300px] md:w-[350px] object-cover rounded-lg shadow-lg"
          alt=""
        />
      </div>
    </div>
  );
}

export default FirstImgContent;
