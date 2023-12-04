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
import { LandingBox } from "../index/LandingPage";
import { TagOl } from "../index/comp/TagOl";

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
        <div
          //@ts-ignore
          style={{ "--post-color": post.color }}
          className="max-w-[1920px] w-full relative flex flex-col justify-center items-center gap-20 px-5 xl:px-10 py-20 z-10 isolate"
        >
          <article
            id={post.slug}
            className=" flex flex-col pt-[20vh] place-items-center gap-5 w-full relative"
          >
            <header className="w-full relative mb-10">
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
              <div className="w-full pb-8">
                <h1
                  className=" font-extrabold break-keep text-4xl lg:text-5xl 2xl:text-6xl w-3/4 text-[var(--post-color)]"
                  dangerouslySetInnerHTML={{
                    __html: titleEnter(post.title),
                  }}
                ></h1>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 ">
                {post.description && (
                  <div className="border-t border-[var(--post-color)]  py-5 w-full">
                    <h4 className="text-xs mb-2 text-[var(--post-color)] lg:text-sm 2xl:text-base">
                      DESCRIPTION
                    </h4>
                    <div
                      className=" break-keep leading-relaxed w-3/4"
                      dangerouslySetInnerHTML={{
                        __html: post.description?.html || "",
                      }}
                      suppressHydrationWarning
                    />
                  </div>
                )}
                <div className="border-t border-[var(--post-color)]  py-5 w-full">
                  <h4 className="text-xs mb-2 text-[var(--post-color)] lg:text-sm 2xl:text-base">
                    CATEGORY
                  </h4>
                  <p>
                    <Link
                      href={getCategoryUrl(post.category)}
                      className=" font-bold uppercase hover:text-primary transition-all"
                    >
                      {post.category.replaceAll("-", " ")}
                    </Link>
                  </p>
                </div>
                {post.tag && (
                  <div className="border-t border-[var(--post-color)]  py-5 w-full">
                    <h4 className="text-xs mb-2 text-[var(--post-color)] lg:text-sm 2xl:text-base">
                      TAG
                    </h4>
                    <TagOl
                      data={post.tag}
                      parentClassName="py-1 flex flex-row gap-3 gap-x-4 flex-wrap"
                      childColorClassName={`fill-[var(--post-color)] text-base-100 hover:bg-accent hover:fill-accent`}
                    />
                  </div>
                )}
                <div className="border-t border-[var(--post-color)]  py-5 w-full">
                  <h4 className="text-xs mb-2 text-[var(--post-color)] lg:text-sm 2xl:text-base">
                    DATE
                  </h4>
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
                </div>
              </div>
            </header>
            <div
              className={`${prose.prose} prose md:prose-lg 2xl:prose-xl max-w-screen-md overflow-visible prose-headings:!text-[var(--post-color)] prose-headings:uppercase`}
            >
              <MDXContent components={mdxComponents} />
            </div>
          </article>
          <Next_PrevPosts nextPost={nextPost} prevPost={prevPost} />
        </div>
      </LandingBox>
    </SvgCurveLoader>
  );
}
