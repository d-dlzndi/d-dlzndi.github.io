"use client";

import SvgCurveLoader from "@/components/animation/svg-curve-loader";
import LandingPage from "@/components/pages/index/LandingPage";

export default function Index(params: any) {
  // return <h2 className="w-full text-5xl text-center p-32">작업 중 . . . .</h2>;

  return (
    <SvgCurveLoader>
      <LandingPage />
    </SvgCurveLoader>
  );
}
