"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function SlideShowText({
  textSource,
  className,
  childClassName = "",
  delay = 0,
}: {
  textSource?: string[];
  className: string;
  childClassName?: string;
  delay?: number;
}) {
  const phrases = textSource || [
    "안녕하세요 반갑습니다",
    "룰루랄라",
    "아주 멋진 날씨예요",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10%",
  });

  const animate = {
    initial: { y: "-20%", opacity: 0 },
    open: (index: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.1 * index + delay,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  return (
    <div ref={ref} className={className}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={"overflow-visible m-0 " + childClassName}>
            <motion.p className=" whitespace-nowrap">
              {phrase.split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  className={"inline-block"}
                  custom={index * 4 + idx}
                  variants={animate}
                  initial="initial"
                  animate={isInView ? "open" : ""}
                >
                  {char == " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
