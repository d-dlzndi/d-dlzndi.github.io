import useSWR from "swr";
import { getOnePost } from "@/lib/post_api";
import { serialize } from "next-mdx-remote/serialize";

const fetcher = (args: any) => {
  console.log("!!!!" + JSON.stringify(args));
  const post = getOnePost(args[0], args[1], [
    "slug",
    "description",
    "title",
    "image",
    "content",
  ]);
  return { post, source: post.content };
  /*
  serialize(post.content).then((mdxSource) => {
    console.log("!!!!" + mdxSource);
    return { post, source: mdxSource };
  });
  */
};

export default function usePost(category: string | undefined, slug: string) {
  console.log("아...");
  const { data, error, isLoading } = useSWR([category, slug], fetcher);
  return {
    data,
    isLoading,
    isError: error,
  };
}
