"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { getRelativeCoordinates } from "@/lib/mouseEvent";
import TextCircle from "./TextCircle";

export default function MouseFollowBox({
  children,
  className,
}: {
  children: React.ReactElement;
  className: string;
}) {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
    movement: useMotionValue(0),
  };
  const cfg = {
    damping: 50,
    stiffness: 800,
  };
  const mouseSmooth = {
    x: useSpring(mouse.x, cfg),
    y: useSpring(mouse.y, cfg),
    movement: useSpring(mouse.movement, {
      damping: 50,
      stiffness: 1000,
    }),
  };
  const movementVelocity = useVelocity(mouseSmooth.movement);
  const aniDuration = useTransform(movementVelocity, [0, 3000], [5.0, 5000.0]);

  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const boxRef = useRef<HTMLInputElement>(null);
  const handleMouseMove = (e: any, reset: boolean = false) => {
    const { x, y, movementLength } = getRelativeCoordinates(e, boxRef.current);
    mouse.movement.set(movementLength);
    mouse.x.set(x);
    mouse.y.set(y);
    if (reset) {
      // smooth한 값 초기화
      mouseSmooth.x.jump(x);
      mouseSmooth.y.jump(y);
    }
  };

  const varients = {
    default: {
      scale: 0,
    },
    mouse: {
      scale: 1,
    },
  };

  return (
    <motion.div
      ref={boxRef}
      className={`relative ${className}`}
      style={{ perspective: 600 }}
      onTouchStart={(e) => {
        setIsMouseEnter(true);
        handleMouseMove(e, true);
      }}
      onTouchEnd={(e) => setIsMouseEnter(false)}
      onTouchMove={(e) => handleMouseMove(e)}
      onMouseEnter={(e) => {
        setIsMouseEnter(true);
        handleMouseMove(e, true);
      }}
      onMouseLeave={(e) => setIsMouseEnter(false)}
      onMouseMove={(e) => handleMouseMove(e)}
      onScroll={(e) => {
        setIsMouseEnter(false);
      }}
    >
      {children}
      <motion.div
        className="absolute pointer-events-none cursor-none w-auto h-auto origin-center "
        style={{
          left: mouseSmooth.x,
          top: mouseSmooth.y,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 100,
        }}
        animate={
          isMouseEnter && mouse.x.get() != 0 && mouse.y.get() != 0
            ? "mouse"
            : "default"
        }
        variants={varients}
        transition={{
          type: "spring",
          mass: 0.6,
        }}
      >
        <TextCircle
          width={150}
          className={`backdrop-invert bg-transparent`}
          aniDuration={aniDuration}
        />
      </motion.div>
    </motion.div>
  );
}
