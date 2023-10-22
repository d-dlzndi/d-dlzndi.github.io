import { notFound } from "next/navigation";
import { getOnePost } from "../../../../../lib/post_api";
import markdownToHtml from "../../../../../lib/markdownToHtml";
import { Suspense } from "react";
import { AwardList } from "@/app/MainPage";
import Link from "next/link";
import CircleButton from "./CircleButton";

export default async function Post(params: any) {
  const post = getOnePost(
    decodeURI(params.params.category),
    decodeURI(params.params.title),
    ["title", "image", "category", "content", "date", "award", "program"]
  );
  if (!post) {
    return notFound();
  }
  const content = await markdownToHtml(post.content);
  return (
    <div className="relative bg-slate-800 text-white min-h-screen p-[100px] border-red-100">
      <article id={post.title}>
        <header className="block min-h-[100vh]">
          <CircleButton>
            <span className={`inline-block align-middle`}>HOME</span>
          </CircleButton>
          <div className="big-thumbnail h-[160vw] w-[80vw] rounded-full bg-slate-600 absolute top-[-120vw] left-[10vw] z-10">
            <AwardList awardList={[]} />
          </div>
          <div className="big-title absolute top-[30vw] text-center left-0 z-20 w-full border-red-800 border-2 flex flex-col justify-center items-center">
            <div>
              <Link href={`/post/${post.category}`}>
                {post.category.replaceAll("-", " ").toUpperCase()}
              </Link>
            </div>
            <h1 className="text-5xl bg-black w-3/4 break-keep">{post.title}</h1>
            <time>{post.date}</time>
          </div>
        </header>
        <Suspense fallback={<div>now loading</div>}>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </Suspense>
      </article>
      <div className="bottom-area h-[50vh]">
        <div className="text-5xl font-thin">NEXT</div>
        <button>UP</button>
      </div>
    </div>
  );
}
