"use client";
import Link from "next/link";
import Date from "@/components/common/design/Date";
import { WorkPost } from "contentlayer/generated";
import { notFound } from "next/navigation";
import useWorkPosts, { WORK_URL } from "@/hooks/useWorkPosts";
import useImgPreview from "@/hooks/useImgPreview";
import { Next_PrevPosts } from "./Next_PrevPosts";
import prose from "./prose.module.scss";
import { Icons } from "@/components/common/Icons/Icons";
import getTimeDiff from "@/utils/getTimeDiff";
import { useMDXComponent } from "next-contentlayer/hooks";
import SvgCurveLoader from "@/components/animation/svg-curve-loader";
import ScrollShowImage from "@/components/common/mdx/ScrollShowImage";
import { LandingBox } from "../index/LandingPage";
import { TagOl } from "../index/comp/TagOl";
import { SimpleFlexBox } from "../work/SimpleFlexBox";
import CustomReactPlayer from "@/components/common/design/CustomReactPlayer";
import React from "react";

const mdxComponents = {
  img: ScrollShowImage,
  //pre: CodeBlock,
};

export default function WorkPostPage({
  post,
  prevPost,
  nextPost,
}: {
  post: WorkPost;
  prevPost: WorkPost;
  nextPost: WorkPost;
}) {
  const { getCategoryUrl, getTagUrl } = useWorkPosts();

  const postColor = post.color ? post.color : "oklch(var(--p))";
  const MDXContent = useMDXComponent(post.body.code);

  const titleEnter = (title: string) => {
    const spliter = "〈";
    if (title.indexOf(spliter) >= 0) {
      return title.split(spliter).join("<br />" + spliter);
    }
    return title;
  };

  if (!post) return notFound();
  return (
    <SvgCurveLoader colorName={postColor}>
      <LandingBox
        className={"!bg-base-content !text-base-100"}
        childClassName={" min-h-screen"}
      >
        <div
          //@ts-ignore
          style={{ "--post-color": postColor }}
          className="mx-auto max-w-screen-2xl w-full mt-56 relative flex flex-col justify-center items-center gap-20 px-4 xl:px-10 py-20 z-10 isolate"
        >
          <article
            id={post.slug}
            className=" flex flex-col place-items-center gap-5 w-full relative"
          >
            <header className="w-full relative mb-10">
              <div className="text-sm breadcrumbs opacity-20 hover:opacity-70 transition-opacity absolute -top-12 left-0">
                <ul>
                  <li>
                    <Link href={WORK_URL} className="uppercase">
                      {"WORK"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={getCategoryUrl(post.category)}
                      className="uppercase"
                    >
                      {post.category.replaceAll("-", " ")}
                    </Link>
                  </li>
                  <li></li>
                </ul>
              </div>
              <div className="w-full pb-8">
                <h1
                  className=" font-extrabold break-keep text-4xl lg:text-5xl 2xl:text-6xl w-3/4 text-[var(--post-color)]"
                  dangerouslySetInnerHTML={{
                    __html: titleEnter(post.title),
                  }}
                ></h1>
              </div>
              <SimpleFlexBox
                className="!mb-0"
                commonChildClassName="border-[var(--post-color)]"
                commonTitleClassName="text-[var(--post-color)]"
                datas={[
                  {
                    title: "DESCRIPTION",
                    children: (
                      <div
                        className=" break-keep leading-relaxed w-3/4"
                        dangerouslySetInnerHTML={{
                          __html: post.description?.html || "",
                        }}
                        suppressHydrationWarning
                      />
                    ),
                  },
                  {
                    title: "CATEGORY",
                    children: (
                      <p>
                        <Link
                          href={getCategoryUrl(post.category)}
                          className=" font-bold uppercase hover:text-primary transition-all mt-1"
                        >
                          {post.category.replaceAll("-", " ")}
                        </Link>
                      </p>
                    ),
                  },
                  {
                    title: "TAG",
                    children: (
                      <TagOl
                        data={post.tag || []}
                        parentClassName="py-1 flex flex-row gap-3 gap-x-4 flex-wrap -mt-[0.1rem]"
                        childColorClassName={`fill-base-300 text-base-100 hover:bg-secondary hover:fill-secondary hover:text-base-content`}
                      />
                    ),
                  },
                  {
                    title: "DATE",
                    children: (
                      <p>
                        <span>
                          {post.startDate && (
                            <>
                              <Date
                                dateString={post.startDate}
                                dateFormat="YYYY.MM.DD."
                              />
                              {" - "}
                            </>
                          )}
                          <Date
                            dateString={post.date}
                            dateFormat="YYYY.MM.DD."
                          />
                        </span>
                        <br />
                        <span>
                          {getTimeDiff(post.date)} 전{post.startDate && "에"}
                        </span>
                        {post.startDate && (
                          <>
                            {` - `}
                            <span>
                              총 {getTimeDiff(post.startDate, post.date)} 동안
                            </span>
                          </>
                        )}
                      </p>
                    ),
                  },
                ]}
              />
            </header>
            <div
              className={`${prose.prose} prose md:prose-lg 2xl:prose-xl max-w-screen-md overflow-visible prose-headings:!text-[var(--post-color)] prose-headings:uppercase w-full`}
            >
              {post.videos &&
                post.videos
                  .filter((video) => video.autoPost)
                  .map((video, idx) => (
                    <React.Fragment key={video._id}>
                      <h4 className="text-center">{video.name}</h4>
                      <CustomReactPlayer
                        video={video.url}
                        videoPlaying={false}
                        muted={false}
                        controls={true}
                      />
                    </React.Fragment>
                  ))}
              {post.videos && <hr />}
              <MDXContent components={mdxComponents} />
            </div>
          </article>
          <Next_PrevPosts nextPost={nextPost} prevPost={prevPost} />
        </div>
      </LandingBox>
    </SvgCurveLoader>
  );
}
