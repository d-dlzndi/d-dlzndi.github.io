import { Icons } from "@/components/common/Icons/Icons";
import Img from "@/components/common/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import Link from "next/link";

export default function MainWorkPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <>
      <ScreenThumbnailList />
    </>
  );
}

export function ScreenThumbnailList() {
  const { filterPosts, categories } = useWorkPosts();
  const posts = filterPosts;
  return (
    <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 py-2 px-8 gap-1">
      {posts.map((post, idx) => (
        <Link
          key={post.slug}
          href={post.url || ""}
          className="block aspect-w-16 aspect-h-9 relative"
        >
          <Img
            src={post.image}
            alt={post.slug}
            className="absolute object-cover top-0 left-0 w-full h-full origin-center"
          />
          <div>
            {post.title} <Icons.link className=" w-5 h-5" />
          </div>
        </Link>
      ))}
    </div>
  );
}
