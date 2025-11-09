"use client";
import Img from "@/components/common/design/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import { WorksSection } from "../sections/WorksSection";
import { TagOl } from "../comp/TagOl";
import Link from "next/link";
import { Icons } from "@/components/common/Icons/Icons";
import { AnimationData } from "../../../../libs/SectionDatas";
import useCustomRouter from "@/hooks/useCustomRouter";
import { useEffect, useState } from "react";
import styles from "./animSection.module.css";
import { motion } from "framer-motion";
import CustomReactPlayer from "@/components/common/design/CustomReactPlayer";
import { WorkPost } from "contentlayer/generated";

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
      <div className={`flex flex-col items-center gap-24 ${styles.all}`}>
        {allPosts
          .filter((p) =>
            (AnimationData.category as string[]).includes(p.category)
          )
          .slice(0, 3)
          .sort((a, _) => (a.title == AnimationData.firstPost ? -1 : 0))
          .map((post) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0.1, translateY: 50 }}
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
                <SlideShowImg post={post} />
              </div>
              <div
                onClick={(e) => {
                  push(post.url || "/");
                }}
                className={`group cursor-pointer flex flex-col gap-4 pt-4 border-t border-[var(--post-color)] relative bg-base-content xl:pt-0 ${styles.textbox}`}
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
                      parentClassName="flex flex-row flex-wrap gap-2 text-sm lg:text-xs 2xl:text-sm"
                      childColorClassName="fill-base-300 hover:fill-secondary hover:bg-secondary hover:text-base-content"
                    />
                  </div>
                )}
                <div
                  className={`absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity`}
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

export function SlideShowImg({ post }: { post: WorkPost }) {
  const imglist = post.imageList;
  const video = post.video;
  const { getImgBase64 } = useWorkPosts();

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
    const state = getIdxState(idx);
    return `absolute top-0 left-0 w-full h-full transition-opacity ${
      state == "now" && "z-[2] opacity-100"
    } ${state == "before" && "z-[1]"} ${state == "default" && "opacity-0"}`;
  };
  const getIdxState = (idx: number): "now" | "before" | "default" => {
    if (idx == select.now) return "now";
    else if (idx == select.before) return "before";
    return "default";
  };

  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const isVideo = (idx: number) => {
    return idx == 0;
  };

  useEffect(() => {
    if (isVideo(select.now) == false) {
      setVideoPlaying(false);
      setVideoMuted(true);
    }
  }, [select]);

  return (
    <>
      {/* @ts-ignore */}
      {imglist.map((img, idx) => (
        <motion.div
          key={img.src}
          onHoverStart={() => {
            if (isVideo(idx)) setVideoPlaying(true);
          }}
          onHoverEnd={() => {
            if (isVideo(idx)) setVideoPlaying(false);
          }}
          onClick={() => {
            if (isVideo(idx)) setVideoPlaying((p) => !p);
          }}
          className={`${getCommonClass(
            idx
          )} bg-black select-none overflow-hidden group`}
        >
          {isVideo(idx) && (
            <>
              <div
                className={`hidden xl:block absolute top-0 left-0 w-full h-full  `}
              >
                <div className={`w-full h-full pointer-events-none`}>
                  <CustomReactPlayer
                    video={video}
                    videoPlaying={videoPlaying}
                    muted={videoMuted}
                  />
                </div>
              </div>
              <p
                className={`absolute hidden xl:block z-[2] top-5 right-5 w-auto h-auto text-center ${styles.hoverMe}`}
                onClick={(e) => {
                  if (isVideo(idx)) {
                    e.stopPropagation();
                    setVideoMuted((p) => !p);
                  }
                }}
              >
                <span
                  className={`bg-[var(--post-color)] block p-3 rounded-2xl pointer-events-auto cursor-pointer ${
                    !videoPlaying ? "opacity-0" : "opacity-50 hover:opacity-100"
                  } transition-all`}
                >
                  {videoMuted ? (
                    <Icons.speakerX
                      width={24}
                      height={24}
                      strokeWidth={0.8}
                      className={`stroke-base-100 `}
                    />
                  ) : (
                    <Icons.speakerWave
                      width={24}
                      height={24}
                      strokeWidth={0.8}
                      className={`stroke-base-100 `}
                    />
                  )}
                </span>
              </p>
              <p
                className={`absolute hidden xl:block z-[1] top-5 right-5 w-auto h-auto  ${styles.hoverMe}`}
              >
                <span
                  className={`pt-1 px-5 rounded-2xl block bg-[var(--post-color)] transition-all ${
                    videoPlaying ? "opacity-0" : "animate-pulse"
                  }`}
                >
                  <span className="group-hover:inline-block hidden">CLICK</span>
                  <span className="group-hover:hidden inline-block">
                    HOVER
                  </span>{" "}
                  ME!
                  <Icons.cursorRipple
                    width={30}
                    height={30}
                    strokeWidth={0.8}
                    className={`stroke-base-100 inline-block align-[-.7em] ml-1 -mr-1 `}
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
            base64={getImgBase64(post, img.src)}
            className={` absolute top-0 left-0 w-full h-full transition-all object-cover pointer-events-none ${
              isVideo(idx) ? "group-hover:opacity-0" : "opacity-100"
            } ${getIdxState(idx) == "now" ? "scale-100" : "scale-105"}`}
          />
        </motion.div>
      ))}
      <div
        className={`absolute top-0 left-0 w-full h-full z-20 pointer-events-none mix-blend-hard-light xl:mix-blend-normal`}
      >
        <div
          className={`join join-horizontal xl:join-vertical rounded-none absolute bottom-0 right-0 pointer-events-auto ${styles.btnbox}`}
        >
          <button
            onClick={() => setPrev()}
            className="btn btn-ghost border-[var(--post-color)] text-[var(--post-color)] hover:bg-[var(--post-color)] hover:text-base-100 join-item "
          >
            <Icons.arrowUp 
              width={30} 
              height={30} 
              className="stroke-current -rotate-90 xl:rotate-0 " 
            />
          </button>
          <button
            onClick={() => setNext()}
            className="btn btn-ghost border-[var(--post-color)] text-[var(--post-color)] hover:bg-[var(--post-color)] hover:text-base-100 join-item "
          >
            <Icons.arrowDown
              width={30}
              height={30}
              className="stroke-current -rotate-90 xl:rotate-0 "
            />
          </button>
        </div>
        <ol
          className={`pointer-events-auto leading-none flex flex-row xl:flex-col absolute w-fit right-1 xl:right-0 z-20 xl:left-full top-1 xl:top-0 gap-1 xl:px-5 xl:gap-1 ${styles.slidenav}`}
        >
          {/* @ts-ignore */}
          {imglist.map((_, idx) => (
            <li
              key={idx}
              onClick={() => setNow(idx)}
              className={`w-3 h-3 xl:h-2 tooltip inline-block transition-all border border-neutral ${
                idx == select.now
                  ? " cursor-default bg-neutral xl:tooltip-open"
                  : " cursor-pointer"
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
