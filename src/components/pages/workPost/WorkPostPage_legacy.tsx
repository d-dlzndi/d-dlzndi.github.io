"use client";
import Link from "next/link";
import Date from "@/components/common/Date";
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
import { LandingBox, TagOl } from "../index/LandingPage";

const mdxComponents = {
  img: ScrollShowImage,
  //pre: CodeBlock,
};

export default function WorkPostPage_Legacy({
  post,
  prevPost,
  nextPost,
}: {
  post: WorkPost;
  prevPost: WorkPost;
  nextPost: WorkPost;
}) {
  const { getCategoryUrl, getTagUrl } = useWorkPosts();
  const { getProp } = useImgPreview();

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
      <LandingBox className={"!bg-base-content !text-base-100"}>
        <div className="max-w-[1920px] w-full relative flex flex-col justify-center items-center gap-20 px-5 xl:px-10 py-20 z-10 isolate">
          <article
            id={post.slug}
            className=" flex flex-nowrap flex-col pt-[20vh] xl:flex-row place-items-stretch gap-5 w-full"
          >
            <div className={` max-w-[100%] w-[200%] 2xl:mr-[12.5%] relative`}>
              <Link
                className={
                  "btn btn-ghost max-w-fit p-0 opacity-20 hover:opacity-70 transition-opacity absolute -top-20 left-0 group"
                }
                href={WORK_URL}
              >
                <Icons.uturnLeft
                  width={20}
                  height={20}
                  className="inline-block"
                />
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Back To List
                </span>
              </Link>
              <header className="flex flex-col gap-5 top-[20vh] sticky xl:mb-80">
                <div className="pb-1 ">
                  <p className="pb-1">
                    <Link
                      href={getCategoryUrl(post.category)}
                      className=" font-bold uppercase opacity-50 hover:opacity-100 hover:text-primary transition-all"
                    >
                      {post.category.replaceAll("-", " ")}
                    </Link>
                  </p>
                  <h1
                    style={{ textDecorationColor: post.color }}
                    className=" font-extrabold break-keep text-2xl w-3/4"
                    dangerouslySetInnerHTML={{
                      __html: titleEnter(post.title),
                    }}
                  ></h1>
                </div>
                {post.description && (
                  <>
                    <div
                      className="opacity-50 break-keep w-3/4 "
                      dangerouslySetInnerHTML={{
                        __html: post.description?.html || "",
                      }}
                      suppressHydrationWarning
                    />
                  </>
                )}
                <p className="text-sm opacity-30">
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
                    <Date dateString={post.date} dateFormat="YYYY.MM.DD." />
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
                {post.tag && (
                  <TagOl
                    data={post.tag}
                    parentClassName="py-1 text-sm flex flex-row xl:flex-col gap-3 gap-x-4 flex-wrap"
                    childColorClassName={` border-l bg-[${post.color}] fill-transparent fill-[${post.color}] text-base-100 hover:border-transparent hover:bg-accent hover:fill-accent opacity-30 hover:opacity-100 transition-opacity`}
                  />
                )}
              </header>
            </div>
            <div
              className={
                prose.prose +
                " prose prose-invert xl:prose-lg w-[500%] max-w-full overflow-visible xl:max-w-none"
              }
            >
              <MDXContent components={mdxComponents} />
            </div>
          </article>
          <div className="w-full h-20"></div>
          <Next_PrevPosts nextPost={nextPost} prevPost={prevPost} />
        </div>
      </LandingBox>
    </SvgCurveLoader>
  );
}
