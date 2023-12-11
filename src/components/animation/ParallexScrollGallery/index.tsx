"use client";

import Img from "@/components/common/design/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import { useMemo, useRef } from "react";
import seedrandom from "seedrandom";
import { useTransform, useScroll, motion, useSpring } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";

export default function ParallexScrollGallery() {
  // const smooth = useSmoothScroll();

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const springScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const {
    window: { height },
  } = useWindowSize();
  const y1 = useTransform(scrollYProgress, [0.5, 1], [0, height * 0.5]);
  const y2 = useTransform(scrollYProgress, [0.5, 1], [0, -height * 0.5]);
  const y3 = useTransform(scrollYProgress, [0.5, 1], [0, height * 0.7]);

  const { allPosts } = useWorkPosts();
  const allImages = useMemo(() => {
    return allPosts
      .reduce((list, post) => {
        return [...list, ...post.imageList];
      }, [] as any[])
      .sort((a, b) => seedrandom(a.src + b.alt)() - 0.5)
      .slice(0, 30);
  }, [allPosts]);
  const getImgStartCount = (columnIdx: number, maxColumnCount: number) => {
    return (allImages.length / maxColumnCount) * columnIdx;
  };
  const getImgEndCount = (columnIdx: number, maxColumnCount: number) => {
    return (allImages.length / maxColumnCount) * (columnIdx + 1);
  };

  return (
    <div className="w-full h-screen bg-base-content text-secondary overflow-hidden">
      <div
        ref={containerRef}
        className="w-full h-full max-h-none flex flex-row gap-4 scale-110"
      >
        {[y1, y2, y3].map((motionY, columnIdx, columns) => (
          <Column
            key={columnIdx}
            images={allImages.slice(
              getImgStartCount(columnIdx, columns.length),
              getImgEndCount(columnIdx, columns.length)
            )}
            y={motionY}
          />
        ))}
      </div>
    </div>
  );
}

const Column = ({ images, y = 0 }: { images: any[]; y?: any }) => {
  const { getImgSizeBySrc } = useWorkPosts();
  return (
    <motion.div
      style={{ y }}
      className="flex-1 h-auto max-h-none flex flex-col gap-2"
    >
      {images.map((img, idx) => (
        <div key={idx} className=" overflow-hidden rounded-lg relative">
          <Img
            src={img.src}
            alt={img.alt}
            width={400}
            height={400}
            className={`h-auto w-full`}
          />
        </div>
      ))}
    </motion.div>
  );
};
