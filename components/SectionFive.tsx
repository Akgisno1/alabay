import React from "react";

const SectionFive = () => {
  return (
    <div className="relative w-full mt-20 px-16">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-white opacity-80 z-10"></div>
      <div className=" flex flex-col w-full  font-mont gap-3 font-black text-white">
        {/* Gradient Overlay */}

        <div className="flex flex-row w-full gap-3 relative z-20">
          {/* Card 1 */}
          <div
            className="relative flex flex-col items-center bg-amber-400 flex-grow p-4 rounded-l-3xl overflow-hidden"
            style={{
              background: "linear-gradient(to bottom, #fbbf24, white)", // Gradient from amber to white
            }}
          >
            <div className="text-[2vw] text-center">Community Building</div>
            <div className="text-[1.5vw]">and Initial Launch</div>

            <img
              src="/41.png"
              alt="Card 1"
              className="object-contain flex-grow"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </div>

          {/* Card 2 */}
          <div
            className="relative flex flex-col items-center bg-sky-500 flex-grow p-4 overflow-hidden"
            style={{
              background: "linear-gradient(to bottom, #38bdf8, white)", // Gradient from sky blue to white
            }}
          >
            <div className="text-[2vw] text-center">Merchandise</div>
            <div className="text-[1.5vw]">Store Launch</div>

            <img
              src="/42.png"
              alt="Card 2"
              className="object-contain flex-grow"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </div>

          {/* Card 3 */}
          <div
            className="relative flex flex-col items-center bg-fuchsia-500 flex-grow p-4 overflow-hidden"
            style={{
              background: "linear-gradient(to bottom, #d946ef, white)", // Gradient from fuchsia to white
            }}
          >
            <div className="text-[2vw] text-center">Community Events</div>
            <div className="text-[1.5vw]">and Contests</div>

            <img
              src="/43.png"
              alt="Card 3"
              className="object-contain flex-grow"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </div>

          {/* Card 4 */}
          <div
            className="relative flex flex-col items-center bg-red-950 flex-grow p-4 rounded-r-3xl overflow-hidden"
            style={{
              background: "linear-gradient(to bottom, #7f1d1d, white)", // Gradient from red to white
            }}
          >
            <div className="text-[2vw] text-center">Expansion and New</div>
            <div className="text-[1.5vw]">Features</div>

            <img
              src="/44.png"
              alt="Card 4"
              className="object-contain flex-grow"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
