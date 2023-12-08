import SvgCurveLoader from "@/components/animation/svg-curve-loader";
import WorkListSimple from "@/components/pages/work/WorkListSimple";

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
