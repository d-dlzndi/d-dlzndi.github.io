"use client";

import { AnimatePresence, motion } from "framer-motion";

export type backgroundType = "middle" | "top" | "bottom" | "right";

export default function MainBackground({ type }: { type: backgroundType }) {
  const varients = {
    initial: {
      scaleX: 2,
      scaleY: 2,
      originX: 0,
      originY: 1,
    },
    middle: {
      scaleX: 1,
      scaleY: 0.4,
      originX: 0.5,
      originY: 1,
    },
    top: {
      scaleX: 1,
      scaleY: 0.8,
      originX: 0.5,
      originY: 1,
    },
    bottom: {
      scaleX: 1,
      scaleY: 0.2,
      originX: 0.5,
      originY: 1,
    },
    right: {
      scaleX: 0.9,
      scaleY: 1,
      originX: 1,
      originY: 1,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        // layoutId="main-bg"
        key={"main_bg_" + type}
        initial={"initial"}
        animate={type}
        exit={"initial"}
        variants={varients}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        className={`fixed top-0 left-[calc((100vw - var(--width))/2)] h-screen w-screen -z-10 bg-[var(--gray)] origin-bottom opacity-50`}
      ></motion.div>
    </AnimatePresence>
  );
}
