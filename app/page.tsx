import SectionEight from "@/components/SectionEight";
import SectionFive from "@/components/SectionFive";
import SectionFour from "@/components/SectionFour";
import SectionNine from "@/components/SectionNine";
import SectionOne from "@/components/SectionOne";
import SectionSeven from "@/components/SectionSeven";
import SectionSix from "@/components/SectionSix";
import SectionTen from "@/components/SectionTen";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";

import React from "react";

const page = () => {
  return (
    <div className="w-full flex-col flex h-screen overflow-y-auto overflow-x-hidden   items-center">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
    </div>
  );
};

export default page;
