"use client";
import useWorkPosts from "@/hooks/useWorkPosts";
import Link from "next/link";
import { Icons } from "@/components/common/Icons/Icons";

export function TagOl({
  data,
  parentClassName = "flex flex-wrap gap-3 flex-row items-center",
  childColorClassName = "text-base-content stroke stroke-base-content fill-none hover:text-accent hover:stroke-accent",
  showCount = false,
  selectedChild = "",
  selectedChildClass = "bg-accent fill-none text-base-100",
}: {
  data: string[];
  parentClassName?: string;
  childColorClassName?: string;
  showCount?: boolean;
  selectedChild?: string;
  selectedChildClass?: string;
}) {
  const { getTagUrl, allPosts } = useWorkPosts();
  return (
    <ol className={parentClassName}>
      {data.map((tag) => (
        <li key={tag} className={"leading-snug "}>
          <Link
            href={getTagUrl(tag)}
            className={
              "relative whitespace-nowrap w-auto transition-colors py-1 pr-2 my-px rounded-tl-full rounded-bl-full" +
              " " +
              (tag == selectedChild ? selectedChildClass : childColorClassName)
            }
          >
            <Icons.tag
              width={20}
              height={20}
              className="inline-block h-[1em] -m-px mr-0 stroke-2 align-[-0.05em]"
            />
            {tag}
            {showCount && (
              <span className="text-xs align-top pl-1">
                {allPosts.reduce(
                  (count, post) =>
                    post.tag?.includes(tag) ? count + 1 : count,
                  0
                )}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ol>
  );
}
