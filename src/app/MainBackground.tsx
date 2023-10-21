"use client";

import { motion } from "framer-motion";

export type backgroundType = "middle" | "top" | "bottom" | "right";

export default function MainBackground({ type }: { type: backgroundType }) {
  const bgPosition = (): string => {
    switch (type) {
      case "middle":
        return "bottom-[-50vh] left-0";
      case "top":
        return "bottom-[-90vh] left-0";
      case "bottom":
        return "bottom-[-10vh] left-0";
      case "right":
        return "bottom-0 left-[10vw]";
    }
    return "";
  };

  return (
    <motion.div
      layoutId="main-bg"
      id="bg"
      className={`fixed ${bgPosition()} left-0 h-screen w-screen -z-10 bg-gray-300`}
    ></motion.div>
  );
}
