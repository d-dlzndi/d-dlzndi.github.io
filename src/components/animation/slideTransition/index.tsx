"use client";

import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

const ease = [0.85, 0, 0.15, 1];

const anim: Variants = {
  initial: {
    scaleX: 1,
  },
  open: (delay: number) => ({
    scaleX: 0,
    transformOrigin: "left center",
    transition: { duration: 0.5, delay: 0, ease: ease },
  }),
  closed: (delay: number) => ({
    scaleX: 1,
    transformOrigin: "right center",
    backgroundColor: "orange",
    transition: { duration: 1, delay: 0, ease: ease },
  }),
};

export default function SlideTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [changed, setChanged] = useState(true);
  const pathname = usePathname();
  const COLUMN_COUNT = 20;

  useEffect(() => {
    setChanged((change) => {
      console.log(!change, pathname);
      return !change;
    });
    return () => {};
  }, [pathname]);

  return (
    <>
      {children}
      <div className={styles.bg}>
        <AnimatePresence>
          {changed &&
            [...Array(COLUMN_COUNT)].map((_, i) => {
              return (
                <motion.div
                  key={`START_${i}`}
                  variants={anim}
                  custom={i}
                  initial={"initial"}
                  animate={"open"}
                  exit={"closed"}
                  className={styles.column + " bg-base-100"}
                ></motion.div>
              );
            })}
        </AnimatePresence>
      </div>
    </>
  );
}
