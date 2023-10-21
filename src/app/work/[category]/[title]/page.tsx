import { notFound } from "next/navigation";
import { PostItem, getOnePost } from "../../../../../lib/post_api";
import markdownToHtml from "../../../../../lib/markdownToHtml";
import { Suspense } from "react";

export default async function Post(params: any) {
  const post = getOnePost(
    decodeURI(params.params.category),
    decodeURI(params.params.title),
    ["title", "image", "category", "content"]
  );

  console.log(post);
  if (post == undefined) {
    return notFound();
  }

  const content = await markdownToHtml(post.content);

  return (
    <div className="p-[100px]">
      <h1>{post.title}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </Suspense>
    </div>
  );
}
