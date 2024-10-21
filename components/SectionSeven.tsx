import React from "react";

import MerchandiseScroller from "./helpers/MerchandiseScroller";

const SectionSeven = () => {
  return (
    <div className="relative pt-72  max-sm:p-2 w-full max-sm:pt-28">
      {/* Tilted Background */}
      <div className="absolute top-1/2 left-1/2 w-[200vw] h-[125vh] max-sm:h-[50vh] bg-yellow-400 -rotate-12 transform -translate-x-1/2 translate-y-[50%] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 w-[200vw] h-[125vh] max-sm:h-[50vh] bg-yellow-400 rotate-12 transform -translate-x-1/2 translate-y-[84%] max-sm:translate-y-[68%] -z-10"></div>
      {/* Content on top */}

      <div className="h-full w-full  flex flex-col  items-center  ">
        <div className="text-[22vh] font-bold  bg-amber-500 max-sm:text-[7vh]  inline-block text-transparent bg-clip-text font-cheese leading-tight py-28 max-sm:py-10">
          MERCHANDISE
        </div>

        <MerchandiseScroller />
      </div>
    </div>
  );
};

export default SectionSeven;
