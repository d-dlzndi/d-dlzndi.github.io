"use client";
import Img from "@/components/common/design/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import { Icons } from "@/components/common/Icons/Icons";
import { motion } from "framer-motion";
import React, { useMemo, useRef, useState } from "react";
import { WorksSection } from "./WorksSection";
import Link from "next/link";
import { default as SeedRandom } from "seedrandom";
import { DesignData } from "../../../../libs/SectionDatas";

export function DesignSection() {
  return (
    <WorksSection
      title={DesignData.title}
      Title_svg={DesignData.titleSvg}
      description={DesignData.description}
      categories={DesignData.category}
    >
      <DesignInner />
    </WorksSection>
  );
}

function DesignInner() {
  const initialLeft = 0;
  const [clickCount, setClickCount] = useState(0);
  const gridRef = useRef(null);

  const variants = {
    animate: () => {
      //@ts-ignore
      const target: any = gridRef?.current;
      let next = clickCount * target.offsetWidth * -0.7;

      if (target.scrollWidth + next < 0) {
        // - target.offsetWidth * 0.5
        next = initialLeft;
        setClickCount(0);
      }
      return {
        left: next,
      };
    },
  };

  return (
    <div className="left-1/2 -translate-x-1/2 w-screen group lg:-skew-x-12 lg:-rotate-12 relative xl:bottom-20">
      <button
        className="flex z-[5] absolute top-[90%] right-5 lg:right-20 2xl:right-44 w-16 h-16 lg:w-28 lg:h-28 rounded-full place-items-center hover:scale-95 active:scale-90 stroke-secondary-content bg-secondary hover:bg-transparent transition-all hover:stroke-secondary border border-secondary"
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
        className="px-32 sm:px-56 md:px-64 lg:px-48 grid grid-rows-2 grid-flow-col-dense gap-4 pointer-events-none relative max-w-none"
      >
        <MemoizedDesignSectionImgBox />
      </motion.div>
    </div>
  );
}

const DesignSectionImgBox = () => {
  const { allPosts, getImgBase64, getImgSize } = useWorkPosts();
  const shuffleImgs = useMemo<any[]>(() => {
    return allPosts.reduce((list, post) => {
      if ((DesignData.category as string[]).includes(post.category)) {
        const newlist = post.imageList.reduce((lst: any[], imgData: any) => {
          return [
            ...lst,
            {
              ...imgData,
              title: post.title,
              url: post.url || "/",
              color: post.color || "oklch(var(--p))",
              base64: getImgBase64(post, imgData.src),
              size: getImgSize(post, imgData.src),
            },
          ];
        }, [] as any[]);
        return [...list, ...newlist];
      }
      return list;
    }, [] as any[]);
  }, [allPosts]);

  // const getDateString = () => {
  //   const date = new Date();
  //   return date.toLocaleTimeString()
  // }

  return (
    <>
      {shuffleImgs
        .sort((a, b) => {
          return SeedRandom(a.src + b.alt)() - 0.5;
        })
        .map((img) => (
          <div
            key={img.src}
            className={
              "inline-block max-w-[50vw] w-80 aspect-w-16 aspect-h-9 relative even:ml-[-50%] shadow-2xl hover:scale-105 " +
              "odd:last:relative odd:last:top-[calc(100%+1rem)] odd:last:right-[50%] shadow-md shadow-black"
            }
            style={{
              //@ts-ignore
              "--post-color": img.color,
              transitionDuration: ".8s",
            }}
          >
            <Img
              src={img.src}
              alt={img.alt}
              base64={img.base64}
              width={70}
              height={40}
              priority={true}
              className={`w-full h-full object-cover`}
            />
            <Link
              href={img.url}
              className={`flex place-items-center text-center absolute w-full h-full border border-base-content top-0 left-0 bg-base-content opacity-0 hover:opacity-90 pointer-events-auto transition-opacity`}
            >
              <h6 className="w-full text-lg lg:text-2xl text-[var(--post-color)] break-keep p-10 leading-tight">
                <Icons.arrowUpRight
                  width={20}
                  height={20}
                  className="stroke-[var(--post-color)] w-full"
                />
                {img.title}
              </h6>
            </Link>
          </div>
        ))}
    </>
  );
};

export const MemoizedDesignSectionImgBox = React.memo(DesignSectionImgBox);
