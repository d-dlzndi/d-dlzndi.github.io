"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function SlideShowText({
  textSource = ["안녕하세요 반갑습니다", "룰루랄라", "아주 멋진 날씨예요"],
  className,
  childClassName = "",
  delay = 0,
  charShowDelay,
}: {
  textSource?: string[];
  className: string;
  childClassName?: string;
  delay?: number;
  charShowDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10%",
  });

  const PHRASES = textSource;
  const CHAR_SHOW_DELAY = charShowDelay || 0.1;

  const calculateParentIdx = (parentPhrasesIdx: number): number => {
    return PHRASES.slice(0, parentPhrasesIdx).reduce((result, value) => {
      return result + value.split("").filter((s) => s !== " ").length;
    }, 0);
  };

  const calculateMyIdx = (
    parentPhrasesIdx: number,
    nowMyIdx: number
  ): number => {
    return (
      nowMyIdx -
      PHRASES[parentPhrasesIdx]
        .slice(0, nowMyIdx)
        .split("")
        .filter((t) => t == " ").length
    );
  };

  const animate = {
    initial: { y: "-20%", opacity: 0 },
    open: (index: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: CHAR_SHOW_DELAY * index + delay,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  return (
    <div ref={ref} className={className}>
      {PHRASES.map((phrase, index) => {
        return (
          <div key={index} className={"overflow-visible m-0 " + childClassName}>
            <motion.p className=" whitespace-nowrap">
              {phrase.split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  className={"inline-block"}
                  custom={
                    char == " "
                      ? 0
                      : calculateParentIdx(index) + calculateMyIdx(index, idx)
                  }
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
