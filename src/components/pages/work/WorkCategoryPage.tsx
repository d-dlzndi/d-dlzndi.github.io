"use client";
import useWorkPosts, { WORK_URL } from "@/hooks/useWorkPosts";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LineList } from "../workList/LineList";
import { GalleryList } from "../workList/GalleryList";
import { motion } from "framer-motion";
import { Icons } from "@/components/common/Icons/Icons";
import useLocalStorage from "@/hooks/useLocalStorage";
import { LandingBox } from "../index/LandingPage";
import { TagOl } from "../index/comp/TagOl";
import { useState } from "react";

const CATEGORY_ALL = "All";
const WORK = "WORK";
const TAGS = "TAGS";

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

  const [view, setView] = useLocalStorage<"category" | "tag">(
    "work_view_mode",
    "tag"
  );
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
      ? `${tag}` || ""
      : view == "tag"
      ? TAGS
      : WORK;

  return (
    <LandingBox className={"mb-[10em]"}>
      <div className="flex flex-col mt-[30vh] xl:mt-0 p-10 xl:flex-row xl:min-h-screen xl:justify-stretch ">
        <div className=" xl:w-1/3 shrink-0 relative">
          <div className="sticky z-10 top-10 xl:h-[90vh] h-auto flex flex-col justify-end">
            <div className="text-6xl lg:text-7xl break-keep">
              <div className="flex flex-col lg:flex-row justify-between">
                {TYPE !== "WORK" && (
                  <BackListBtn
                    onClick={() => {
                      if (TYPE == "TAG") setView("tag");
                      else setView("category");
                    }}
                  />
                )}
                {(TYPE == "TAG" ||
                  (TYPE == "CATEGORY" && category == CATEGORY_ALL)) && (
                  <ListGallerySwitchBtnSet mode={mode} setMode={setMode} />
                )}
                {TYPE == "WORK" && (
                  <button
                    onClick={() =>
                      setView((view) => (view == "tag" ? "category" : "tag"))
                    }
                    className={`btn btn-ghost max-w-fit opacity-25 hover:opacity-100 transition-opacity group`}
                  >
                    <Icons.arrowsSwap
                      width={20}
                      height={20}
                      className={
                        ` ` +
                        (view == "category"
                          ? "stroke-accent"
                          : "stroke-primary")
                      }
                    />
                    <span
                      className={
                        " opacity-0 group-hover:opacity-100 transition-opacity " +
                        (view == "category" ? "text-accent" : "text-primary")
                      }
                    >
                      Switch To {view == "tag" ? "Category" : "Tag"} View
                    </span>
                  </button>
                )}
              </div>
              <h1
                className={
                  "uppercase mt-5 " +
                  (TYPE == "WORK" && "font-extrabold") +
                  " " +
                  (TYPE != "CATEGORY" &&
                    (view == "tag" || TYPE == "TAG") &&
                    " text-accent rounded-md decoration-clone")
                }
              >
                <a
                  href={WORK_URL}
                  onClick={() => {
                    if (TYPE == "TAG") setView("tag");
                    else setView("category");
                  }}
                >
                  {title}
                </a>
              </h1>
            </div>
          </div>
        </div>

        <hr
          className="w-px h-auto mx-10" //bg-base-200 opacity-50
        />

        <div className="xl:w-2/3 w-full">
          {TYPE == "CATEGORY" || TYPE == "TAG" ? (
            <div className="min-h-screen pt-10 xl:pt-36 ">
              {TYPE == "TAG" ||
              (TYPE == "CATEGORY" && category == CATEGORY_ALL) ? (
                mode == "list" ? (
                  <LineList categoryUse={true} posts={filterPosts} />
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
            // "WORK"
            <div className={"w-full h-full relative flex items-end"}>
              {view == "category" ? (
                <CategoryPage />
              ) : (
                <TagOl
                  data={tags}
                  parentClassName="flex flex-col gap-7 lg:pt-[20vh] text-4xl flex-wrap"
                  childColorClassName=" text-accent bg-base-100 fill-base-100 hover:bg-accent hover:fill-accent hover:text-base-100"
                  showCount={true}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </LandingBox>
  );
}

function CategoryPage() {
  const { categories, getCategoryUrl } = useWorkPosts();
  return (
    <ul className="flex flex-col pb-5 w-full mt-10 xl:mt-0 gap-5 xl:gap-20">
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
            className="whitespace-nowrap leading-none font-bold text-4xl sm:text-[10vw] xl:text-9xl text-primary xl:leading-10 hover:underline"
          >
            {c.replaceAll("-", " ")}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

function BackListBtn({ onClick }: { onClick?: any }) {
  return (
    <Link
      className={
        "btn btn-ghost max-w-fit p-0 px-2 opacity-20 hover:opacity-70 transition-opacity"
      }
      href={WORK_URL}
      onClick={onClick}
    >
      <Icons.uturnLeft width={20} height={20} className="inline-block" />
      Back To List
    </Link>
  );
}

export function ListGallerySwitchBtnSet({
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
