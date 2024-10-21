import React from "react";
import ImageWithReflection from "./helpers/ImageWithReflection";

const SectionOne = () => {
  return (
    <div className="relative h-screen   px-10 max-sm:p-4">
      {/* Tilted Background */}
      <div className="absolute top-1/2 left-1/2 w-[200vw] h-[140vh] bg-yellow-400 rotate-12 transform -translate-x-1/2 -translate-y-[75%] -z-10"></div>

      {/* Content on top */}
      <div className="relative z-10 flex flex-row items-center justify-center h-full w-full max-sm:flex-col-reverse  ">
        <div className="h-full w-1/2 max-sm:w-full  flex pt-20 max-sm:pt-5 justify-center ">
          <ImageWithReflection src="/1.png" />
        </div>
        <div className="h-full w-1/2 max-sm:w-full  flex flex-col items-end max-sm:items-center">
          <div className="font-extrabold text-[12vh] max-sm:text-[6vh] font-mont text-orange-500 leading-tight">
            History of
          </div>
          <div className="text-[25vh] font-bold text-white font-cheese leading-tight max-sm:text-[10vh]">
            ALABAY
          </div>
          <div className=" font-bold text-[2.5vw]  leading-tight max-sm:text-[2vh] max-sm:pt-5 text-gray-800 font-khumb">
            The Central Asian Shepherd Dog, also known as Alabay, has been a
            guardian of livestock and property for centuries. Originating from
            Central Asia, these dogs are renowned for their courage, strength,
            and loyalty.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
