import Link from "next/link";
import { getOnePost } from "@/lib/post_api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import AwardList from "@/components/dataList/AwardList";
import ProgramList from "@/components/dataList/ProgramList";
import Date from "@/components/Date";
import { useState } from "react";
import next from "next";
import Image from "next/image";

export default function IntroPostPage(params: any) {
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
      <div className="relative w-screen max-w-[var(--width-m)] h-screen flex flex-row justify-stretch">
        <div className="flex-1 relative basis-0">
          <IntroImageSlide />
          <div className="absolute top-10 left-[70%] font-bold text-4xl">
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
        </header>
        <div className="absolute bottom-10 right-10 p-10">
          <Link href={url} className="font-medium text-xl ">
            MORE
          </Link>
        </div>
      </div>
    </article>
  );

  function IntroImageSlide() {
    const imageUrls = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];
    const [focus, setFocus] = useState(0);

    const focusNext = () => {
      focusSetAt(focus + 1);
    };
    const focusBefore = () => {
      focusSetAt(focus - 1);
    };
    const focusSetAt = (next: number) => {
      if (next >= imageUrls.length) next = 0;
      else if (next < 0) next = imageUrls.length - 1;
      setFocus(next);
    };
    const getMyFocus = (add: number) => {
      if (focus + add >= imageUrls.length) add -= imageUrls.length;
      else if (focus + add < 0) add += imageUrls.length;
      return focus + add;
    };

    return (
      <div className="slide w-full h-full flex flex-col items-center">
        <div className="main-img w-[400px] h-[400px] bg-indigo-300 overflow-hidden rounded-t-full">
          {imageUrls.map((url, idx) => (
            <Image
              key={url}
              src={url}
              alt={"image"}
              className={
                (idx == focus ? "" : "hidden") +
                " object-cover object-center w-[500px] h-[500px]"
              }
              width={500}
              height={500}
            />
          ))}
        </div>
        {imageUrls.slice(1).map((btnUrl, idx) => {
          const width = 400 - idx * 50;
          const height = 50;
          return (
            <button
              key={btnUrl}
              className={`main-img block w-[${width}px] h-[${height}px] max-h-[${height}px] bg-indigo-300 overflow-hidden rounded-full`}
              onClick={() => setFocus(getMyFocus(idx + 1))}
            >
              {imageUrls.map((url, imgIdx) => (
                <Image
                  key={url}
                  src={url}
                  alt={"image"}
                  className={
                    (imgIdx == getMyFocus(idx + 1) ? "" : "hidden") +
                    ` object-cover object-center w-[${width}px] h-[${height}px]`
                  }
                  width={width}
                  height={height}
                />
              ))}
            </button>
          );
        })}
        <button onClick={() => focusBefore()}>이전</button>
        <button onClick={() => focusNext()}>다음</button>
      </div>
    );
  }
}
