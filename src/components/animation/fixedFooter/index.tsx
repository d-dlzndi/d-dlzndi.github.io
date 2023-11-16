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
          backgroundColor: "red",
        }}
      />
      <motion.div
        className=" w-screen fixed bottom-0 left-0 right-0 overflow-hidden"
        style={{
          height: totalHeight,
          maxHeight: height,
          backgroundColor: "green",
        }} // test color
      >
        <div
          className=" absolute w-full h-full bottom-0 left-0 right-0"
          style={{ minHeight: height }}
        >
          {children}
        </div>
      </motion.div>
    </>
  );
}
