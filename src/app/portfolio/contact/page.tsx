import SvgCurveLoader from "@/components/animation/svg-curve-loader";
import ContactPage from "@/components/pages/contact/ContactPage";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CONTACT",
};

export default function about(params: any) {
  return <SvgCurveLoader><ContactPage {...params} /></SvgCurveLoader>;
}
