"use client";
import Img from "@/components/common/design/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import { Icons } from "@/components/common/Icons/Icons";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { WorksSection } from "./WorksSection";
import Link from "next/link";
import { FXData } from "../../../../libs/SectionDatas";
import CustomReactPlayer from "@/components/common/design/CustomReactPlayer";
import { VideoData, WorkPost } from "contentlayer/generated";
import useCustomRouter from "@/hooks/useCustomRouter";

export function FXSection() {
  return (
    <WorksSection
      title={FXData.title}
      Title_svg={FXData.titleSvg}
      description={FXData.description}
      categories={FXData.category}
    >
      <FXInnerSection />
    </WorksSection>
  );
}

type videoPostData = { video: VideoData; post: WorkPost };

function FXInnerSection() {
  const { allPosts, getImgBase64 } = useWorkPosts();
  const postList = useMemo<WorkPost[]>(
    () =>
      allPosts.filter((p) =>
        (FXData.category as string[]).includes(p.category)
      ),
    [allPosts]
  );
  const allVideoList = useMemo<videoPostData[]>(() => {
    return postList.reduce((list, post) => {
      if (post.videos) {
        return [
          ...list,
          ...post.videos?.reduce((vlist, video) => {
            if (video.uploadIndex == true)
              return [...vlist, { video: video, post: post }];
            return vlist;
          }, [] as videoPostData[]),
        ];
      } else {
        return list;
      }
    }, [] as videoPostData[]);
  }, [postList]);

  return (
    <div className="flex-col xl:flex-row items-stretch justify-end gap-7 md:gap-1 xl:gap-7 grid grid-flow-row grid-cols-1 md:grid-cols-2">
      {allVideoList.slice(0, 6).map((vdata, idx) => (
        <FXPlayer
          post={vdata.post}
          video={vdata.video}
          key={vdata.video._id + "+" + vdata.post._id}
        />
      ))}
    </div>
  );
}

// export const MemoizedFXInnerSection = React.memo(FXInnerSection);

function FXPlayer({ post, video }: { post: WorkPost; video: VideoData }) {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const { push } = useCustomRouter();

  return (
    <motion.div
      style={{
        //@ts-ignore
        "--post-color": post.color,
      }}
      className={`w-full`}
      initial={{ opacity: 0.1, translateY: 0 }} //50
      whileInView={{ opacity: 1, translateY: 0 }}
      // viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.5, 1, 0.89, 1] }}
      onViewportEnter={() => {
        setVideoPlaying(true);
      }}
      onViewportLeave={() => {
        setVideoPlaying(false);
      }}
      onHoverStart={() => {
        // setVideoPlaying(false);
      }}
      onHoverEnd={() => {
        // setVideoPlaying(true);
      }}
      onClick={() => {
        setVideoPlaying((p) => !p);
      }}
    >
      <div className={`w-full relative cursor-pointer group `}>
        <div
          className={`w-full h-full aspect-w-16 aspect-h-9 pointer-events-none overflow-hidden border transition-colors border-base-content `}
          style={{ borderColor: videoPlaying ? "" : "var(--post-color)" }}
        >
          <div
            className={`${
              videoPlaying ? "scale-100" : "scale-105"
            } transition-transform bg-black`}
          >
            <CustomReactPlayer
              video={video.url}
              videoPlaying={videoPlaying}
              muted={true}
            />
          </div>
        </div>
        <div
          className={`absolute top-5 left-0 w-max max-w-[70%] h-max group-hover:opacity-20 transition-opacity group-hover:hover:opacity-100`}
        >
          <Link href={post.url || "/"}>
            <span
              className="px-4 py-1 bg-base-content break-keep box-decoration-clone"
              style={{ color: "var(--post-color)" }}
            >
              {post.title}
            </span>
            <br />
            <h5
              className={`px-4 py-1 bg-base-content text-2xl font-bold w-auto inline-block break-keep box-decoration-clone`}
            >
              {video.name}
            </h5>
          </Link>
        </div>
        <div
          className={`md:absolute top-auto left-auto bottom-0 right-0 md:w-max h-max pt-2 md:opacity-0 group-hover:md:opacity-100 transition-opacity text-right bg-base-content`}
          style={{ color: "var(--post-color)" }}
        >
          <Link
            href={video.url || "/"}
            target={`_blank`}
            className={`opacity-50 hover:opacity-100 transition-opacity px-2 inline-block`}
          >
            WATCH VIDEO
            <Icons.link
              width={20}
              height={20}
              className={`text-inherit inline-block mb-2 ml-1`}
            />
          </Link>
          <br />
          <Link
            href={post.url || "/"}
            className={`opacity-50 hover:opacity-100 transition-opacity px-2 inline-block`}
          >
            READ POST
            <Icons.arrowUpRight
              width={20}
              height={20}
              className={`text-inherit inline-block mb-2 ml-1`}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
