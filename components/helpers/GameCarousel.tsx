"use client";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const carouselItems = [
  {
    id: 1,
    bgImage: "/Games/guardhome.png",
    buttonText: "DISCOVER",
    buttonLink: "/guard",
    buttonColor: "bg-violet-600",
  },
  {
    id: 2,
    bgImage: "/Games/heritagehome.png",
    buttonText: "DISCOVER",
    buttonLink: "/heritage",
    buttonColor: "bg-emerald-500",
  },
  // Add more items as needed
];

const GameScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const updateIndex = (newIndex: number) => {
    setCurrentIndex(() => {
      const totalItems = carouselItems.length;
      return (newIndex + totalItems) % totalItems;
    });
  };

  const handleNext = () => {
    updateIndex(currentIndex + 1);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => handleNext(), 2000); // Auto-scroll every 2 seconds

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  return (
    <div className="w-full h-screen flex items-center justify-center px-20  py-6">
      <div className="relative w-full h-full flex justify-center items-center overflow-hidden rounded-3xl">
        {/* Image Container */}
        <div
          className="absolute w-full h-full flex transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Move left by the index
          }}
        >
          {carouselItems.map((item) => (
            <div
              key={item.id}
              className="w-full h-full flex-shrink-0 border-white border-8 rounded-3xl"
              style={{
                backgroundImage: `url(${item.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Button Link */}
              <div className="flex justify-center items-center h-full mt-48 ">
                <a
                  href={item.buttonLink}
                  className={`px-14 py-4 text-white text-3xl flex flex-row items-center justify-center gap-6 rounded-full font-mont  transition-colors shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] duration-300 ${item.buttonColor}`}
                >
                  {item.buttonText}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-white text-5xl  "
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}

        {/* Right Button */}
        <button
          className="absolute right-4 z-10  rounded-xl py-8 px-4 bg-gray-800 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex justify-center items-center  hover:bg-gray-400"
          onClick={handleNext}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-white text-3xl font-bold"
          />
        </button>
      </div>
    </div>
  );
};

export default GameScroller;
