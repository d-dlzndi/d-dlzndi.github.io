import Link from "next/link";
import { getOnePost } from "@/lib/post_api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import AwardList from "@/component/dataList/AwardList";
import ProgramList from "@/component/dataList/ProgramList";
import Date from "@/component/Date";

export default function MainPage(params: any) {
  const post = {
    content:
      '\nCHRONIC PAIN two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.\n\n- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.\n- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.\n\nImportantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.\n',
    slug: "A-Metal-Flower",
    title: "철로 이루어진 꽃",
    image: "/images/chronic-pain-1.jpg",
    category: "3D-Animation",
    startDate: "2020-10-20",
    date: "2019-01-01",
    award: "룰루랄라",
    programs: "Maya, Unreal Engine 5, Substance Painter",
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
      <div className="relative w-screen max-w-[var(--width-m)] h-screen flex flex-col">
        <div className="absolute top-0 right-0 w-1/2 h-screen z-10">
          <div className="main-img absolute bg-indigo-300 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden">
            <img
              src={"/1.jpg"}
              className="object-cover object-center"
              width={500}
              height={800}
            />
          </div>
          <div className="absolute top-10 left-10 font-bold text-5xl">
            <Date dateString={post.startDate} />
            <br />
            <span>-</span>
            <br />
            <Date dateString={post.date} />
          </div>
          <div className="absolute bottom-10 right-10 p-10">
            <Link href={url} className="font-medium text-xl ">
              MORE
            </Link>
          </div>
        </div>
        <header className="top-box w-2/3 h-[50vh] relative p-10 flex flex-col justify-between">
          <div className="relative">
            <AwardList
              className="flex flex-row flex-nowrap"
              awardList={post.award}
            />
          </div>
          <div className="relative">
            <p className="sub-title uppercase relative">
              <Link href={categoryUrl}>
                {post.category.replaceAll("-", " ").toUpperCase()}
              </Link>
            </p>
            <h2 className="main-title relative ">
              <Link href={url} className="font-bold text-7xl break-keep">
                {post.title}
              </Link>
            </h2>
          </div>
        </header>
        <div className="bottom-box relative w-2/3 h-[50vh] p-10 flex flex-col justify-between">
          <div className="flex flex-row gap-3 w-3/4">
            <div className="description1 flex-1 break-all text-justify">
              {post.content}
            </div>
          </div>
          <div className="relative">
            <h5 className="mb-2">PROGRAM</h5>
            <div>
              <ProgramList programList={post.programs} className="" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
