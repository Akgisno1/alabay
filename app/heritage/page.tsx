"use client";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";

// Custom Scrollbar Component
const CustomScrollbar = ({
  scrollToSection,
  currentSection,
}: {
  scrollToSection: (index: number) => void;
  currentSection: number;
}) => {
  return (
    <div className="fixed right-8 max-sm:right-1 top-1/2 transform -translate-y-1/2 flex flex-col justify-between items-center z-10 h-[50vh]">
      {/* Scroll to Section 1 */}
      <button
        onClick={() => scrollToSection(0)}
        className={`flex justify-center items-center mb-4 w-10 h-14 max-sm:w-5 max-sm:h-7 rounded-md bg-opacity-50 bg-gray-500 transition-all duration-300 hover:bg-green-500 ${
          currentSection === 0 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="w-0 h-0 border-b-[16px] border-b-white border-l-[10px] max-sm:border-b-[8px] max-sm:border-l-[5px] max-sm:border-r-[5px] border-l-transparent border-r-[10px] border-r-transparent"></div>
      </button>
      {/* Scroll path background */}
      <div className="h-full w-6 max-sm:w-3 bg-gray-200 bg-opacity-30 rounded-full relative">
        <div
          className="absolute w-full rounded-full bg-green-500 transition-all duration-500"
          style={{
            height: "50%",
            transform:
              currentSection === 0 ? "translateY(0%)" : "translateY(100%)", // Move thumb based on section
          }}
        ></div>
      </div>
      {/* Scroll to Section 2 */}
      <button
        onClick={() => scrollToSection(1)}
        className={`flex justify-center items-center mt-4 w-10 h-14 max-sm:w-5 max-sm:h-7 rounded-md bg-opacity-50 bg-gray-500 transition-all duration-300 hover:bg-green-500 ${
          currentSection === 1 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="w-0 h-0 border-t-[16px] border-t-white border-l-[10px] max-sm:border-t-[8px] max-sm:border-l-[5px] max-sm:border-r-[5px] border-l-transparent border-r-[10px] border-r-transparent"></div>
      </button>
    </div>
  );
};

// Page Component
const Page = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // Scroll to a specific section
  const scrollToSection = (index: number) => {
    setCurrentSection(index);
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  // Disable manual scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scroll
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scroll when unmounted
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Background image covering the entire page */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Games/heritagepage.png')",
          backgroundSize: "cover",
        }}
      ></div>
      {/* Section 1 */}
      <section
        ref={sectionRefs[0]}
        className="h-screen w-full flex justify-center items-center relative z-10 max-sm:mt-10"
      >
        <div className="w-full h-full flex flex-col items-start text-white p-10 max-sm:p-2">
          <div className="flex flex-col ">
            <div className="font-baron text-[10vh] leading-tight max-sm:text-[10vh]">
              ALABAY HERITAGE
            </div>
            <div className="font-bebas text-[7vh] max-sm:text-[5vh] tracking-widest leading-tight text-emerald-400">
              THE LOST ADVENTURE
            </div>

            <div className="font-mont pt-6 w-1/2 tracking-widest">
              Take on the role of the legendary Alabay on a quest to uncover the
              ancient secrets of its ancestors.   
            </div>

            <div className=" mt-4 w-fit text-sm p-2 font-bold tracking-wide text-zinc-800 flex flex-row items-center justify-center gap-6 rounded-full transition-colors shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] duration-300 bg-emerald-400 pr-10">
              {/* Circular div for play icon */}
              <div className="w-6 h-6 flex items-center justify-center rounded-full px-2 bg-zinc-800">
                <FontAwesomeIcon icon={faPlay} className="text-white text-xs" />
              </div>
              PLAY
            </div>
          </div>
          <div className="flex flex-col w-full items-start gap-2  max-sm:gap-0 max-sm:mt-36 mt-20">
            <div className="flex flex-row font-mont text-xl gap-4">
              <div className="text-emerald-400">GAME</div>
              <div className="text-white">PREVIEWS</div>
            </div>
            <div className="flex flex-row justify-start gap-4 max-sm:overflow-x-scroll overflow-y-hidden items-center  ">
              <img
                src="/Games/Heritage/overview.png"
                className="h-[29vh] max-sm:h-[15vh] rounded-xl border-2 border-white"
              />
              <img
                src="/Games/Heritage/Abilities.png"
                className="h-[29vh] max-sm:h-[15vh] rounded-xl border-2 border-white"
              />
              <img
                src="/Games/Heritage/artifacts.png"
                className="h-[29vh] max-sm:h-[15vh] rounded-xl border-2 border-white"
              />
              <img
                src="/Games/Heritage/locations.png"
                className="h-[29vh]  max-sm:h-[15vh] rounded-xl border-2 border-white"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section
        ref={sectionRefs[1]}
        className="h-screen flex justify-center items-center relative z-10"
      >
        <div className="w-full h-full flex flex-col items-start text-white p-10 max-sm:p-2 max-sm:pr-6">
          <div className="flex flex-col text-md leading-tight">
            <div className="font-baron text-[10vh] max-sm:text-[7vh] leading-tight">
              ALABAY HERITAGE
            </div>
            <div className="font-bebas text-[7vh] max-sm:text-[5vh] tracking-widest leading-tight text-emerald-400">
              THE LOST ADVENTURE
            </div>

            <div className="pt-6 text-emerald-400 text-2xl tracking-widest font-mont ">
              FEATURES
            </div>
            <p className="font-mont pt-6  tracking-widest">
              Explore a variety of landscapes, including{" "}
              <span className="text-emerald-400">mountains</span>,{" "}
              <span className="text-emerald-400">forests</span>,{" "}
              <span className="text-emerald-400">deserts</span> and{" "}
              <span className="text-emerald-400">ancient ruins</span>.
            </p>
            <p className="font-mont pt-6  tracking-widest">
              Use the Alabay&apos;s{" "}
              <span className="text-emerald-400">abilities</span> to solve{" "}
              <span className="text-emerald-400">puzzles</span> that involve
              moving objects, activating mechanisms, or finding hidden clues.
            </p>
            <p className="font-mont pt-6  tracking-widest">
              Discover relics that tell the story of the Alabay&apos;s
              ancestors, each piece contributing to a larger narrative about the
              breed&apos;s role in ancient history. 
            </p>
            <p className="font-mont pt-6  tracking-widest">
              Unlock new skills and abilities for the Alabay, enhancing its
              capacity to explore and solve puzzles.
            </p>
            <p className="font-mont pt-6  tracking-widest">
              Challenge Modes:  <br />  -{" "}
              <span className="text-emerald-400">Time Trials</span>: Compete in
              special timed challenges where the Alabai must navigate through
              complex mazes or complete puzzles within a time limit.  <br />  -
              <span className="text-emerald-400">Exploration Mastery</span>: A
              mode that rewards players for fully exploring every nook and
              cranny of the game&apos;s world, uncovering all secrets
            </p>
            <div className="flex flex-row gap-10 mt-6">
              <div className=" mt-4 w-fit text-sm p-2 font-bold tracking-wide text-zinc-800 flex flex-row items-center justify-center gap-6 rounded-full transition-colors shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] duration-300 bg-white pr-10">
                {/* Circular div for play icon */}
                <div className="w-6 h-6 flex items-center justify-center rounded-full px-2 bg-zinc-800">
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-white text-xs"
                  />
                </div>
                PLAY
              </div>
              <a
                href="/"
                className=" mt-4 w-fit text-sm py-2 px-12 font-bold tracking-wide bg-gray-500 bg-opacity-15 hover:bg-opacity-40 text-white flex flex-row items-center justify-center gap-6 rounded-full transition-colors shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] duration-300 border-2 border-white "
              >
                {/* Circular div for play icon */}
                EXIT
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Custom Scrollbar */}
      <CustomScrollbar
        scrollToSection={scrollToSection}
        currentSection={currentSection}
      />
    </div>
  );
};

export default Page;
