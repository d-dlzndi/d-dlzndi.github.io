"use client";

import styles from "./page.module.css";
import { useInView, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function SlideShowText() {
  const phrases = ["안녕하세요 반갑습니다", "룰루랄라", "아주 멋진 날씨예요"];
  useEffect(() => {
    console.log(
      "******************* socket provider useEffect *******************"
    );
  }, []);

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
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const animate = {
    initial: { y: "100%" },
    open: (index: number) => ({
      y: "0%",
      transition: { duration: 1, delay: 0.1 * index },
    }),
  };

  const [hello, sethello] = useState(false);
  useEffect(() => {
    console.log(hello);
    return () => {};
  }, [hello]);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <div className={styles.body} ref={ref}>
      <button onClick={() => sethello(!hello)}>아아아~~</button>
      <input type="checkbox" onChange={() => sethello(!hello)} />
      {pharases.map((phrase, index) => {
        return (
          <div key={index} className={styles.lineMask}>
            <motion.p>
              {phrase.split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  custom={(index + 1) * idx}
                  variants={animate}
                  initial="initial"
                  animate={isInView ? "open" : ""}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
