"use client";

import { AnimatePresence, motion } from "framer-motion";

export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={className}
      >
        {children}
      </motion.div>
      <AnimatePresence mode="wait">
        {/*
          <motion.div
            className="slide-in fixed top-0 left-0 w-screen h-screen z-50 bg-black origin-bottom"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        }
        {
          <motion.div
            className="slide-out fixed top-0 left-0 w-screen h-screen z-50 bg-black origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        */}
      </AnimatePresence>
    </>
  );
};
