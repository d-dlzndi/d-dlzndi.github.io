import type { Metadata } from "next";
import Link from "next/link";

import Date from "@/components/common/Date";

import { WorkPost, allWorkPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import useWorkPosts from "@/hooks/useWorkPosts";
import ImgWithPlaceholder from "@/components/common/ImgWithPlaceholder";
import useImgPreview from "@/hooks/useImgPreview";

import styles from "./WorkPostPage.module.scss";
import HtmlRemover from "@/utils/htmlRemover";
import { Next_PrevPosts } from "./Next_PrevPosts";
import prose from "./prose.module.scss";
import { Icons } from "@/components/common/Icons/Icons";
import getTimeDiff from "@/utils/getTimeDiff";

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

  if (!post) return notFound();
  return (
    <div className="w-screen max-w-[1920px] bg-base-300 text-base-content">
      <div className=" w-full relative flex flex-col justify-center items-center gap-20 px-5 xl:px-10 py-20 z-10 isolate">
        <div
          className={styles.bgImg}
          style={{ backgroundColor: post?.color || "oklch(var(--p))" }}
        >
          <ImgWithPlaceholder
            className="w-full h-full object-cover"
            src={post.image}
            width={100}
            height={100}
          />
        </div>
        <div className={styles.topImgDiv}>
          <p
            className={styles.topImgTitle}
            style={post.color ? { color: post.color } : {}}
          >
            {post.title}
          </p>
          <div className={styles.topImgImg}>
            <ImgWithPlaceholder
              className="w-full h-full object-cover"
              src={post.image}
              width={1200}
              height={1200}
            />
          </div>
        </div>
        <article
          id={post.slug}
          className="flex flex-nowrap flex-col lg:flex-row-reverse place-items-stretch gap-5 w-full"
        >
          <div className={styles.headerbox}>
            <header className="flex flex-col gap-5 top-10 sticky">
              <h1>{post.title}</h1>
              <div>
                <h2>분류</h2>
                <p>
                  <Link
                    href={{
                      href: getCategoryUrl(post.category),
                      query: { category: post.category },
                    }}
                  >
                    {post.category.replaceAll("-", " ")}
                    <Icons.arrowUpRight width={16} height={16} />
                  </Link>
                </p>
              </div>
              {post.awards && (
                <div>
                  <h2>주요 내역</h2>
                  <ol className=" list-disc list-inside">
                    {post.awards?.map((p, idx) => (
                      <li key={p.name + "_" + idx}>
                        {p.href ? (
                          <a href={p.href} target="_blank">
                            {p.name}
                            <Icons.link width={16} height={16} />
                          </a>
                        ) : (
                          <>{p.name}</>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {post.programs && (
                <div>
                  <h2>프로그램</h2>
                  <ol className=" list-disc list-inside">
                    {post.programs?.map((p, idx) => (
                      <li key={p + "_" + idx}>{p}</li>
                    ))}
                  </ol>
                </div>
              )}
              {post.description && (
                <div>
                  <h2>요약</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.description?.html || "",
                    }}
                    suppressHydrationWarning
                  />
                </div>
              )}
              <div>
                <h2>제작일</h2>
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
                  <span>{getTimeDiff(post.date)} 전</span>
                  {post.startDate && (
                    <>
                      <br />
                      <span>
                        총 {getTimeDiff(post.startDate, post.date)} 간
                      </span>
                    </>
                  )}
                </p>
              </div>
            </header>
          </div>
          <div className={styles.bodybox + " max-w-full w-full lg:max-w-none"}>
            <div
              className={
                prose.prose +
                " max-w-none px-5 md:px-0 prose prose-invert lg:prose-lg"
              }
              dangerouslySetInnerHTML={{ __html: post.body.html }}
            />
          </div>
        </article>
        <Next_PrevPosts nextPost={nextPost} prevPost={prevPost} />
      </div>
    </div>
  );
}
