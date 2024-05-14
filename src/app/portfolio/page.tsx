import SvgCurveLoader from "@/components/animation/svg-curve-loader";
import LandingPage from "@/components/pages/index/LandingPage";
import { Suspense } from "react";

export default function Index(params: any) {
  return (
    <SvgCurveLoader>
      <Suspense>
        <LandingPage />
      </Suspense>
    </SvgCurveLoader>
  );
}
