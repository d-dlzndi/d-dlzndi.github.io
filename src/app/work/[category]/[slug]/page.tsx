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

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  return {
    title: encodeURI(params.slug),
    description: encodeURI(params.slug),
    authors: { name: "Seo Yun Kim", url: "/" },
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
    <div>
      <article
        id={post.slug}
        className="flex flex-col justify-center items-center pb-20"
      >
        <header className="flex flex-col justify-center items-center gap-5">
          <Link
            href={getProp({ src: post.image, alt: post.title })}
            className="w-screen h-[50vh] relative cursor-pointer"
          >
            <ImgWithPlaceholder
              className="w-full h-full object-cover"
              src={post.image}
              width={500}
              height={500}
            />
          </Link>
          <AwardList awardList={post.awards} />
          <Link href={getCategoryUrl(post.category)}>
            {post.category.replaceAll("-", " ").toUpperCase()}
          </Link>
          <h1 className="max-w-[var(--width-s)] text-7xl break-keep font-extrabold">
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
          className="max-w-[720px] py-10 prose prose-stone lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
      <div className="flex flex-row items-center justify-center gap-10">
        {nextPost && nextPost.url && (
          <Link href={nextPost.url} className="block p-20 border rounded-full">
            다음 글 <br />
            <span className=" font-bold text-4xl">{nextPost.title}</span>
          </Link>
        )}
        {prevPost && prevPost.url && (
          <Link href={prevPost.url} className="block p-20 border rounded-full">
            이전 글 <br />
            <span className=" font-bold text-4xl">{prevPost.title}</span>
          </Link>
        )}
      </div>
    </div>
  );
}
