"use client";

import MainBackground, { backgroundType } from "@/app/MainBackground";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const path = usePathname();
  let bgType: backgroundType = "bottom";
  [
    { p: "/", b: "middle" },
    { p: "/work", b: "right" },
    { p: "/about", b: "top" },
  ].forEach((e) => {
    if (path == e.p || path?.includes(e.p || " ")) {
      bgType = e.b as backgroundType;
      return;
    }
  });

  return (
    <>
      <MainBackground type={bgType} />
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
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
