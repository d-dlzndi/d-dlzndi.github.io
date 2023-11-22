"use client";
import useWorkPosts from "@/hooks/useWorkPosts";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LineList } from "../workList/LineList";
import { GalleryList } from "../workList/GalleryList";
import { motion } from "framer-motion";

const isLineList = (ct: string) => {
  return ct == "Graphic-Design";
};

export default function WorkCategoryPage({
  children,
}: {
  children?: React.ReactNode;
}) {
  const searchParam = useSearchParams();
  const category = searchParam.get("category");
  const { filterPosts } = useWorkPosts({ category });

  const title = category ? category.replaceAll("-", " ").toUpperCase() : "WORK";
  return (
    <div className="flex flex-col mt-[30vh] xl:mt-0 p-10 xl:flex-row xl:items-end xl:h-screen xl:justify-stretch">
      <div className=" xl:w-1/3 relative">
        <div className="text-6xl lg:text-7xl sticky bottom-0 break-keep">
          <h1 className="font-black text-primary">
            <Link href={"/portfolio/work"}>{title}</Link>
          </h1>
        </div>
      </div>
      <hr className=" w-px h-full bg-base-200 opacity-50 mx-10" />
      <div className="xl:w-2/3">
        {category ? (
          <div className="min-h-screen pt-36">
            {isLineList(category) ? (
              <LineList categoryUse={false} posts={filterPosts} />
            ) : (
              <GalleryList posts={filterPosts} />
            )}
          </div>
        ) : (
          <CategoryPage />
        )}
      </div>
    </div>
  );
}

function CategoryPage() {
  const { categories, getCategoryUrl } = useWorkPosts();
  return (
    <ul className="flex flex-col w-full mt-10 xl:mt-0 gap-4 xl:gap-16">
      {categories.map((c, idx) => (
        <motion.li
          key={c}
          initial={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5 + idx * 0.2,
            easings: "easeIn",
          }}
          className="xl:-ml-24"
        >
          <span className=" opacity-50 align-top pr-4 xl:pr-10 text-sm xl:text-2xl">
            {"0" + (idx + 1)}
          </span>
          <Link
            href={getCategoryUrl(c)}
            className=" whitespace-nowrap font-bold text-4xl xl:text-9xl text-primary hover:underline"
          >
            {c.replaceAll("-", " ")}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
