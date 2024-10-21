import React from "react";

import MerchandiseScroller from "./helpers/MerchandiseScroller";

const SectionSeven = () => {
  return (
    <div className="relative pt-72   w-full">
      {/* Tilted Background */}
      <div className="absolute top-1/2 left-1/2 w-[200vw] h-[125vh] bg-yellow-400 -rotate-12 transform -translate-x-1/2 translate-y-[50%] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 w-[200vw] h-[125vh] bg-yellow-400 rotate-12 transform -translate-x-1/2 translate-y-[84%] -z-10"></div>
      {/* Content on top */}

      <div className="h-full w-full  flex flex-col  items-center ">
        <div className="text-[22vh] font-bold  bg-amber-500   inline-block text-transparent bg-clip-text font-cheese leading-tight py-28">
          MERCHANDISE
        </div>

        <MerchandiseScroller />
      </div>
    </div>
  );
};

export default SectionSeven;
