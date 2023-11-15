import React, { StyleHTMLAttributes, useCallback } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";

export type directionType =
  | "random"
  | "topToBottom"
  | "bottomToTop"
  | "leftToRight"
  | "rightToLeft";

/**
 * Shuffles array in place (Fisher-Yates shuffle).
 * @param a items An array containing the items.
 * @returns
 */
export const shuffle = (a: number[]) => {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

const anim = {
  initial: {
    opacity: 0,
  },
  open: (delay: number[]) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.01 * delay[0] },
  }),
  closed: (delay: number[]) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.01 * delay[1] },
  }),
};

export default function PixelBackground({
  menuIsActive,
  boxStyle,
  direction = "topToBottom",
}: {
  menuIsActive: boolean;
  boxStyle?: StyleHTMLAttributes<HTMLDivElement>;
  direction?: directionType;
}) {
  const { window } = useWindowSize();
  const COLUMN_COUNT = 20;

  const getBlocks = (indexOfColumn: number) => {
    if (typeof window == "undefined") return;
    const blockSize = window.width / COLUMN_COUNT;
    const amountOfBlocks = Math.ceil(window.height / blockSize);
    const delays = shuffle([...Array(amountOfBlocks)].map((_, i) => i));
    return delays.map((randomDelay, i) => (
      <motion.div
        key={i}
        variants={anim}
        initial={"initial"}
        animate={menuIsActive ? "open" : "closed"}
        className={styles.block}
        style={{ height: Math.ceil(100 / COLUMN_COUNT) + "vw", ...boxStyle }}
        custom={
          direction == "leftToRight"
            ? [
                indexOfColumn + randomDelay,
                COLUMN_COUNT - indexOfColumn + randomDelay,
              ]
            : direction == "rightToLeft"
            ? [
                COLUMN_COUNT - indexOfColumn + randomDelay,
                indexOfColumn + randomDelay,
              ]
            : direction == "topToBottom"
            ? [i + randomDelay, amountOfBlocks - i + randomDelay]
            : direction == "bottomToTop"
            ? [amountOfBlocks - i + randomDelay, i + randomDelay]
            : [randomDelay, randomDelay]
        }
      ></motion.div>
    ));
  };

  return (
    <div className={styles.pixelBackground}>
      {[...Array(COLUMN_COUNT)].map((_, i) => {
        return (
          <div
            key={i}
            className={styles.column}
            style={{ width: Math.ceil(100 / COLUMN_COUNT) + "vw" }}
          >
            {getBlocks(i)}
          </div>
        );
      })}
    </div>
  );
}
