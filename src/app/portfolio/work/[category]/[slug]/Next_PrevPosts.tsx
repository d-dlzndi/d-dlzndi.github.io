import { WorkPost } from "contentlayer/generated";
import { Icons } from "@/components/common/Icons/Icons";
import Img from "@/components/common/ImgWithPlaceholder";
import Link from "next/link";

export function Next_PrevPosts({
  nextPost,
  prevPost,
}: {
  nextPost: WorkPost;
  prevPost: WorkPost;
}) {
  return (
    <div className="flex flex-col md:flex-row justify-stretch items-stretch border-t border-b w-full max-w-none">
      {nextPost && nextPost.url && MorePost(nextPost)}
      {prevPost && prevPost.url && MorePost(prevPost, true)}
    </div>
  );
}

export function MorePost(nextPost: WorkPost, prev: boolean = false) {
  const ArrowIcon = prev ? Icons.arrowRight : Icons.arrowLeft;
  return (
    <Link
      href={nextPost.url || "/"}
      className={`flex-1 block px-10 py-16 md:p-20 relative group overflow-hidden w-full hover:text-base-100 text-${
        prev ? "right" : "left"
      }`}
    >
      <div className="group-hover:opacity-95 transition-all absolute top-0 left-0 opacity-0 w-full h-full -z-10 overflow-hidden">
        <Img
          src={nextPost.image}
          width={400}
          height={400}
          className={`w-full h-full object-cover scale-125 blur-sm brightness-50`}
        />
      </div>
      <ArrowIcon width={15} height={15} className="inline-block" />{" "}
      {prev ? "이전 글" : "다음 글"}
      <br />
      <br />
      <span className=" font-bold text-4xl break-keep">{nextPost.title}</span>
    </Link>
  );
}
