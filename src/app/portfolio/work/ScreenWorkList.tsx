"use client";

import { Icons } from "@/components/common/Icons/Icons";
import { useSearchParams } from "next/navigation";
import useWorkPosts from "@/hooks/useWorkPosts";
import useLocalStorage from "@/hooks/useLocalStorage";
import { CategoryList } from "./CategoryList";
import { GalleryList } from "./GalleryList";
import { LineList } from "./LineList";
import { Suspense } from "react";
import Loading from "../loading";

export default function ScreenWorkList() {
  const searchParam = useSearchParams();
  const category = searchParam.get("category");
  const [mode, setMode] = useLocalStorage<"list" | "gallery">(
    "work_list_mode",
    "gallery"
  );

  const { filterPosts } = useWorkPosts({ category });
  const posts = filterPosts;
  return (
    <>
      <div
        id="work-header"
        className="flex flex-col lg:flex-row gap-2 justify-between mb-4"
      >
        <CategoryList selectedCategory={category} />
        <div id="work-btn-set" className=" flex gap-2">
          <button onClick={() => setMode("list")} className={`btn btn-ghost`}>
            <Icons.list
              width={20}
              height={20}
              className={`${mode != "list" ? "opacity-25" : "stroke-primary"}`}
            />
          </button>
          <button
            onClick={() => setMode("gallery")}
            className={`btn btn-ghost`}
          >
            <Icons.gallery
              width={20}
              height={20}
              className={`${
                mode != "gallery" ? "opacity-25" : "stroke-primary"
              }`}
            />
          </button>
        </div>
      </div>
      <div className=" min-h-[100px] border-primary">
        <Suspense fallback={<Loading />}>
          {mode == "list" && <LineList posts={posts} />}
          {mode == "gallery" && <GalleryList posts={posts} />}
        </Suspense>
      </div>
    </>
  );
}
