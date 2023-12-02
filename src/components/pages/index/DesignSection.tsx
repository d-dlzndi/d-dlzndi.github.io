"use client";
import Img from "@/components/common/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import { Icons } from "@/components/common/Icons/Icons";
import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { WorksSection } from "./LandingPage";

export function DesignSection() {
  const { allPosts } = useWorkPosts();

  const initialLeft = 0;
  const [clickCount, setClickCount] = useState(0);
  const gridRef = useRef(null);

  const shuffleImgs = useMemo<any[]>(() => {
    return allPosts
      .reduce((list, p) => {
        if (p.category == "Digital-Sculpting" || p.category == "Graphic-Design")
          return [...list, ...p.imageList];
        return list;
      }, [] as any[])
      .sort(() => Math.random() - 0.5);
  }, [allPosts]);

  const variants = {
    animate: () => {
      //@ts-ignore
      const target: any = gridRef?.current;
      let next = clickCount * target.offsetWidth * -0.7;

      if (target.scrollWidth - target.offsetWidth * 0.5 + next < 0) {
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
      <div className=" overflow-y-visible overflow-x-clip left-1/2 -translate-x-1/2 w-screen -mt-10 lg:-mt-40 group lg:-skew-x-12 lg:-rotate-12 relative ">
        <button
          className="flex z-[5] absolute top-[90%] right-5 lg:right-20 2xl:right-1/4 w-16 h-16 lg:w-28 lg:h-28 rounded-full place-items-center hover:scale-95 active:scale-90 hover:stroke-secondary-content hover:bg-secondary transition-all stroke-secondary border border-secondary"
          onClick={() => setClickCount(clickCount + 1)}
        >
          <Icons.chevronDoubleRight
            width={50}
            height={50}
            className=" w-full h-12"
          />
          <span className="absolute bottom-0 hidden lg:block right-32 text-3xl font-thin text-secondary">
            SLIDE
          </span>
        </button>
        <motion.div
          ref={gridRef}
          whileInView={"animate"}
          variants={variants}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0, 0.55, 0.45, 1] }}
          className="pl-44 pr-40 lg:px-48 grid grid-rows-2 grid-flow-col-dense gap-4 shadow-2xl shadow-black pointer-events-none relative max-w-none"
        >
          {shuffleImgs.map((img, idx) => (
            <div
              key={img.src + " " + idx}
              className={
                "inline-block max-w-[50vw] w-[320px] aspect-w-16 aspect-h-9 relative even:ml-[-50%] shadow-2xl group-hover:scale-105 " +
                "odd:last:relative odd:last:top-[calc(100%+1rem)] odd:last:right-[50%]"
              }
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
    </WorksSection>
  );
}
