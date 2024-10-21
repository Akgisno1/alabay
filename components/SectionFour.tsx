import React from "react";
import ImageWithReflection from "./helpers/ImageWithReflection";

const SectionFour = () => {
  return (
    <div className="relative   px-10">
      {/* Tilted Background */}
      <div className="absolute top-1/2 left-1/2 w-[200vw] h-[110vh] bg-yellow-400 rotate-12 transform -translate-x-1/2 -translate-y-[100%] -z-10"></div>

      {/* Content on top */}
      <div className="text-[23vh] font-bold pt-40 pl-10 text-white font-cheese leading-tight text-left">
        ROAD MAP
      </div>
      <div className="relative z-10 flex flex-row items-center justify-center  w-full max-sm:flex-col  ">
        <div className=" w-1/2 max-sm:w-full  flex flex-col items-end gap-6 px-16">
          <div className=" font-bold text-[2.5vw] text-left leading-tight text-gray-800 font-khumb mt-28 ">
            Our journey is just beginning. Explore our roadmap to see the
            exciting milestones and future plans we have in store.
          </div>
          <div className=" font-bold text-[2.5vw] text-left leading-tight text-yellow-400 font-khumb">
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
