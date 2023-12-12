"use client";

import { WorksSection } from "./WorksSection";
import { ThankData } from "@/libs/SectionDatas";

export function ThankSection() {
  return (
    <WorksSection
      title={ThankData.title}
      svg_widthclass={`aspect-w-10 aspect-h-2`}
      landingClassName={`bg-black text-base-100`}
      Title_svg={ThankData.titleSvg}
      categories={ThankData.category}
      description={ThankData.description}
    ></WorksSection>
  );
}
