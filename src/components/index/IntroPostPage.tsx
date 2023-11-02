import Link from "next/link";
import { getOnePost } from "@/lib/post_api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import AwardList from "@/components/dataList/AwardList";
import ProgramList from "@/components/dataList/ProgramList";
import Date from "@/components/Date";
import IntroImageSlide from "./IntroImageSlide";
import { TextCircle } from "./TextCircle";

export default function IntroPostPage({
  post,
}: {
  post: { [key: string]: string };
}) {
  post = {
    content:
      '\nCHRONIC PAIN two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.\n\n- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.\n- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.\n\nImportantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.\n',
    slug: "A-Metal-Flower",
    title: "철로 이루어진 꽃",
    image: "/images/chronic-pain-1.jpg",
    category: "3D-Animation",
    startDate: "2020-10-20",
    date: "2019-01-01",
    award: "룰루랄라",
    programs:
      "Maya, Unreal Engine 5, Substance Painter, After Effect, Photoshop, Premiere",
  };
  /*await getOnePost(params.category, encodeURI(params.slug), [
    "slug",
    "title",
    "image",
    "category",
    "content",
    "startDate",
    "date",
    "award",
    "programs",
  ]);*/
  console.log(post.title, post.category);

  const categoryUrl = `/work/${post.category}`;
  const url = `${categoryUrl}/${post.slug}`;

  return (
    <article className="w-screen h-screen flex justify-center">
      <div className="relative w-screen max-w-[var(--width-m)] h-screen flex flex-row justify-stretch">
        <div className="flex-1 relative basis-0">
          <IntroImageSlide imageUrls={[]} />
          <div className="absolute top-20 left-[65%] font-bold text-4xl z-10">
            <Date dateString={post.startDate} />
            <br />
            {"\u00A0\u00A0\u00A0"}
            <span>-</span>
            {"\u00A0"}
            <Date dateString={post.date} />
          </div>
        </div>
        <header className="flex-1 basis-0 relative">
          <div className="top-box h-[60vh] gap-10 relative py-7 flex flex-col justify-end">
            <div className="flex flex-row gap-3 w-3/4">
              <div className="description1 flex-1 break-all text-justify opacity-20 max-w-[340px]">
                {post.content.substring(0, 200) + "..."}
              </div>
            </div>
            <div>
              <p className="sub-title font-thin uppercase text-3xl">
                <Link href={categoryUrl}>
                  {post.category.replaceAll("-", " ").toUpperCase()}
                </Link>
              </p>
              <div className="eng-title absolute -z-10 select-none bottom-0 left-20 font-extrabold break-keep text-7xl opacity-5">
                {post.slug.replaceAll("-", " ")}
              </div>
              <h2 className="main-title">
                <Link href={url} className="font-extrabold text-7xl break-keep">
                  {post.title}
                </Link>
              </h2>
            </div>
          </div>
          <div className="bottom-box relative w-2/3 h-[50vh] py-8 flex flex-col justify-between">
            <div className="relative">
              <h5 className="mb-2">PROGRAM</h5>
              <div>
                <ProgramList programList={post.programs} className="" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 right-10 p-10">
            <Link href={url} className="font-medium text-xl ">
              MORE
            </Link>
          </div>
          <TextCircle />
        </header>
      </div>
    </article>
  );
}
