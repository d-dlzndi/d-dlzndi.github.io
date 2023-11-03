import {
  PostItem,
  getAllCategories,
  getAllPostsInCategory,
} from "@/lib/post_api";
import WorkList, { postProps } from "../page";

export async function generateStaticParams() {
  const categories = getAllCategories();

  return categories.map((ct) => ({
    category: ct,
    // posts: getAllPostsInCategory(postProps, ct, true), 이거안됨
  }));
}

export default function WorkCategoryPage({
  params,
}: {
  params: { category: string; posts: PostItem[] };
}) {
  params.posts =
    params.posts || getAllPostsInCategory(postProps, params.category, true);

  return <WorkList params={params} />;
}
