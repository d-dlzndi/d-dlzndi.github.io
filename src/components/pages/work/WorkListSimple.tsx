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

  const {
    filterPosts,
    categories,
    tags,
    getCategoryUrl,
    allPosts,
    postsByCategory,
  } = useWorkPosts({
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
      ? `${category?.replaceAll("-", " ").toUpperCase()}` || ""
      : TYPE == "TAG"
      ? `Tag : ${tag}` || ""
      : "";

  const getCategoryLength = (category: string) => {
    if (category && Object.keys(postsByCategory).includes(category))
      return postsByCategory[category].length;
    else return allPosts.length;
  };

  return (
    <LandingBox className={" bg-base-100 "}>
      <div className="mx-auto max-w-screen-2xl flex flex-col items-center px-4 lg:p-10 mt-56 mb-[10em] min-h-screen">
        <SimpleFlexBox
          datas={[
            {
              title: "FILTER",
              className: "hidden lg:block",
              children: <p className="xl:text-lg 2xl:text-xl">{title}</p>,
            },
            {
              title: "CATEGORY",
              className: "",
              children: (
                <ul className=" text-xl xl:text-2xl flex flex-col gap-1 uppercase font-normal">
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
                        <span className="pl-[2px] text-xs font-normal align-top opacity-30">
                          {getCategoryLength(ct)}
                        </span>
                        {category == ct && <DecoLine />}
                      </Link>
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              title: "TAG",
              className: "",
              children: (
                <TagOl
                  data={tags}
                  parentClassName="xl:text-lg flex flex-row flex-wrap gap-x-4 gap-y-3"
                  childColorClassName="fill-none stroke-accent hover:fill-accent hover:stroke-none hover:text-accent"
                  showCount={true}
                  selectedChild={tag || ""}
                />
              ),
            },
            {
              title: "VIEW",
              className: "",
              children: (
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
              ),
            },
          ]}
        />
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

type simpleChildType = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

export function SimpleFlexBox({
  className,
  commonChildClassName = "border-base-content",
  commonTitleClassName = "",
  datas,
}: {
  className?: string;
  commonChildClassName?: string;
  commonTitleClassName?: string;
  datas: simpleChildType[];
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-5 mb-16 lg:mb-28 ${className}`}
    >
      {datas.map((data) => (
        <div
          key={data.title}
          className={`border-t py-5 w-full ${commonChildClassName} ${data.className}`}
        >
          <h4
            className={`text-xs mb-2 xl:text-sm 2xl:text-base ${commonTitleClassName}`}
          >
            {data.title}
          </h4>
          {data.children}
        </div>
      ))}
    </div>
  );
}
