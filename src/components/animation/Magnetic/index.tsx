"use client";
import useDimensions from "@/hooks/useDimensions";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function FramerMagnetic({
  children,
  className,
  max = 20,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dime = useDimensions(ref);
  const MAX = max;

  const mouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = dime;
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({
      x: Math.max(Math.min(x, MAX), -MAX),
      y: Math.max(Math.min(y, MAX), -MAX),
    });
  };

  const mouseLeave = (e: any) => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{
        position: "relative",
        width: "fit-content",
        height: "fit-content",
      }}
      className={className}
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
