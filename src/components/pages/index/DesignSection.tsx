"use client";
import Img from "@/components/common/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import { Icons } from "@/components/common/Icons/Icons";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { WorksSection } from "./LandingPage";

export function DesignSection() {
  const { allPosts } = useWorkPosts();

  const initialLeft = 0;
  const [clickCount, setClickCount] = useState(0);
  const { window } = useWindowSize();
  const gridRef = useRef(null);

  const variants = {
    animate: () => {
      let next = clickCount * window.width * -0.5;
      //@ts-ignore
      if (gridRef?.current?.scrollWidth - window.width * 0.5 + next < 0) {
        next = initialLeft;
        setClickCount(0);
      }
      return {
        left: next,
      };
    },
  };

  return (
    <WorksSection
      title={`Design`}
      categories={["Digital-Sculpting", "Graphic-Design"]}
    >
      <>
        <div className="group lg:-skew-x-12 lg:-rotate-12 relative h-96 ">
          <button
            className="flex z-[5] absolute top-[90%] right-0 lg:right-20 2xl:right-1/4 w-16 h-16 lg:w-28 lg:h-28 rounded-full place-items-center hover:scale-95 active:scale-90 hover:stroke-secondary-content hover:bg-secondary transition-all stroke-secondary border border-secondary"
            onClick={() => setClickCount(clickCount + 1)}
          >
            <Icons.chevronDoubleRight
              width={50}
              height={50}
              className=" w-full h-12"
            />
          </button>
          <motion.div
            ref={gridRef}
            whileInView={"animate"}
            variants={variants}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0, 0.55, 0.45, 1] }}
            className=" lg:pl-36 grid grid-rows-2 grid-flow-col-dense gap-4 shadow-black pointer-events-none relative max-w-none"
          >
            {allPosts
              .reduce((list, p) => {
                if (
                  p.category == "Digital-Sculpting" ||
                  p.category == "Graphic-Design"
                )
                  return [...list, ...p.imageList];
                return list;
              }, [] as any[])
              .map((img, idx) => (
                <div
                  key={img.src + " " + idx}
                  className="inline-block max-w-[50vw] w-[320px] aspect-w-16 aspect-h-9 relative even:ml-[-50%] shadow-2xl group-hover:scale-105"
                  style={{ transitionDuration: "1s" }}
                >
                  <Img
                    src={img.src}
                    alt={img.alt}
                    width={100}
                    height={100}
                    className={`absolute top-0 left-0 w-full h-full object-cover`}
                  />
                </div>
              ))}
          </motion.div>
        </div>
      </>
    </WorksSection>
  );
}
