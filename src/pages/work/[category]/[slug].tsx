import "@/app/globals.css";

import type { Metadata } from "next";
import { getAllPosts, getOnePost } from "@/lib/post_api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Link from "next/link";
import CircleButton from "@/components/button/CircleButton";
import { useRouter } from "next/router";
import Date from "../../../components/Date";
import ProgramList from "../../../components/dataList/ProgramList";
import AwardList from "../../../components/dataList/AwardList";
import { scrollToTop } from "@/lib/scrollEvent";

export default function Post(params: any) {
  const post = params.post;
  const source = params.source;
  const components = params.components;
  const router = useRouter();

  return (
    <div className="relative bg-slate-800 text-white min-h-screen p-[100px] border-red-100">
      <article id={post.slug}>
        <header className="block min-h-[100vh]">
          <CircleButton width={100} height={100} onClick={router.back}>
            <span className={`inline-block align-middle`}>HOME</span>
          </CircleButton>
          <AwardList
            awardList={post.award}
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
          <MDXRemote {...source} components={components} />
        </div>
      </article>
      <div className="bottom-area h-[50vh]">
        <div className="text-5xl font-thin">NEXT</div>
        <button
          className="fixed bottom-0 right-10"
          onClick={() => scrollToTop()}
        >
          UP
        </button>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }: any) {
  const post = getOnePost(params.category, encodeURI(params.slug), [
    "slug",
    "title",
    "image",
    "category",
    "content",
    "date",
    //"award",
    //"programs",
  ]);
  const mdxSource = await serialize(post.content);

  return { props: { post, source: mdxSource } };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["category", "slug"]);
  return {
    paths: posts.map((p) => {
      return {
        params: {
          category: p.category,
          slug: p.slug,
        },
      };
    }),
    fallback: false,
  };
}

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  return {
    title: encodeURI(params.slug),
    description: encodeURI(params.slug),
    authors: { name: "Seo Yun Kim", url: "/" },
  };
};
