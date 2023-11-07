// @ts-nocheck
"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Script from "next/script";
import * as Pageable from "pageable";

import { useRouter } from "next/navigation";
import useHash from "@/hooks/useHash";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function FullPageLayout({
  pages,
}: {
  pages: React.ReactNode[];
}) {
  const hash = useHash();
  const router = useRouter();

  useEffect(() => {
    console.log("Hash:", hash);
    router.replace("/");
  }, [hash]);

  const [first, setFirst] = useState(false);

  useEffect(() => {
    if (first) return;
    setFirst(true);
    console.log("냐하하");
    new Pageable("#pageable_container", {
      childSelector: "[data-anchor]",
      animation: 1000,
      pips: false,
      delay: 0,
      throttle: 5000,
      orientation: "vertical",
      swipeThreshold: 10000,
      easing: (
        currentTime: number,
        startPos: number,
        endPos: number,
        interval: number
      ) => {
        // the easing function used for the scroll animation
        return (
          -endPos * (currentTime /= interval) * (currentTime - 2) + startPos
        );
      },
      freeScroll: true,
      infinite: true,
      events: {
        wheel: true, // enable / disable mousewheel scrolling
        mouse: true, // enable / disable mouse drag scrolling
        touch: true, // enable / disable touch / swipe scrolling
        keydown: true, // enable / disable keyboard navigation
      },
    });
  }, []);

  return (
    <div id="pageable_container">
      {pages.map((page, idx) => (
        <Page id={idx + 1} key={idx}>
          {page}
        </Page>
      ))}
    </div>
  );
}

function Page({ id, children }: { id: any; children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: false });
  const y = useParallax(scrollYProgress, 100);

  return (
    <section
      data-anchor={`pageable_child_${id}`}
      className={
        "pageable_child h-screen flex justify-center items-center relative"
        // perspective: 500px; snap-center
      }
      ref={ref}
    >
      {children}
    </section>
  );
}
