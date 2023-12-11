"use client";

import { motion, Variants } from "framer-motion";

/**
 * 미완성...
 * @param param0
 * @returns
 */
export default function SvgCurvePointer({
  screenX,
  screenY,
  active = true,
  color = "var(--p)",
}: {
  screenX?: number;
  screenY?: number;
  active?: boolean;
  color?: string;
}) {
  if (!screenX) screenX = window.screen.width / 2;
  if (!screenY) screenY = window.screen.height / 2;

  const variants: Variants = {
    ready: {
      scale: 0,
    },
    start: {
      scale: 1,
    },
  };

  return (
    <>
      <motion.div
        variants={variants}
        initial={"ready"}
        animate={active ? "start" : "ready"}
        exit={"ready"}
        transition={{ duration: 3 }}
        className={`fixed z-50 rounded-full origin-center w-[200vw] h-[200vh]`}
        style={{ backgroundColor: color }}
      ></motion.div>
    </>
  );
}
