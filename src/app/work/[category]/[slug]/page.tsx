import type { Metadata } from "next";
import Link from "next/link";
import CircleButton from "@/components/common/button/CircleButton";

import { scrollToTop } from "@/utils/scrollEvent";
import ProgramList from "@/components/dataList/ProgramList";
import AwardList from "@/components/dataList/AwardList";
import Date from "@/components/common/Date";

import { allWorkPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import useWorkPosts from "@/hooks/useWorkPosts";
import ImgWithPlaceholder from "@/components/common/ImgWithPlaceholder";

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
  const prevPost = allPosts[currentPostIndex + 1];
  const nextPost = allPosts[currentPostIndex - 1];

  return (
    <div>
      <article
        id={post._id}
        className="flex flex-col justify-center items-center"
      >
        <header className="flex flex-col justify-center items-center gap-5">
          <div className="w-screen h-[50vh] relative">
            <ImgWithPlaceholder
              className="w-full h-full object-cover"
              src={post.image}
              width={500}
              height={500}
            />
          </div>
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
          className="max-w-[var(--width-s)] prose prose-neutral lg:prose-xl "
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
      <div>
        {prevPost && prevPost.url && (
          <Link href={prevPost.url}>
            이전 글 <br />
            {prevPost.title}
          </Link>
        )}
        <br />
        {nextPost && nextPost.url && (
          <Link href={nextPost.url}>
            다음 글 <br />
            {nextPost.title}
          </Link>
        )}
      </div>
    </div>
  );
}

/** *****************************************************************
 * 레거시 코드
 * @param param0
 * @returns
 */

function Post({ params }: { params: { category: string; slug: string } }) {
  const { allPosts } = useWorkPosts();
  const currentPostIndex = allPosts.findIndex(
    (allPost) =>
      allPost.slug === decodeURI(params.slug) &&
      allPost.category === decodeURI(params.category)
  );

  const post = allPosts[currentPostIndex];
  const prevPost = allPosts[currentPostIndex + 1];
  const nextPost = allPosts[currentPostIndex - 1];

  if (!post) return notFound();

  return (
    <div className="relative bg-slate-800 text-white min-h-screen p-[100px] border-red-100">
      <div dangerouslySetInnerHTML={{ __html: post.description?.html || "" }} />
      <article id={post.slug}>
        <header className="block min-h-[100vh]">
          <CircleButton width={100} height={100}>
            <span className={`inline-block align-middle`}>HOME</span>
          </CircleButton>
          <AwardList
            awardList={post?.awards}
            className={
              "big-thumbnail h-[160vw] w-[80vw] rounded-full bg-slate-600 absolute top-[-120vw] left-[10vw] z-10"
            }
          />
          <div className="big-title absolute top-[30vw] text-center left-0 z-20 w-full border-red-800 border-2 flex flex-col justify-center items-center">
            <div>
              <Link href={`/post/${post.category}`}>
                {post.category.replaceAll("-", " ").toUpperCase()}
              </Link>
            </div>
            <h1 className="text-5xl bg-black w-3/4 break-keep">{post.title}</h1>
            <Date dateString={post.date} />
          </div>
          <ProgramList programList={post.programs} />
        </header>
        <div className="wrapper prose md:prose-lg lg:prose-xl">
          <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </div>
      </article>
      <div className="bottom-area h-[50vh]">
        <div className="text-5xl font-thin">NEXT</div>
        <button className="fixed bottom-0 right-10">UP</button>
      </div>
    </div>
  );
}
