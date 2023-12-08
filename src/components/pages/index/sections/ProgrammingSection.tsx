"use client";
import Img from "@/components/common/design/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import { Icons } from "@/components/common/Icons/Icons";
import { motion } from "framer-motion";
import { WorksSection } from "./WorksSection";
import { TagOl } from "../comp/TagOl";
import useCustomRouter from "@/hooks/useCustomRouter";
import { ProgrammingData } from "../../../../libs/SectionDatas";

export function ProgrammingSection() {
  const { allPosts } = useWorkPosts();
  const { push } = useCustomRouter();

  return (
    <WorksSection
      title={ProgrammingData.title}
      description={ProgrammingData.description}
      Title_svg={ProgrammingData.titleSvg}
      categories={ProgrammingData.category}
    >
      <div className="flex flex-col xl:flex-row items-stretch justify-end gap-5">
        <div className="flex-1 hidden 2xl:block"></div>
        {allPosts
          .filter((p) =>
            (ProgrammingData.category as string[]).includes(p.category)
          )
          .slice(0, 3)
          .map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, translateX: 30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: idx * 0.4,
                ease: [0, 0.55, 0.45, 1],
              }}
              //@ts-ignore
              style={{ "--post-color": post.color }}
              className="group relative flex-1 shrink-0 w-full flex flex-col justify-between pt-5 border-t border-[var(--post-color)] h-auto cursor-pointer"
              onClick={(e) => {
                push(post.url || "/");
              }}
            >
              <span className="opacity-0 text-2xl text-[var(--post-color)] group-hover:opacity-100 transition-opacity absolute top-3 right-1">
                <Icons.arrowUpRight
                  width={40}
                  height={40}
                  className="inline-block stroke-[var(--post-color)] stroke-2"
                />
              </span>
              <span className="block text-[var(--post-color)] text-7xl font-black opacity-20">
                {"0" + (idx + 1)}
              </span>
              <div className="flex flex-col sm:flex-row sm:gap-5 xl:flex-col xl:gap-0 relative h-auto mt-8">
                <div className="flex-1">
                  <h4 className="group-hover:text-[var(--post-color)] transition-colors text-xl xl:text-2xl font-extrabold mb-3 break-keep">
                    {post.title}
                  </h4>
                  <p className="w-2/3 break-keep text-base opacity-50">
                    {post.description?.raw}
                  </p>
                  {post.tag && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <TagOl
                        data={post.tag}
                        parentClassName={`flex flex-row flex-wrap gap-3 mt-6 text-sm`}
                        childColorClassName={`text-base-100 fill-[var(--post-color)] stroke hover:bg-accent hover:stroke-transparent hover:fill-accent`}
                      />
                    </div>
                  )}
                </div>
                <span className=" w-full flex-1 aspect-w-16 sm:aspect-none xl:aspect-w-16 aspect-h-9 overflow-hidden block mt-10 sm:mt-0 xl:mt-10">
                  <Img
                    src={post.image}
                    width={200}
                    height={200}
                    style={{ transitionDuration: "1s" }}
                    className={`object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform`}
                  />
                </span>
              </div>
            </motion.div>
          ))}
      </div>
    </WorksSection>
  );
}
