"use client";

import styles from "./page.module.css";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function SlideShowText({ text }: { text?: string[] }) {
  const phrases = text || [
    "안녕하세요 반갑습니다",
    "룰루랄라",
    "아주 멋진 날씨예요",
  ];

  return (
    <div className={styles.main}>
      <MaskText pharases={phrases} />
      <MaskText pharases={phrases} />
      <MaskText pharases={phrases} />
      <MaskText pharases={phrases} />
    </div>
  );
}

function MaskText({ pharases }: { pharases: string[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10%",
  });

  const animate = {
    initial: { y: "-100%", opacity: 0 },
    open: (index: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.1 * index,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  return (
    <div className={styles.body} ref={ref}>
      {pharases.map((phrase, index) => {
        return (
          <div key={index} className={styles.lineMask}>
            <motion.p>
              {phrase.split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  className={styles.lineMaskSpan}
                  custom={index * 4 + idx}
                  variants={animate}
                  initial="initial"
                  animate={isInView ? "open" : ""}
                >
                  {char == " " ? "ㅤ" : char}
                </motion.span>
              ))}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
