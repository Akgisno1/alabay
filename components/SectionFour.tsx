import React from "react";
import ImageWithReflection from "./helpers/ImageWithReflection";

const SectionFour = () => {
  return (
    <div className="relative   px-10 max-sm:p-2">
      {/* Tilted Background */}
      <div className="absolute top-1/2 left-1/2 w-[200vw] h-[110vh] max-sm:h-[40vh] bg-yellow-400 rotate-12 transform -translate-x-1/2 -translate-y-[100%] max-sm:-translate-y-[150%] -z-10"></div>

      {/* Content on top */}
      <div className="text-[23vh] max-sm:text-[10vh] font-bold pt-40 pl-10 max-sm:p-2 max-sm:pt-24 text-white font-cheese leading-tight text-left">
        ROAD MAP
      </div>
      <div className="relative z-10 flex flex-row items-center justify-center  w-full max-sm:flex-col  ">
        <div className=" w-1/2 max-sm:w-full  flex flex-col items-end max-sm:items-start gap-6 px-16 max-sm:p-2">
          <div className=" font-bold text-[2.5vw] max-sm:text-[2vh] text-left leading-tight text-gray-800 font-khumb mt-28 ">
            Our journey is just beginning. Explore our roadmap to see the
            exciting milestones and future plans we have in store.
          </div>
          <div className=" font-bold text-[2.5vw] max-sm:text-[2.5vh] text-left leading-tight text-yellow-400 font-khumb">
            Join us as we grow and achieve new heights.
          </div>
        </div>
        <div className=" w-1/2 max-sm:w-full  flex  justify-center ">
          <ImageWithReflection src="/3.png" />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
