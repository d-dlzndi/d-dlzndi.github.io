"use client";
import useWorkPosts from "@/hooks/useWorkPosts";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Icons } from "@/components/common/Icons/Icons";
import { WorkPost } from "contentlayer/generated";
import Date from "@/components/common/Date";
import Img from "@/components/common/ImgWithPlaceholder";

export function LineList({ posts }: { posts: WorkPost[] }) {
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
                <div className="pointer-events-none opacity-0 group-hover:opacity-100 z-[1] transition-all max-w-none w-full absolute top-6 left-0 -translate-y-1/3 2xl:scale-110 shadow-2xl bg-[var(--post-color)]">
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
