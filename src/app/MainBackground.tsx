"use client";

import { motion } from "framer-motion";

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
      scaleY: 0.9,
      originX: 0.5,
      originY: 1,
    },
    bottom: {
      scaleX: 1,
      scaleY: 0.1,
      originX: 0.5,
      originY: 1,
    },
    right: {
      scaleX: 0.2,
      scaleY: 1,
      originX: 0,
      originY: 1,
    },
  };

  return (
    <motion.div
      layoutId="main-bg"
      id="bg"
      initial={varients.initial}
      animate={type}
      variants={varients}
      transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
      className={`fixed top-0 left-0 h-screen w-screen -z-10 bg-[var(--gray)] origin-bottom`}
    ></motion.div>
  );
}
