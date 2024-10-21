import React from "react";

import GameCarousel from "./helpers/GameCarousel";

const SectionEight = () => {
  return (
    <div className="relative   w-full">
      <div className="h-full w-full  flex flex-col  items-center bg-center-gradient pt-36 ">
        <div className="text-[22vh] font-bold   text-white font-cheese leading-tight ">
          GAMES
        </div>
        <div className=" font-extrabold text-[3vw]  leading-tight text-gray-800 font-mont flex justify-center text-center pb-36">
          Stay tuned for upcoming games !
        </div>
        <GameCarousel />
      </div>
    </div>
  );
};

export default SectionEight;
