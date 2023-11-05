import { MDXRemote } from "next-mdx-remote/rsc";
import { PostItem } from "@/lib/post_api";
import ImgWithPlaceholder from "@/components/ImgWithPlaceholder";
import { Suspense } from "react";

export default function IntroPage({ post }: { post: PostItem }) {
  return (
    <div>
      <ImgWithPlaceholder src={post.image || ""} />
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <Suspense fallback={<>Loading...</>}>
        <MDXRemote source={post.content || ""} />
      </Suspense>
    </div>
  );
}
