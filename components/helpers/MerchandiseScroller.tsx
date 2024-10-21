"use client";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const merchandiseItems = [
  {
    id: 1,
    name: "Blue Merchandise",
    bgImage: "/Merch/bluebg.png", // Background image path
    image: "/Merch/blue.png", // Merchandise image path
  },
  {
    id: 2,
    name: "Pink Merchandise",
    bgImage: "/Merch/pinkbg.png", // Background image path
    image: "/Merch/pink.png",
  },
  {
    id: 3,
    name: "Yellow Merchandise",
    bgImage: "/Merch/yellowbg.png", // Background image path
    image: "/Merch/yellow.png",
  },
  {
    id: 4,
    name: "Black Merchandise",
    bgImage: "/Merch/blackbg.png", // Background image path
    image: "/Merch/black.png",
  },
];

const MerchandiseScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const updateIndex = (newIndex: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500); // Animation duration

    setCurrentIndex(() => {
      const totalItems = merchandiseItems.length;
      return (newIndex + totalItems) % totalItems;
    });
  };

  const handleNext = () => {
    updateIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    updateIndex(currentIndex - 1);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Auto-scroll every 2 seconds
    timeoutRef.current = window.setTimeout(() => handleNext(), 2000);

    // Clean up timer on component unmount
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  return (
    <div className="w-full h-screen flex items-center justify-center px-40 py-6 max-sm:p-2 max-sm:h-[40vh]">
      <div
        className={`relative w-full h-full flex justify-center items-center overflow-hidden transition-all duration-500 ease-in-out rounded-3xl`}
        style={{
          backgroundImage: `url(${merchandiseItems[currentIndex].bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "2rem", // Ensure smooth corner rounding
        }}
      >
        {/* Left Button */}
        <button
          className="absolute left-4 z-10 w-14 h-14 bg-white rounded-full flex justify-center items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:bg-gray-100"
          onClick={handlePrev}
        >
          <div className="flex items-center justify-center">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-gray-600 text-3xl"
            />
          </div>
        </button>

        {/* Right Button */}
        <button
          className="absolute right-4 z-10 w-14 h-14 bg-white rounded-full flex justify-center items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:bg-gray-100"
          onClick={handleNext}
        >
          <div className="flex items-center justify-center">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-gray-600 text-3xl"
            />
          </div>
        </button>

        {/* Merchandise Items */}
        <div className="relative w-full h-full flex justify-center items-center">
          {merchandiseItems.map((item, index) => {
            // Determine slide direction
            const isCurrent = index === currentIndex;
            const isNext =
              (index - currentIndex + merchandiseItems.length) %
                merchandiseItems.length ===
              1;
            const isPrev =
              (currentIndex - index + merchandiseItems.length) %
                merchandiseItems.length ===
              1;

            let transformStyle = "";
            if (isCurrent) {
              transformStyle = "translateX(0)";
            } else if (isNext) {
              transformStyle = "translateX(100%)";
            } else if (isPrev) {
              transformStyle = "translateX(-100%)";
            }

            return (
              <div
                key={item.id}
                className={`absolute transition-transform duration-700 ease-in-out ${
                  isCurrent ? "opacity-100 scale-110" : "opacity-0 scale-75"
                }`}
                style={{
                  transform: transformStyle,
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-auto object-contain" // Adjust size to cover most of the bg
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MerchandiseScroller;
