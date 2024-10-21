import React from "react";
import { FaArrowRight } from "react-icons/fa";

const SectionNine = () => {
  return (
    <div className="flex flex-col w-full items-start gap-12 p-20 max-sm:p-4 max-sm:gap-6">
      <div className="flex flex-row font-mont text-4xl gap-4 max-sm:text-2xl max-sm:gap-2">
        <div className="text-amber-400">GAME</div>
        <div className="text-gray-700">PREVIEWS</div>
      </div>
      <div className="flex flex-row justify-between gap-6 items-center max-sm:gap-2">
        <img src="/Games/artifactshome.png" className="w-[30%] rounded-xl" />
        <img src="/Games/Abilitieshome.png" className="w-[30%] rounded-xl" />
        <img src="/Games/alabayguardhome.png" className="w-[30%] rounded-xl" />
        <div className="text-white py-12 px-4 bg-gray-800 max-sm:hidden hover:bg-gray-500 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-xl h-28 flex items-center justify-center">
          <FaArrowRight size={40} />
        </div>
      </div>
    </div>
  );
};

export default SectionNine;
