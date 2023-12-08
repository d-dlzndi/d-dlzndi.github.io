"use client";
import useWorkPosts from "@/hooks/useWorkPosts";
import Link from "next/link";
import s from "./categorylist.module.scss";

export const CATEGORY_ALL: string = "All";

export function CategoryList({
  selectedCategory,
}: {
  selectedCategory?: string | null;
}) {
  const { categories, getCategoryUrl } = useWorkPosts();
  const categoryList = [CATEGORY_ALL, ...categories];
  selectedCategory = selectedCategory || CATEGORY_ALL;

  return (
    <ul className=" flex gap-3 flex-wrap text-xl font-medium">
      {categoryList.map((cate, idx) => (
        <li key={idx}>
          <Link
            className={`${cate == selectedCategory ? s.selected : ""} ${
              s.link
            }`}
            href={getCategoryUrl(cate)}
          >
            {cate.replaceAll("-", " ")}
          </Link>
        </li>
      ))}
    </ul>
  );
}
