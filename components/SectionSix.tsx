import React from "react";
import ImageWithReflection from "./helpers/ImageWithReflection";

const SectionSix = () => {
  return (
    <div className="relative   px-10 pt-24">
      {/* Tilted Background */}
      <div className="absolute top-1/2 left-1/2 w-[200vw] h-[125vh] bg-yellow-400 -rotate-12 transform -translate-x-1/2 -translate-y-[50%] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 w-[200vw] h-[125vh] bg-yellow-400 rotate-12 transform -translate-x-1/2 -translate-y-[16%] -z-10"></div>

      {/* Content on top */}
      <div className="text-[23vh] font-bold pt-40 pl-10 text-white font-cheese leading-tight text-left">
        TOKENOMICS
      </div>
      <div className="relative z-10 flex flex-row items-center justify-center  w-full max-sm:flex-col bg-center-gradient ">
        <div className=" w-1/2 max-sm:w-full  flex flex-col  gap-10 px-10">
          <div className="flex flex-col font-mont  font-black text-left bg-gradient-to-r from-zinc-800 to-zinc-700 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  rounded-3xl py-2 pl-10 w-[35vw]">
            <p className="text-[2.5vw] text-white leading-tight">LIQUIDITY</p>
            <p className="text-[3.5vw] text-amber-300 leading-tight">LOCKED</p>
          </div>
          <div className="flex flex-col font-mont  font-black text-left bg-gradient-to-r from-zinc-800 to-zinc-700 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  rounded-3xl py-2 pl-10 w-[35vw]">
            <p className="text-[2.5vw] text-white leading-tight">CONTRACT</p>
            <p className="text-[3.5vw] text-amber-300 leading-tight">
              RENOUNCED
            </p>
          </div>
          <div className="flex flex-col font-mont  font-black text-left bg-gradient-to-r from-zinc-800 to-zinc-700 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  rounded-3xl py-2 pl-10 w-[35vw]">
            <p className="text-[2.5vw] text-white leading-tight">TAXES</p>
            <p className="text-[3.5vw] text-amber-300 leading-tight">0%</p>
          </div>
        </div>
        <div className=" w-1/2 max-sm:w-full  flex  justify-center ">
          <ImageWithReflection src="/5.png" />
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
