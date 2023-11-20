"use client";

import Link from "next/link";
import Date from "@/components/common/Date";
import { WorkPost, allWorkPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import useWorkPosts from "@/hooks/useWorkPosts";
import useImgPreview from "@/hooks/useImgPreview";
import { Next_PrevPosts } from "./Next_PrevPosts";
import prose from "./prose.module.scss";
import { Icons } from "@/components/common/Icons/Icons";
import getTimeDiff from "@/utils/getTimeDiff";
import GoBackBtn from "./GoBackBtn";
import { useMDXComponent } from "next-contentlayer/hooks";
import ZoomImage from "@/components/common/mdx/ZoomImage";
import SvgCurveLoader from "@/components/animation/svg-curve-loader";

const mdxComponents = {
  img: ZoomImage,
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
  const { getCategoryUrl } = useWorkPosts();
  const { getProp } = useImgPreview();

  const postColor = post.color ? post.color : "oklch(var(--p))"
  const MDXContent = useMDXComponent(post.body.code);

  if (!post) return notFound();
  return (
    <SvgCurveLoader colorName={postColor}>
    <div className="w-screen min-h-screen !bg-base-content !text-base-100">
      <div className="max-w-[1920px] w-full relative flex flex-col justify-center items-center gap-20 px-5 xl:px-10 py-20 z-10 isolate">
        <article
          id={post.slug}
          className=" flex flex-nowrap flex-col pt-[20vh] lg:flex-row place-items-stretch gap-5 w-full"
        >
          <div className={` max-w-[100%] w-[200%] 2xl:mr-[12.5%] relative`}>
            <GoBackBtn
              className={
                "btn btn-ghost max-w-fit p-0 opacity-20 hover:opacity-70 transition-opacity absolute -top-20 left-0"
              }
              push={getCategoryUrl()}
            >
              <Icons.uturnLeft
                width={20}
                height={20}
                className="inline-block"
              />
              목록으로
            </GoBackBtn>
              <svg width={50} height={50} className="absolute top-0 left-0"  style={{fill: postColor, fillOpacity: .1,}}>
                <path d="M0 0 L50 0 L0 50 L0 0" />
              </svg>
            <header className="flex flex-col gap-5 top-[20vh] sticky">
              <svg width={50} height={50} style={{fill: postColor,fillOpacity: 0, stroke: postColor}}>
                <path d="M0 0 L50 0 L0 50 L0 0" />
              </svg>
              <div>
                <p className=" font-bold text-xl pb-3">
                  <Link href={getCategoryUrl() + "?category=" + post.category}>
                    {post.category.replaceAll("-", " ")}
                    <Icons.arrowUpRight
                      width={16}
                      height={16}
                      className="inline-block align-text-top"
                    />
                  </Link>
                </p>
                <h1 className=" text-6xl font-extrabold break-keep" style={{textShadow: "3px 3px 0 " + postColor}}>
                  {post.title}
                </h1>
              </div>
              {post.programs && (
                <ol className="flex flex-wrap gap-1">
                  {post.programs?.map((p, idx) => (
                    <li
                      key={p + "_" + idx}
                      className={`text-sm border rounded-full px-3 py-[.1em] block`}
                      style={{borderColor: postColor}}
                    >
                      {p}
                    </li>
                  ))}
                </ol>
              )}
              {post.description && (
                <>
                  <div
                    className="opacity-50"
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
            </header>
          </div>
          <div
            className={
              prose.prose +
              " prose prose-invert lg:prose-lg w-[500%] max-w-full overflow-visible lg:max-w-none"
            }
          >
            <MDXContent components={mdxComponents} />
          </div>
        </article>
        <Next_PrevPosts nextPost={nextPost} prevPost={prevPost} />
      </div>
    </div>
    </SvgCurveLoader>
  );
}