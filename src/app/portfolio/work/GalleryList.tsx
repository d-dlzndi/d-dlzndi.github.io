"use client";
import { AnimatePresence, motion } from "framer-motion";
import { WorkPost } from "contentlayer/generated";
import sw from "@/styles/worklist.module.css";
import { WorkImage } from "@/components/legacy/page/WorkPage";

export function GalleryList({ posts }: { posts: WorkPost[] }) {
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
