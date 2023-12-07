"use client";
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
  const MAX = max;

  const mouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const bounds = e.target.getBoundingClientRect();
    const x = clientX - (bounds.left + bounds.width / 2);
    const y = clientY - (bounds.top + bounds.height / 2);
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
        width: "fit-content",
        height: "fit-content",
        transformOrigin: "top left",
      }}
      className={"" + className}
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", damping: 10, stiffness: 180 }}
    >
      {children}
    </motion.div>
  );
}
