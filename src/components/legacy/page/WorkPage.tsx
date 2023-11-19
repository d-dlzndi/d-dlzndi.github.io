"use client";
import styles from "@/styles/worklist.module.css";

import Link from "next/link";
import ImgWithPlaceholder from "@/components/common/ImgWithPlaceholder";
import Date from "@/components/common/Date";
import useWorkPosts from "@/hooks/useWorkPosts";
import { AnimatePresence, motion } from "framer-motion";
import { notFound } from "next/navigation";
import { WorkPost } from "contentlayer/generated";

export default function WorkPage({ params }: { params: { category: string } }) {
  const { filterPosts, getCategoryUrl } = useWorkPosts({
    category: params.category,
  });

  if (!filterPosts || filterPosts.length == 0) return notFound();

  return (
    <div
      className={
        styles["gallery-contents"] +
        " w-full pt-24 pr-10 pb-32 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      }
    >
      <AnimatePresence>
        {filterPosts.map((post, idx) => {
          return (
            <motion.div
              key={`${post.category}_${post.slug}`}
              initial={{ opacity: 0, scale: 1, translateX: -10 }}
              animate={{ opacity: 1, scale: 1, translateX: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: idx * 0.05,
                ease: [0.76, 0, 0.24, 1],
                duration: 0.5,
              }}
              className={styles["work-thumb"] + " rounded-2xl origin-center"}
            >
              <WorkImage post={post} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export function WorkImage({ post }: { post: WorkPost }) {
  return (
    <Link
      href={post.url || "/"}
      className="block relative w-full h-full aspect-w-16 aspect-h-9"
    >
      <ImgWithPlaceholder
        src={post.image}
        alt={post.title}
        width={400}
        height={300}
        className={
          styles["img"] + " w-full h-full object-center object-cover scale-110"
        }
        unoptimized={false}
      />
      <div
        className={
          styles["work-thumb-text"] +
          " " +
          styles["bg"] +
          " backdrop-blur-sm backdrop-saturate-50 mix-blend-multiply "
        }
        style={{ backgroundColor: post?.color || "oklch(var(--p))" }}
      ></div>
      <div
        className={`${styles["work-thumb-text"]} ${styles["inner"]} bg-clip-text`}
      >
        {post.category && (
          <span
            className={
              styles["category"] +
              " block absolute top-5 left-5 font-extrabold uppercase text-4xl break-keep"
            }
            dangerouslySetInnerHTML={{
              __html: post.category.replaceAll("-", "<br />"),
            }}
          />
        )}
        <p
          className={
            styles["date"] + " absolute bottom-5 left-5 font-extralight"
          }
        >
          <Date dateString={post.startDate} />
          <br />
          -
          <br />
          <Date dateString={post.date} />
        </p>
        <h4
          className={
            styles["title"] +
            " bottom-5 right-5 font-medium text-right text-2xl"
          }
        >
          {post.title}
        </h4>
      </div>
    </Link>
  );
}
