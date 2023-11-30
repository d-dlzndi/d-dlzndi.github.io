import SvgCurveLoader from "@/components/animation/svg-curve-loader";
import WorkCategoryPage from "@/components/pages/work/WorkCategoryPage";
import WorkListSimple from "@/components/pages/work/WorkListSimple";
import ScreenWorkList from "@/components/pages/workList/ScreenWorkList";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "WORK",
};

export default function MainWorkPage() {
  return (
    <SvgCurveLoader>
      <WorkListSimple />
    </SvgCurveLoader>
  );
}
