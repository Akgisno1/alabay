import React from "react";
import ImageWithReflection from "./helpers/ImageWithReflection";

const SectionThree = () => {
  return (
    <div className="relative    p-10 max-sm:p-2">
      {/* Tilted Background */}
      <div className="absolute top-1/2 left-1/2 w-[200vw] h-[100vh] max-sm:h-[40vh]  bg-yellow-400 -rotate-12 transform -translate-x-1/2  -z-10"></div>

      {/* Content on top */}

      <div className="h-full w-full  flex flex-col  items-center max-sm:justify-center ">
        <div className="text-[22vh] font-bold  bg-gradient-to-b max-sm:text-[6vh] from-orange-400  to-yellow-400 inline-block text-transparent bg-clip-text font-cheese leading-tight">
          PROJECT VISION
        </div>
        <div className="h-full w-full  flex flex-col  items-center bg-center-gradient">
          <ImageWithReflection src="/2.png" />

          <div className="mt-20 font-extrabold text-[2.5vw] max-sm:text-[2vh] max-sm:mt-6  leading-tight text-gray-800 font-khumb flex justify-center text-center">
            Our mission is to honor the heritage of the Alabay by creating a
            vibrant, loyal, and powerful community. Just as the Alabay protects
            its flock, we aim to build a pack that stands strong together.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
