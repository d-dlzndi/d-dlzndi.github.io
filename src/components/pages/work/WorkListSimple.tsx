"use client";
import useWorkPosts from "@/hooks/useWorkPosts";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { GalleryList } from "../workList/GalleryList";
import { Icons } from "@/components/common/Icons/Icons";
import useLocalStorage from "@/hooks/useLocalStorage";
import { LandingBox } from "../index/LandingPage";
import { TagOl } from "../index/comp/TagOl";
import DecoLine from "@/components/common/DecoLine";
import { LineList } from "./LineList";

const CATEGORY_ALL = "All";

export default function WorkListSimple({
  children,
}: {
  children?: React.ReactNode;
}) {
  const searchParam = useSearchParams();
  let category = searchParam.get("category");
  const tag = searchParam.get("tag");
  if ((category == "NULL" || category == null) && !tag) category = CATEGORY_ALL;

  const { filterPosts, categories, tags, getCategoryUrl, allPosts } =
    useWorkPosts({
      category,
      tag,
    });

  const [mode, setMode] = useLocalStorage<"list" | "gallery">(
    "work_list_mode",
    "gallery"
  );
  const toggleMode = () => {
    setMode((mode) => (mode == "list" ? "gallery" : "list"));
  };
  const TYPE =
    category && [CATEGORY_ALL, ...categories].includes(category)
      ? "CATEGORY"
      : tag && tags.includes(tag)
      ? "TAG"
      : "WORK";

  const title =
    TYPE == "CATEGORY"
      ? `${category?.replaceAll("-", " ")}` || ""
      : TYPE == "TAG"
      ? `Tag : ${tag}` || ""
      : "";

  const workText = `지금껏 다양한 작업을 진행해 왔습니다. 앞으로도 다양한 작업을 진행하고 싶습니다.`;

  return (
    <LandingBox className={" bg-base-100"}>
      <div className="flex flex-col items-center px-4 lg:p-10 mt-56 mb-[10em] min-h-screen">
        <div className="flex flex-col lg:flex-row gap-5 mb-40">
          <div className="border-t border-base-content py-5 w-full">
            <h4 className="text-xs mb-2 xl:text-sm 2xl:text-base">FILTER</h4>
            <p className="xl:text-lg 2xl:text-xl">{title}</p>
          </div>
          <div className="border-t border-base-content py-5 w-full">
            <h4 className="text-xs mb-2 xl:text-sm 2xl:text-base">CATEGORY</h4>
            <ul className=" text-xl xl:text-2xl uppercase font-normal">
              {[CATEGORY_ALL, ...categories].map((ct, idx) => (
                <li key={ct + "_" + idx}>
                  <Link
                    href={getCategoryUrl(ct)}
                    className={`relative z-[1] ${
                      category == ct
                        ? "text-primary font-bold"
                        : " hover:text-primary transition-colors"
                    }`}
                  >
                    {ct.replaceAll("-", " ")}
                    <span className="pl-[2px] text-xs font-normal align-top">
                      {ct == CATEGORY_ALL
                        ? allPosts.length
                        : allPosts.filter((p) => p.category == ct).length}
                    </span>
                    {category == ct && <DecoLine />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-base-content py-5 w-full">
            <h4 className="text-xs mb-2 xl:text-sm 2xl:text-base">TAG</h4>
            <TagOl
              data={tags}
              parentClassName="xl:text-lg flex flex-row flex-wrap gap-x-2 gap-y-1"
              showCount={false}
              selectedChild={tag || ""}
            />
          </div>
          <div className="border-t border-base-content py-5 w-full">
            <h4 className="text-xs mb-2 xl:text-sm 2xl:text-base">VIEW</h4>
            <div id="work-btn-set" className=" flex gap-2">
              <button onClick={() => toggleMode()}>
                <Icons.gallery
                  width={24}
                  height={24}
                  className={`${
                    mode !== "gallery" ? "opacity-25" : " "
                  } xl:w-7 xl:h-7`}
                />
              </button>
              <button onClick={() => toggleMode()}>
                <Icons.list
                  width={24}
                  height={24}
                  className={`${
                    mode !== "list" ? "opacity-25" : " "
                  } xl:w-7 xl:h-7`}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          {mode == "list" ? (
            <LineList posts={filterPosts} />
          ) : (
            <GalleryList posts={filterPosts} />
          )}
        </div>
      </div>
    </LandingBox>
  );
}
