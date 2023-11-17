import type { Metadata } from "next";
import Link from "next/link";

import ProgramList from "@/components/dataList/ProgramList";
import AwardList from "@/components/dataList/AwardList";
import Date from "@/components/common/Date";

import { allWorkPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import useWorkPosts from "@/hooks/useWorkPosts";
import ImgWithPlaceholder from "@/components/common/ImgWithPlaceholder";
import useImgPreview from "@/hooks/useImgPreview";

import styles from "./detailPage.module.scss";
import HtmlRemover from "@/utils/htmlRemover";
import { Next_PrevPosts } from "./Next_PrevPosts";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const category = encodeURI(params.category);
  const slug = encodeURI(params.slug);
  const post = allWorkPosts.find(
    (p) => p.slug == slug && p.category == category
  );

  return {
    title: post?.title,
    description: HtmlRemover(post?.description?.html),
  };
};

export async function generateStaticParams() {
  const posts = allWorkPosts;

  return posts.map((post) => ({
    category: encodeURI(post.category),
    slug: encodeURI(post.slug),
  }));
}

export default function WorkPostPage({
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
    <div className="w-screen">
      <div
        // href={getProp({ src: post.image, alt: post.title })}
        className={styles.mainImg}
        style={{ backgroundColor: post?.color || "oklch(var(--p))" }}
      >
        <ImgWithPlaceholder
          className="w-full h-full object-cover"
          src={post.image}
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-20 px-5 xl:px-10 pb-20">
        <article
          id={post.slug}
          className="flex flex-col justify-center items-center"
        >
          <header className="flex flex-row gap-5 z-10">
            <Link href={getProp({ src: post.image, alt: post.title })}>
              <ImgWithPlaceholder
                className="w-full h-full object-cover"
                src={post.image}
                width={1000}
                height={1000}
              />
            </Link>
            <div>
              <AwardList awardList={post.awards} />
              <Link
                href={{
                  href: getCategoryUrl(post.category),
                  query: { category: post.category },
                }}
              >
                {post.category.replaceAll("-", " ").toUpperCase()}
              </Link>
              <h1 className="text-7xl break-keep font-extrabold">
                {post.title}
              </h1>
              <div>
                <Date dateString={post.startDate} />
                {" - "}
                <Date dateString={post.date} />
              </div>
              <ProgramList programList={post.programs} />
            </div>
          </header>
          <div
            className=" max-w-none px-5 md:px-0 py-10 prose prose-stone"
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          />
        </article>
        <Next_PrevPosts nextPost={nextPost} prevPost={prevPost} />
      </div>
    </div>
  );
}
