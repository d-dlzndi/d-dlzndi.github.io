"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type paramType = {
  className?: string;
  width?: any;
  height?: any;
  count?: number;
  gap?: number;
  color?: string;
  bg_color?: string;
  children?: any;
  onClick?: () => any;
};

export default function CircleButton({
  children,
  className = "fixed top-20 left-20",
  width = "100px",
  height = "100px",
  count = 10,
  gap = 20,
  color = "cyan-900",
  bg_color = "red-500",
  onClick = () => {
    console.log("Tap!");
  },
}: paramType) {
  const array = [...Array(count)];
  const [onHover, setOnHover] = useState(false);
  const [onTap, setOnTap] = useState(false);
  useEffect(() => {
    if (!onHover) setOnTap(false);
  }, [onHover]);

  const variants = (idx: number) => {
    return {
      initial: { bottom: gap * idx * 0, opacity: 0.1 },
      default: { bottom: gap * idx, opacity: 1 - (1 / count) * (idx + 1) },
      hover: { bottom: gap * idx * 0, opacity: 1, scale: 1.2 },
      exit: { bottom: 0, opacity: 0 },
    };
  };
  const transition = { ease: [0, 0.55, 0.45, 1] };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      return {
        pathLength: 1.01,
        opacity: 1,
        transition: {
          ...transition,
          pathLength: { duration: 1.5 },
          opacity: { duration: 0.01 },
        },
      };
    },
  };

  return (
    <div>
      <motion.div
        initial={{ translateY: `-${gap * 3}px`, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        exit={{ translateY: `${gap * 3}px` }}
        className={`${className} rounded-full bg-${color}`}
        transition={transition}
        style={{ width: width, height: height }}
      >
        {array.map((v, idx) => {
          return (
            <motion.span
              key={idx}
              initial={"initial"}
              exit={"exit"}
              animate={onHover || onTap ? "hover" : "default"}
              variants={variants(idx)}
              className={`absolute border-[1px] border-${bg_color} rounded-full w-[inherit] h-[inherit] left-0`}
              transition={transition}
            ></motion.span>
          );
        })}
        <motion.button
          onClick={onClick}
          onHoverStart={() => setOnHover(true)}
          onHoverEnd={() => setOnHover(false)}
          className={`absolute rounded-full w-[inherit] h-[inherit] left-0 top-0 bg-${bg_color}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onTapStart={() => setOnTap(true)}
          onTapCancel={() => setOnTap(false)}
          transition={transition}
        >
          <span className={`inline-block align-middle text-${color}`}>
            {children}
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}

/*
        <motion.svg
          width={width}
          height={height}
          className={"absolute top-0 left-0"}
          animate={
            onHover ? { scale: 1.2 } : onTap ? { scale: 0.9 } : { scale: 1 }
          }
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx={50}
            cy={50}
            r={45}
            stroke="#00ff00"
            className={`stroke-${color}`}
            strokeWidth={2}
            fill={"transparent"}
            animate={onHover ? "visible" : "hidden"}
            variants={draw}
            custom={1}
          />
        </motion.svg> */
