"use client";

import { Icons } from "@/components/common/Icons/Icons";
import Img from "@/components/common/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { WorkPost } from "contentlayer/generated";
import { useState } from "react";
import Date from "@/components/common/Date";
import styles from "./workpage.module.scss";
import s from "./categorylist.module.scss";
import sw from "@/styles/worklist.module.css";
import { WorkImage } from "@/components/page/WorkPage";

export default function ScreenWorkList() {
  const searchParam = useSearchParams();
  const category = searchParam.get("category");
  const [mode, setMode] = useState<"list" | "gallery">("gallery");

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
          <button onClick={() => setMode("list")} className="btn btn-ghost">
            <Icons.list
              width={20}
              height={20}
              className={`${mode != "list" ? "opacity-25" : ""}`}
            />
          </button>
          <button onClick={() => setMode("gallery")} className="btn btn-ghost">
            <Icons.gallery
              width={20}
              height={20}
              className={`${mode != "gallery" ? "opacity-25" : ""}`}
            />
          </button>
        </div>
      </div>
      <div className=" min-h-[100px] border-primary">
        {mode == "list" && <LineList posts={posts} />}
        {mode == "gallery" && <GalleryList posts={posts} />}
      </div>
    </>
  );
}

function LineList({ posts }: { posts: WorkPost[] }) {
  return (
    <motion.ul layout layoutRoot className="flex flex-col">
      <AnimatePresence>
        {posts.map((post, idx) => (
          <motion.li
            layout
            key={post.slug}
            viewport={{ once: true }}
            initial={{ opacity: 0, left: -50 }}
            animate={{ opacity: 1, left: 0 }}
            transition={{
              delay: idx * 0.08,
              duration: 0.7,
              ease: [0, 0.55, 0.45, 1],
            }}
            className=" min-h-fit min-w-fit border-t last:border-b relative"
          >
            <motion.div className={styles.listdiv}>
              <div className={styles.category}>
                <Link
                  href={{
                    href: "/portfolio/work",
                    query: { category: post.category },
                  }}
                  className={styles.categoryLink}
                >
                  <span className={styles.ctspan}>{post.category}</span>
                  <span className={styles.ctmore}>
                    <Icons.chevronDoubleUp
                      width={15}
                      height={15}
                      className=" inline-block"
                    />{" "}
                    MORE POSTS
                  </span>
                </Link>
              </div>
              <Link href={post.url || ""} className={styles.listlink}>
                <div className={styles.title}>
                  <h4 className={styles.titlespan}>{post.title}</h4>
                  <span className={styles.titlemore}>
                    <Icons.arrowRight
                      width={15}
                      height={15}
                      className="inline-block"
                    />{" "}
                    READ MORE
                  </span>
                </div>
                <div className={styles.thumb + " hidden md:block"}>
                  <div className={"aspect-w-4 aspect-h-3 w-full"}>
                    <Img
                      src={post.image}
                      alt={post.slug}
                      className="absolute  object-cover top-0 left-0 w-full h-full origin-center"
                    />
                  </div>
                </div>
                <div className={styles.date}>
                  <div className=" pl-[50%]">
                    {post.startDate && (
                      <>
                        <Date dateString={post.startDate} /> <br />
                        {"-"}
                        <br />
                      </>
                    )}
                    <Date dateString={post.date} />
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}

function GalleryList({ posts }: { posts: WorkPost[] }) {
  return (
    <motion.div
      layout
      layoutRoot
      className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1px]"
    >
      <AnimatePresence>
        {posts.map((post, idx) => (
          <motion.div
            layout
            key={post.slug}
            viewport={{ once: true }}
            initial={{ opacity: 0, top: 20 }}
            whileInView={{ opacity: 1, top: 0 }}
            exit={{ opacity: 0, top: -20, transition: { duration: 0.3 } }}
            transition={{
              delay: idx % 2 == 0 ? 0.2 : 0.3,
              duration: 1,
              ease: [0, 0.55, 0.45, 1],
            }}
            //className="  relative"
            className={sw["work-thumb"] + " min-h-fit min-w-fit origin-center"}
          >
            <WorkImage post={post} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

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
    <ul className=" flex gap-3 flex-wrap">
      {categoryList.map((cate, idx) => (
        <li key={idx}>
          <Link
            className={`${cate == selectedCategory ? s.selected : ""} ${
              s.link
            }`}
            href={{
              href: getCategoryUrl(cate),
              query: { category: cate },
            }}
          >
            {cate}
          </Link>
        </li>
      ))}
    </ul>
  );
}
