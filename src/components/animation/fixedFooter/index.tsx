"use client";

import useDimensions from "@/hooks/useDimensions";
import useWindowSize from "@/hooks/useWindowSize";
import { motion, useScroll, useTransform } from "framer-motion";
import { MutableRefObject, useRef } from "react";

export default function FixedFooter({
  children,
  height,
}: {
  children: React.ReactNode;
  height: string;
}) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const { window, body } = useWindowSize();
  const footerDimension = useDimensions(ref);

  const totalHeight = useTransform(() => {
    if (body.height == 0 || window.height == 0) return 0;
    const h = body.height - window.height - footerDimension.height;
    if (scrollY.get() < h) return 0;
    return scrollY.get() - h;
  });

  return (
    <>
      <div
        ref={ref}
        id="fake-footer"
        style={{
          height: height,
          minHeight: height,
        }}
        className="hidden xl:block"
      />
      <motion.div
        className=" w-screen bottom-0 left-0 right-0 xl:fixed xl:overflow-hidden"
        style={{
          height: totalHeight,
        }}
      >
        <div
          className=" xl:absolute w-full h-full bottom-0 left-0 right-0"
          style={{ minHeight: height }}
        >
          {children}
        </div>
      </motion.div>
    </>
  );
}
