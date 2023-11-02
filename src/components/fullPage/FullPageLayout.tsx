import "./style.css";

import { Children, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function FullPageLayout({
  pages,
}: {
  pages: React.ReactNode[];
}) {
  /* const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  }); */

  return (
    <>
      {pages.map((page, idx) => (
        <Page id={idx + 1} key={idx}>
          {page}
        </Page>
      ))}
    </>
  );
}

function Page({ id, children }: { id: number; children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: false });
  const y = useParallax(scrollYProgress, 100);

  return (
    <section className="fullpage" ref={ref}>
      {children}
    </section>
  );
}
