import type { Metadata } from "next";
import Link from "next/link";

import { scrollToTop } from "@/utils/scrollEvent";
import ProgramList from "@/components/dataList/ProgramList";
import AwardList from "@/components/dataList/AwardList";
import Date from "@/components/common/Date";

import { allWorkPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import useWorkPosts from "@/hooks/useWorkPosts";
import ImgWithPlaceholder from "@/components/common/ImgWithPlaceholder";
import useImgPreview from "@/hooks/useImgPreview";
import { Icons } from "@/components/common/Icons/Icons";
import Img from "@/components/common/ImgWithPlaceholder";

import styles from "./detailPage.module.scss";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const category = encodeURI(params.category);
  const slug = encodeURI(params.slug);
  const post = allWorkPosts.find((p) => p.title == slug);

  return {
    title: post?.title,
    description: post?.description?.raw,
    authors: { name: "", url: "/" },
  };
};

export async function generateStaticParams() {
  const posts = allWorkPosts;

  return posts.map((post) => ({
    category: encodeURI(post.category),
    slug: encodeURI(post.slug),
  }));
}

export default function WorkPost({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { allPosts, getCategoryUrl } = useWorkPosts();
  const currentPostIndex = allPosts.findIndex(
    (allPost) =>
      allPost.slug === decodeURI(params.slug) &&
      allPost.category === decodeURI(params.category)
  );
  const post = allPosts[currentPostIndex];
  const { getProp } = useImgPreview();

  if (currentPostIndex < 0) return notFound();

  const prevPost = allPosts[currentPostIndex + 1];
  const nextPost = allPosts[currentPostIndex - 1];

  return (
    <div className="flex flex-col justify-center items-center gap-20 pb-20">
      <article
        id={post.slug}
        className="flex flex-col justify-center items-center"
      >
        <header className="flex flex-col justify-center items-center gap-5 z-10">
          <Link
            href={getProp({ src: post.image, alt: post.title })}
            className={styles.mainImg}
          >
            <ImgWithPlaceholder
              className="w-full h-full object-cover"
              src={post.image}
              width={1000}
              height={1000}
            />
          </Link>
          <AwardList awardList={post.awards} />
          <Link href={getCategoryUrl(post.category)}>
            {post.category.replaceAll("-", " ").toUpperCase()}
          </Link>
          <h1 className="max-w-[var(--width-s)] text-7xl break-keep font-extrabold text-center">
            {post.title}
          </h1>
          <div>
            <Date dateString={post.startDate} />
            {" - "}
            <Date dateString={post.date} />
          </div>
          <ProgramList programList={post.programs} />
        </header>
        <div
          className="max-w-screen-md px-5 md:px-0 py-10 prose prose-stone"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
      <div className="flex flex-col md:flex-row justify-stretch items-stretch border-t border-b w-full max-w-screen-lg">
        {nextPost && nextPost.url && (
          <Link
            href={nextPost.url}
            className=" flex-1 block px-10 py-16 md:p-20 text-left relative group overflow-hidden hover:text-base-100"
          >
            <div className="group-hover:opacity-95 transition-all absolute top-0 left-0 opacity-0 w-full h-full -z-10 overflow-hidden">
              <Img
                src={nextPost.image}
                width={400}
                height={400}
                className={`w-full h-full object-cover scale-125 blur-sm brightness-50`}
              />
            </div>
            <Icons.arrowLeft width={15} height={15} className="inline-block" />{" "}
            다음 글 <br /> <br />
            <span className=" font-bold text-4xl break-keep">
              {nextPost.title}
            </span>
          </Link>
        )}
        {prevPost && prevPost.url && (
          <Link
            href={prevPost.url}
            className=" flex-1 block px-10 py-16 md:p-20 text-right relative group overflow-hidden hover:text-base-100"
          >
            <div className="group-hover:opacity-95 transition-all absolute top-0 left-0 opacity-0 w-full h-full -z-10 overflow-hidden">
              <Img
                src={prevPost.image}
                width={400}
                height={400}
                className={`w-full h-full object-cover scale-125 blur-sm brightness-50`}
              />
            </div>
            이전 글{" "}
            <Icons.arrowRight width={15} height={15} className="inline-block" />
            <br /> <br />
            <span className=" font-bold text-4xl break-keep">
              {prevPost.title}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
