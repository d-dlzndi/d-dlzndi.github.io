"use client";
import { Icons } from "@/components/common/Icons/Icons";
import Img from "@/components/common/design/ImgWithPlaceholder";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { WorkPost } from "contentlayer/generated";
import Date from "@/components/common/design/Date";
import styles from "./lineList.module.css";
import useWorkPosts from "@/hooks/useWorkPosts";

export function LineList({
  posts,
  categoryUse = true,
}: {
  posts: WorkPost[];
  categoryUse?: boolean;
}) {
  const { getCategoryUrl } = useWorkPosts();
  return (
    <>
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
              className=" min-h-fit min-w-fit border-t border-base-content last:border-b relative"
            >
              <motion.div className={styles.listdiv}>
                {categoryUse && (
                  <div className={styles.category}>
                    <Link
                      href={getCategoryUrl(post.category)}
                      className={styles.categoryLink}
                    >
                      <span className={styles.ctspan}>
                        {post.category.replaceAll("-", " ")}
                      </span>
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
                )}
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
                  {!categoryUse && (
                    <div className={styles.date}>
                      <div className="lg:pl-[50%]">
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
                  )}
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}

/**
  <div
        className="w-full h-[10em]" // 아래 여유공간용
      />
 */
