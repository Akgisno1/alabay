"use client";
import React, { useState } from "react";
import Carousel from "./ui/carousel";

const images = ["/41.png", "/42.png", "/43.png", "/44.png"];

const SectionTwo = () => {
  const [active, setActive] = useState("all");

  // Function to handle category change
  const handleCategoryChange = (category: string) => {
    setActive(category);
  };

  return (
    <div className="w-full flex-col flex items-center bg-transparent py-10">
      {/* Category Buttons */}
      <div className="flex flex-row text-[2vw] max-sm:text-[2vh] font-black font-mont gap-10">
        <div
          onClick={() => handleCategoryChange("all")}
          className={`cursor-pointer ${
            active === "all" ? "text-yellow-500" : "text-gray-700"
          }`}
        >
          ALL
        </div>
        <div
          onClick={() => handleCategoryChange("images")}
          className={`cursor-pointer ${
            active === "images" ? "text-yellow-500" : "text-gray-700"
          }`}
        >
          PHOTOS
        </div>
        <div
          onClick={() => handleCategoryChange("videos")}
          className={`cursor-pointer ${
            active === "videos" ? "text-yellow-500" : "text-gray-700"
          }`}
        >
          VIDEOS
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default SectionTwo;
