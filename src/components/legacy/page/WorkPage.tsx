"use client";
import styles from "../../../components/pages/work/list/worklist.module.css";

import useWorkPosts from "@/hooks/useWorkPosts";
import { AnimatePresence, motion } from "framer-motion";
import { notFound } from "next/navigation";
import { WorkImage } from "../../pages/work/list/WorkImage";

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
