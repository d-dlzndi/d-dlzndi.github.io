"use client";

import useDimensions from "@/hooks/useDimensions";
import useWindowSize from "@/hooks/useWindowSize";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FixedFooter({
  children,
  height,
}: {
  children: React.ReactNode;
  height: string;
}) {
  const { scrollY } = useScroll();
  const { window, body } = useWindowSize();
  const footerRef = useRef(null);
  const footerDimension = useDimensions(footerRef);

  const totalHeight = useTransform(() => {
    const h = body.height - window.height - footerDimension.height;
    if (scrollY.get() < h) return 0;
    return scrollY.get() - h;
  });

  return (
    <>
      <div id="fake-footer" style={{ height: height }} />
      <motion.div
        className=" w-screen fixed bottom-0 left-0 right-0 overflow-hidden"
        style={{ height: totalHeight, backgroundColor: "green" }} // test color
      >
        <div
          ref={footerRef}
          className=" absolute w-full h-full bottom-0 left-0 right-0"
          style={{ minHeight: height }}
        >
          {children}
        </div>
      </motion.div>
    </>
  );
}
