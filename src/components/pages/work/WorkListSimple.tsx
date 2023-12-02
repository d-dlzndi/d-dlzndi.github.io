"use client";
import useWorkPosts from "@/hooks/useWorkPosts";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LineList } from "../workList/LineList";
import { GalleryList } from "../workList/GalleryList";
import { AnimatePresence, motion } from "framer-motion";
import { Icons } from "@/components/common/Icons/Icons";
import useLocalStorage from "@/hooks/useLocalStorage";
import { LandingBox, TagOl } from "../index/LandingPage";
import { WorkPost } from "contentlayer/generated";
import Date from "@/components/common/Date";
import Img from "@/components/common/ImgWithPlaceholder";
import DecoLine from "@/components/common/DecoLine";

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
            <h4 className="text-xs mb-2 xl:text-sm 2xl:text-base">WORK</h4>
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
            <LineList2 posts={filterPosts} />
          ) : (
            <GalleryList posts={filterPosts} />
          )}
        </div>
      </div>
    </LandingBox>
  );
}

export function LineList2({ posts }: { posts: WorkPost[] }) {
  const { getCategoryUrl } = useWorkPosts();
  return (
    <motion.ul layout layoutRoot>
      <AnimatePresence>
        {posts.map((post, idx) => (
          <motion.li
            layout
            key={post.slug}
            viewport={{ once: true }}
            initial={{ opacity: 0, bottom: -50 }}
            animate={{ opacity: 1, bottom: 0 }}
            transition={{
              delay: idx * 0.08,
              duration: 0.7,
              ease: [0, 0.55, 0.45, 1],
            }}
            className="relative flex flex-row justify-stretch items-stretch pb-4 min-h-[4rem] md:min-h-[7rem] xl:min-h-[9rem] last:border-b border-base-content"
            // @ts-ignore
            style={{ "--post-color": post.color }}
          >
            <Link
              href={getCategoryUrl(post.category)}
              className="block hover:border-primary hover:text-primary hover:font-bold border-t border-base-content pt-2 flex-[2] shrink-0 uppercase font-extralight md:text-2xl leading-none group"
              style={{ overflowWrap: "anywhere" }}
            >
              <Icons.chevronDoubleUp
                width={20}
                height={20}
                className="hidden group-hover:inline-block align-top"
              />
              {post.category.replaceAll("-", " ")}
            </Link>
            <Link
              href={post.url || "/"}
              className={`border-t border-base-content hover:border-[var(--post-color)] pt-2 flex-[3] md:flex-[4] xl:flex-[6] shrink-0 flex flex-row group`}
            >
              <div className="pr-4 group-hover:font-black group-hover:text-[var(--post-color)] xl:group-hover:text-4xl flex-[2] shrink-0 font-semibold text-xl md:text-2xl break-keep leading-none whitespace-pre-wrap">
                {post.title.replaceAll("〈", "\n〈")}
                <Icons.arrowUpRight
                  width={20}
                  height={20}
                  className="hidden group-hover:inline-block align-top"
                />
              </div>
              <div className="hidden xl:block flex-[2] shrink-0 relative">
                <div className="pointer-events-none opacity-0 group-hover:opacity-100 z-[1] transition-all max-w-none w-full absolute top-6 left-0 -translate-y-1/2 2xl:scale-110 shadow-2xl">
                  <Img
                    src={post.image}
                    width={400}
                    height={400}
                    className={` w-full h-full object-cover`}
                  />
                </div>
              </div>
              <div className="group-hover:opacity-100 group-hover:text-[var(--post-color)] hidden md:block flex-[2] shrink-0 opacity-25 ">
                <div className="pl-[50%]">
                  {post.startDate && (
                    <>
                      <Date dateString={post.startDate} />
                      <br />
                      {"-"}
                      <br />
                    </>
                  )}
                  <Date dateString={post.date} />
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
