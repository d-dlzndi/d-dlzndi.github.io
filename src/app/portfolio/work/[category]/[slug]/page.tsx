import type { Metadata } from "next";
import { allWorkPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import useWorkPosts from "@/hooks/useWorkPosts";
import HtmlRemover from "@/utils/htmlRemover";
import WorkPostPage from "@/components/pages/slug/WorkPostPage";

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const category = encodeURI(params.category);
  const slug = encodeURI(params.slug);
  const post = allWorkPosts.find(
    (p) => p.slug == slug && p.category == category
  );

  return {
    title: post?.title,
    description: HtmlRemover(post?.description?.html),
  };
};

export async function generateStaticParams() {
  const posts = allWorkPosts;

  return posts.map((post) => ({
    category: encodeURI(post.category),
    slug: encodeURI(post.slug),
  }));
}

export default function WorkPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { allPosts } = useWorkPosts();
  const currentPostIndex = allPosts.findIndex(
    (allPost) =>
      allPost.slug === decodeURI(params.slug) &&
      allPost.category === decodeURI(params.category)
  );
  const post = allPosts[currentPostIndex];

  if (currentPostIndex < 0) return notFound();

  const prevPost = allPosts[currentPostIndex + 1];
  const nextPost = allPosts[currentPostIndex - 1];

  return (
    <>
      <WorkPostPage post={post} prevPost={prevPost} nextPost={nextPost} />
    </>
  );
}
