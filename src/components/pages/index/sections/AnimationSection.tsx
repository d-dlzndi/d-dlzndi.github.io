"use client";
import Img from "@/components/common/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import { WorksSection } from "../sections/WorksSection";
import { TagOl } from "../comp/TagOl";
import Link from "next/link";
import { Icons } from "@/components/common/Icons/Icons";
import { AnimationData } from "./SectionDatas";
import useCustomRouter from "@/hooks/useCustomRouter";
import { useState } from "react";
import styles from "./animSection.module.css";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

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
      <div className="flex flex-col items-center gap-20">
        {allPosts
          .filter((p) => p.category == "Animation")
          .slice(0, 3)
          .sort((a, b) => (a.title == AnimationData.firstPost ? -1 : 0))
          .map((post) => (
            <div
              key={post.title}
              //@ts-ignore
              style={{ "--post-color": post.color }}
              className=" group w-full max-w-screen-xl relative"
            >
              <div className="w-full aspect-w-16 aspect-h-9 relative">
                <SlideShowImg imglist={post.imageList} video={post.video} />
              </div>
              <div
                onClick={(e) => {
                  push(post.url || "/");
                }}
                className={
                  "group cursor-pointer flex flex-col gap-3 pt-4 border-t-4 border-[var(--post-color)] bg-base-content "
                }
              >
                <h1 className="text-2xl font-extrabold">{post.title}</h1>
                {post.tag && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <TagOl
                      data={post.tag}
                      parentClassName="flex flex-row flex-wrap gap-2"
                      childColorClassName=" fill-[var(--post-color)] hover:fill-accent hover:bg-accent"
                    />
                  </div>
                )}
                {post.description && (
                  <div
                    className=" opacity-50"
                    dangerouslySetInnerHTML={{
                      __html: post.description?.html || "",
                    }}
                  />
                )}
                <Link
                  href={post.url || "/"}
                  className={"block font-extrabold text-[var(--post-color)]"}
                >
                  MORE
                  <Icons.arrowRight
                    width={20}
                    height={20}
                    className=" align-sub stroke-current hidden group-hover:inline-block"
                  />
                </Link>
              </div>
            </div>
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
  const [select, setSelect] = useState({ before: imglist.length - 1, now: 0 });
  const setNow = (now: number) => {
    setSelect({
      before: select.now,
      now: Math.max(Math.min(now, imglist.length - 1), 0),
    });
  };
  const setNext = () => {
    setNow(select.now + 1 >= imglist.length - 1 ? 0 : select.now + 1);
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
          className={`${getCommonClass(idx)} bg-[var(--post-color)]`}
        >
          {idx == 0 && (
            <>
              <div
                className={`hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none`}
              >
                <ReactPlayer
                  url={video}
                  width={"100%"}
                  height={"100%"}
                  playing={videoPlaying}
                  loop
                  muted
                  config={{
                    youtube: {
                      playerVars: {
                        autoplay: 0,
                        controls: 0,
                        showinfo: 0,
                        rel: 0,
                        fs: 0,
                        color: "white",
                        modestbranding: 1,
                      },
                    },
                    vimeo: {
                      // https://github.com/CookPete/react-player
                    },
                  }}
                />
              </div>
              <p
                className={`absolute hidden lg:block z-[1] top-5 right-5  bg-[var(--post-color)] pt-1 px-5 rounded-2xl w-auto h-auto text-center ${
                  videoPlaying ? "opacity-0" : "opacity-100"
                } transition-all`}
              >
                <span className={`animate-pulse`}>
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
            className={` absolute top-0 left-0 w-full h-full transition-opacity object-cover pointer-events-none ${
              videoPlaying ? "lg:opacity-0" : "opacity-100"
            }`}
          />
        </motion.div>
      ))}
      <ol className="absolute left-full top-0 flex flex-col px-5 gap-2">
        {imglist.map((_, idx) => (
          <li
            key={idx}
            onClick={() => setNow(idx)}
            className={`cursor-pointer transition-all ${
              idx == select.now ? "text-[var(--post-color)]" : "opacity-30"
            }`}
          >
            {String(idx).padStart(2, "0")}
          </li>
        ))}
      </ol>
    </>
  );
}
