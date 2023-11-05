"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from "framer-motion";

export const CATEGORY_ALL: string = "All";

export default function CategoryList({
  selectedCategory,
  categoryList,
}: {
  selectedCategory?: string;
  categoryList: string[];
}) {
  const segment = useSelectedLayoutSegment();
  categoryList = [CATEGORY_ALL, ...categoryList];
  selectedCategory = selectedCategory || segment || CATEGORY_ALL;

  return (
    <ul className="flex flex-col gap-1">
      {categoryList.map((cate, idx) => (
        <li key={idx}>
          <Link
            className={`relative inline-block w-auto px-3 pt-1 pb-1 rounded-full transition ${
              cate == selectedCategory
                ? " bg-[var(--color)] text-[var(--background)]"
                : " bg-[var(--background)]"
            }`}
            href={`/work${cate == CATEGORY_ALL ? "" : `/${cate}`}`}
          >
            {cate.replaceAll("-", " ").toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
}
