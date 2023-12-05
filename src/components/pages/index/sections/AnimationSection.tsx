"use client";
import Img from "@/components/common/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import { WorksSection } from "../sections/WorksSection";
import { TagOl } from "../comp/TagOl";
import Link from "next/link";
import { Icons } from "@/components/common/Icons/Icons";
import { AnimationData } from "./SectionDatas";
import useCustomRouter from "@/hooks/useCustomRouter";
import { useEffect, useState } from "react";
import styles from "./animSection.module.css";
import { motion } from "framer-motion";
import CustomReactPlayer from "@/components/common/CustomReactPlayer";

export function AnimationSection() {
  const { allPosts } = useWorkPosts();
  const { push } = useCustomRouter();

  return (
    <WorksSection
      title={AnimationData.title}
      description={AnimationData.description}
      Title_svg={AnimationData.titleSvg}
      categories={AnimationData.category}
    >
      <div
        className={`flex flex-col items-center gap-20 ${styles.all} snap-y snap-proximity`}
      >
        {allPosts
          .filter((p) => p.category == "Animation")
          .slice(0, 3)
          .sort((a, _) => (a.title == AnimationData.firstPost ? -1 : 0))
          .map((post) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
              //@ts-ignore
              style={{ "--post-color": post.color }}
              className={` snap-center w-full max-w-screen-xl relative flex flex-col ${styles.box}`}
            >
              <div
                className={`w-full aspect-w-16 aspect-h-9 relative ${styles.imgbox}`}
              >
                <SlideShowImg imglist={post.imageList} video={post.video} />
              </div>
              <div
                onClick={(e) => {
                  push(post.url || "/");
                }}
                className={`group cursor-pointer flex flex-col gap-3 pt-4 border-t-4 border-[var(--post-color)] relative bg-base-content ${styles.textbox}`}
              >
                <h3
                  className={`text-2xl font-extrabold break-keep group-hover:text-[var(--post-color)] transition-colors w-5/6 leading-tight ${styles.title}`}
                >
                  {post.title.replaceAll("〈", "\n〈")}
                </h3>
                {post.description && (
                  <div
                    className=" opacity-50 w-3/4 break-keep"
                    dangerouslySetInnerHTML={{
                      __html: post.description?.html || "",
                    }}
                  />
                )}
                {post.tag && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <TagOl
                      data={post.tag}
                      parentClassName="flex flex-row flex-wrap gap-2 text-sm"
                      childColorClassName=" fill-[var(--post-color)] hover:fill-accent hover:bg-accent"
                    />
                  </div>
                )}
                <div
                  className={`absolute top-0 right-3 opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  <Icons.arrowUpRight
                    width={40}
                    height={40}
                    className="inline-block stroke-[var(--post-color)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </WorksSection>
  );
}

export function SlideShowImg({
  imglist,
  video,
}: {
  imglist: any[];
  video?: string;
}) {
  const [select, setSelect] = useState({ before: imglist.length, now: 0 });
  const setNow = (now: number) => {
    setSelect({
      before: select.now,
      now: Math.max(Math.min(now, imglist.length - 1), 0),
    });
  };
  const setNext = () => {
    setNow(select.now + 1 > imglist.length - 1 ? 0 : select.now + 1);
  };
  const setPrev = () => {
    setNow(select.now - 1 < 0 ? imglist.length - 1 : select.now - 1);
  };
  const getCommonClass = (idx: number) => {
    return `absolute top-0 left-0 w-full h-full transition-opacity ${
      idx == select.now && "z-[2] opacity-100"
    } ${idx == select.before && "z-[1]"} ${
      idx != select.now && idx != select.before && "opacity-0"
    }`;
  };

  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <>
      {imglist.map((img, idx) => (
        <motion.div
          key={img.src}
          onHoverStart={() => {
            if (idx == 0) setVideoPlaying(true);
          }}
          onHoverEnd={() => {
            if (idx == 0) setVideoPlaying(false);
          }}
          onClick={() => {
            if (idx == 0) setVideoPlaying((p) => !p);
          }}
          className={`${getCommonClass(
            idx
          )} bg-[var(--post-color)] select-none `}
        >
          {idx == 0 && (
            <>
              <div
                className={`hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none`}
              >
                <CustomReactPlayer video={video} videoPlaying={videoPlaying} />
              </div>
              <p
                className={`absolute hidden lg:block z-[1] bg-[var(--post-color)] pt-2 px-5 top-5 right-5 rounded-2xl w-auto h-auto text-center ${
                  videoPlaying ? "opacity-0" : "animate-pulse"
                } transition-all ${styles.hoverMe}`}
              >
                <span className={``}>
                  HOVER ME!
                  <Icons.cursorRipple
                    width={40}
                    height={40}
                    strokeWidth={0.8}
                    className={`stroke-base-100 inline-block `}
                  />
                </span>
              </p>
            </>
          )}
          <Img
            src={img.src}
            alt={img.alt}
            width={1280}
            height={720}
            priority={true}
            className={` absolute top-0 left-0 w-full h-full transition-opacity object-cover pointer-events-none ${
              videoPlaying ? "lg:opacity-0" : "opacity-100"
            }`}
          />
        </motion.div>
      ))}
      <div
        className={`absolute top-0 left-0 w-full h-full z-20 pointer-events-none`}
      >
        <div
          className={`join join-vertical rounded-none absolute bottom-0 right-0 pointer-events-auto ${styles.btnbox}`}
        >
          <button
            onClick={() => setPrev()}
            className="btn btn-ghost hover:border-[var(--post-color)] bg-[var(--post-color)] join-item "
          >
            <Icons.arrowUp width={30} height={30} className="stroke-current" />
          </button>
          <button
            onClick={() => setNext()}
            className="btn btn-ghost hover:border-[var(--post-color)] bg-[var(--post-color)] join-item "
          >
            <Icons.arrowDown
              width={30}
              height={30}
              className="stroke-current"
            />
          </button>
        </div>
        <ol
          className={`pointer-events-auto leading-none flex absolute w-fit right-1 xl:right-0 z-20 xl:left-full top-1 xl:top-0 flex-col gap-1 xl:px-5 xl:gap-3 ${styles.slidenav}`}
        >
          {imglist.map((_, idx) => (
            <li
              key={idx}
              onClick={() => setNow(idx)}
              className={`w-3 h-3 tooltip tooltip-left inline-block transition-all hover:opacity-100 border-[var(--post-color)] ${
                idx == select.now
                  ? "bg-[var(--post-color)] cursor-default xl:tooltip-open"
                  : "border opacity-30 cursor-pointer"
              }`}
              data-tip={`${String(idx).padStart(2, "0")} \n${_.alt}`}
            >
              <span className="hidden">{String(idx).padStart(2, "0")}</span>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
