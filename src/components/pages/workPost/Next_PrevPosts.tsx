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
    <div className="flex flex-col md:flex-row justify-between items-stretch w-full max-w-none">
      {prevPost && !nextPost && <div />}
      {nextPost && nextPost.url && MorePost(nextPost)}
      {prevPost && prevPost.url && MorePost(prevPost, true)}
      {!prevPost && nextPost && <div />}
    </div>
  );
}

export function MorePost(nextPost: WorkPost, prev: boolean = false) {
  return (
    <Link
      href={nextPost.url || "/"}
      className={`flex-1 block px-4 py-8 md:px-16 md:py-20 relative group overflow-hidden w-full md:max-w-xl text-[${
        nextPost.color
      }] hover:text-base-100 text-${prev ? "right" : "left"}`}
      //@ts-ignore
      style={{ "--post-color": nextPost.color }}
    >
      <div className="group-hover:opacity-95 transition-all absolute leading-tight top-0 left-0 opacity-0 w-full h-full -z-10 overflow-hidden">
        <Img
          src={nextPost.image}
          width={400}
          height={400}
          className={`w-full h-full object-cover scale-125 blur-sm brightness-50 group-hover:scale-150`}
          style={{ transitionProperty: "transform", transitionDuration: "2s" }}
        />
      </div>
      <span className="opacity-30 group-hover:opacity-100 sm:relative top-0 group-hover:top-2 group-hover:text-[var(--post-color)] transition-all">
        {prev ? (
          <>
            PREV{" "}
            <Icons.arrowRight
              width={15}
              height={15}
              className="inline-block align-[-0.1em]"
            />
          </>
        ) : (
          <>
            <Icons.arrowLeft
              width={15}
              height={15}
              className="inline-block align-[-0.1em]"
            />{" "}
            NEXT
          </>
        )}
      </span>
      <div className="md:h-4" />
      <span className="group-hover:font-bold opacity-50 text-2xl break-keep sm:relative bottom-0 group-hover:bottom-2 group-hover:opacity-100 transition-all">
        {nextPost.title}
      </span>
    </Link>
  );
}
