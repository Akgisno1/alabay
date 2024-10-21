import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const images = ["/41.png", "/42.png", "/43.png", "/44.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null); // Create a ref for the carousel container

  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < images.length - 3;

  const goToPrevious = () => {
    if (canGoLeft) {
      setCurrentIndex(currentIndex - 1);
      scrollCarousel(-1); // Scroll to the left
    }
  };

  const goToNext = () => {
    if (canGoRight) {
      setCurrentIndex(currentIndex + 1);
      scrollCarousel(1); // Scroll to the right
    }
  };

  const scrollCarousel = (direction: number) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 3; // Calculate the width to scroll (3 images)
      carouselRef.current.scrollBy({
        left: scrollAmount * direction,
        behavior: "smooth",
      }); // Scroll with smooth behavior
    }
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);
  while (visibleImages.length < 3) {
    visibleImages.push(images[visibleImages.length % images.length]);
  }

  return (
    <div className="relative w-full bg-transparent mt-5">
      {/* Carousel Images */}
      <div
        ref={carouselRef} // Attach the ref to the carousel container
        className="flex justify-center w-full overflow-hidden gap-8 max-sm:gap-2"
      >
        {visibleImages.map((image, index) => (
          <div
            className="w-[27vw] h-[30vh] max-sm:h-[15vh] max-sm:w-[25vw] bg-gray-400 rounded-3xl max-sm:rounded-xl hover:border-4 hover:border-black overflow-hidden"
            key={index}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={goToPrevious}
        disabled={!canGoLeft}
        className={`absolute left-4 max-sm:p-2 py-6 max-sm:-left-1 top-1/2 transform -translate-y-1/2 bg-gray-700 text-black p-2 rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:bg-gray-600 transition duration-200 ${
          !canGoLeft ? "opacity-50 cursor-not-allowed" : ""
        } mx-2 flex items-center justify-center`}
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Right Button */}
      <button
        onClick={goToNext}
        disabled={!canGoRight}
        className={`absolute right-4 max-sm:p-2 max-sm:-right-1 py-6 top-1/2 transform -translate-y-1/2 bg-gray-700 text-black p-2 rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:bg-gray-600 transition duration-200 ${
          !canGoRight ? "opacity-50 cursor-not-allowed" : ""
        } mx-2 flex items-center justify-center`}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;
