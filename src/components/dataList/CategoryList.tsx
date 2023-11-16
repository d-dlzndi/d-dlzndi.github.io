"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import useWorkPosts from "@/hooks/useWorkPosts";

export const CATEGORY_ALL: string = "All";

export default function CategoryList({
  selectedCategory,
}: {
  selectedCategory?: string | null;
}) {
  const segment = useSelectedLayoutSegment();
  const { categories, getCategoryUrl } = useWorkPosts();
  const categoryList = [CATEGORY_ALL, ...categories];
  selectedCategory = selectedCategory || segment || CATEGORY_ALL;

  return (
    <ul className="flex flex-col gap-1">
      {categoryList.map((cate, idx) => (
        <li key={idx}>
          <Link
            className={`relative inline-block w-auto px-3 pt-1 pb-1 rounded-full transition border border-current ${
              cate == selectedCategory
                ? " bg-[var(--color)] text-[var(--background)]"
                : " bg-[var(--background)]"
            }`}
            href={{
              href: getCategoryUrl(cate),
              query: { category: cate },
            }}
          >
            {cate.replaceAll("-", " ").toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
}
