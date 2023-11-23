"use client";
import useWorkPosts, { WORK_URL } from "@/hooks/useWorkPosts";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LineList } from "../workList/LineList";
import { GalleryList } from "../workList/GalleryList";
import { motion } from "framer-motion";
import { Icons } from "@/components/common/Icons/Icons";
import useLocalStorage from "@/hooks/useLocalStorage";

const CATEGORY_ALL = "All";
const WORK = "WORK";

const isLineList = (ct: string) => {
  return ct == "Graphic-Design" || ct == CATEGORY_ALL;
};

export default function WorkCategoryPage({
  children,
}: {
  children?: React.ReactNode;
}) {
  const searchParam = useSearchParams();
  const category = searchParam.get("category");
  const tag = searchParam.get("tag");
  const { filterPosts, categories, tags } = useWorkPosts({ category, tag });

  const [mode, setMode] = useLocalStorage<"list" | "gallery">(
    "work_list_mode",
    "gallery"
  );
  const TYPE =
    category && [CATEGORY_ALL, ...categories].includes(category)
      ? "CATEGORY"
      : tag && tags.includes(tag)
      ? "TAG"
      : "WORK";

  const title =
    TYPE == "CATEGORY"
      ? category?.replaceAll("-", " ") || ""
      : TYPE == "TAG"
      ? `#${tag?.replaceAll(" ", "-")}` || ""
      : WORK;
  return (
    <div className="flex flex-col mt-[30vh] xl:mt-0 p-10 xl:flex-row xl:items-end xl:h-screen xl:justify-stretch">
      <div className=" xl:w-1/3 relative">
        <div className="text-6xl lg:text-7xl sticky bottom-0 break-keep">
          <div className="flex flex-col lg:flex-row justify-between">
            {TYPE !== "WORK" && <BackListBtn />}
            {(TYPE == "TAG" ||
              (TYPE == "CATEGORY" && category == CATEGORY_ALL)) && (
              <ListGallerySwitchBtnSet mode={mode} setMode={setMode} />
            )}
          </div>
          <h1 className="font-black text-primary uppercase">
            <Link href={"/portfolio/work"}>{title}</Link>
          </h1>
        </div>
      </div>
      <hr className=" w-px h-full bg-base-200 opacity-50 mx-10" />
      <div className="xl:w-2/3">
        {TYPE == "CATEGORY" || TYPE == "TAG" ? (
          <div className="min-h-screen pt-10 xl:pt-36">
            {TYPE == "TAG" ||
            (TYPE == "CATEGORY" && category == CATEGORY_ALL) ? (
              mode == "list" ? (
                <LineList categoryUse={false} posts={filterPosts} />
              ) : (
                <GalleryList posts={filterPosts} />
              )
            ) : TYPE == "CATEGORY" && isLineList(category || "") ? (
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
    <ul className="flex flex-col w-full mt-10 xl:mt-0 xl:gap-16">
      {[CATEGORY_ALL, ...categories].map((c, idx) => (
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
            {"0" + idx}
          </span>
          <Link
            href={getCategoryUrl(c)}
            className=" whitespace-nowrap leading-none font-bold text-4xl sm:text-[10vw] xl:text-9xl text-primary xl:leading-10 hover:underline"
          >
            {c.replaceAll("-", " ")}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

function BackListBtn() {
  return (
    <Link
      className={
        "btn btn-ghost max-w-fit p-0 px-2 opacity-20 hover:opacity-70 transition-opacity"
      }
      href={WORK_URL}
    >
      <Icons.uturnLeft width={20} height={20} className="inline-block" />
      목록으로
    </Link>
  );
}

function ListGallerySwitchBtnSet({
  mode,
  setMode,
}: {
  mode: any;
  setMode: any;
}) {
  return (
    <div id="work-btn-set" className=" flex gap-2">
      <button onClick={() => setMode("list")} className={`btn btn-ghost`}>
        <Icons.list
          width={20}
          height={20}
          className={`${mode != "list" ? "opacity-25" : "stroke-primary"}`}
        />
      </button>
      <button onClick={() => setMode("gallery")} className={`btn btn-ghost`}>
        <Icons.gallery
          width={20}
          height={20}
          className={`${mode != "gallery" ? "opacity-25" : "stroke-primary"}`}
        />
      </button>
    </div>
  );
}
