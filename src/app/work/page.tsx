import "./style.css";

import { PostItem, getAllPosts } from "../../lib/post_api";
import { CATEGORY_ALL } from "../../components/dataList/CategoryList";
import React from "react";
import Link from "next/link";
import ImgWithPlaceholder from "@/components/ImgWithPlaceholder";
import Date from "@/components/Date";

export const postProps = [
  "slug",
  "title",
  "image",
  "category",
  "date",
  "startDate",
];

export default function WorkList({
  params,
}: {
  params: { category: string; posts: PostItem[] };
}) {
  if (params.posts == undefined) params.posts = getAllPosts(postProps);
  if (params.category == undefined) params.category = CATEGORY_ALL;

  return (
    <div className="gallery-contents w-full pt-24 pr-5 pb-32">
      {params.posts.map((post, idx) => {
        return (
          <figure
            key={post.slug}
            className="work-thumb rounded-2xl" /*w-1/2 max-h-[28.125%]*/
          >
            <Link
              href={`/work/${post.category}/${post.slug}`}
              className="block relative w-full h-full"
            >
              <ImgWithPlaceholder
                src={"/" + (idx / 5 + 1).toFixed() + ".jpg"}
                alt={post.title}
                width={400}
                height={300}
                className="img w-full h-full object-center object-cover scale-110"
                unoptimized={false}
              />
              <div className="work-thumb-text bg backdrop-blur-sm backdrop-grayscale-0 backdrop-brightness-50 "></div>
              <div className="work-thumb-text inner bg-clip-text">
                {post.category && (
                  <span
                    className="category block absolute top-5 left-5 font-extrabold uppercase text-4xl break-keep"
                    dangerouslySetInnerHTML={{
                      __html: post.category.replaceAll("-", "<br />"),
                    }}
                  />
                )}
                <p className="date absolute bottom-5 left-5 font-extralight">
                  <Date dateString={post.date} />
                  <br />
                  -
                  <br />
                  <Date dateString={post.startDate} />
                </p>
                <h4 className="title max-w-2/3 w-auto absolute bottom-5 right-5 font-medium text-right text-2xl">
                  {post.title}
                </h4>
              </div>
            </Link>
          </figure>
        );
      })}
    </div>
  );
}
