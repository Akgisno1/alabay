import React from "react";
import ImageWithReflection from "./helpers/ImageWithReflection";

const SectionTen = () => {
  return (
    <div className="relative px-10 pt-24 max-sm:p-2 max-sm:pt-10">
      <div className="text-[23vh]  max-sm:text-[7vh] font-bold pt-40 pl-10 max-sm:p-0 text-amber-400 font-cheese leading-tight text-left">
        SOCIAL MEDIA LINKS
      </div>
      <div className="relative z-10 flex flex-row items-center justify-center w-full  bg-center-gradient max-sm:pt-16">
        <div className="w-2/5  flex flex-col gap-10 px-10 max-sm:p-0">
          {/* Message Box with Top Right Triangle and Removed Rounded Border on Top Right */}
          <div className="relative flex flex-col font-mont font-black text-left shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-bl-3xl rounded-br-3xl rounded-tl-3xl rounded-tr-3xl  px-10 w-[35vw] border-8 border-blue-500 bg-gradient-to-br from-blue-300 to-blue-600 text-white py-16 gap-4 max-sm:p-2">
            {/* Message Triangle Icon (Top Right Corner) */}
            <div
              className="absolute -top-0 right-0 w-0 h-0 border-t-[30px] border-t-transparent border-l-[30px] border-l-blue-500 border-b-[30px] border-b-transparent"
              style={{ transform: "translateX(100%)" }}
            ></div>

            {/* Twitter Link */}
            <div className="text-[2vw] flex flex-row items-center gap-4">
              <div className="flex justify-center items-center bg-zinc-800 rounded-full w-16 h-16 max-sm:w-6 max-sm:h-6 p-2">
                <img
                  src="/twitterlogo.png"
                  alt="twitter"
                  className="object-contain w-full h-full "
                />
              </div>
              Twitter Link
            </div>

            {/* Telegram Link */}
            <div className="text-[2vw] flex flex-row items-center gap-4">
              <div className="flex justify-center items-center bg-zinc-800 rounded-full w-16 h-16 max-sm:w-6 max-sm:h-6 p-2">
                <img
                  src="/Maskgroup.png"
                  alt="telegram"
                  className="object-contain w-full h-full "
                />
              </div>
              Telegram Link
            </div>
          </div>
        </div>

        {/* Reflection Image */}
        <div className="w-3/5  flex justify-center">
          <ImageWithReflection src="/6.png" />
        </div>
      </div>
    </div>
  );
};

export default SectionTen;
