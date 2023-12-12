"use client";

import Link from "next/link";
import { WorksSection } from "./WorksSection";
import { IntroData as d } from "@/libs/SectionDatas";
import { TagOl } from "../comp/TagOl";
import useWorkPosts from "@/hooks/useWorkPosts";
import { useMemo } from "react";

export function IntroSection() {
  const { allPosts } = useWorkPosts();
  const tagsByCategory = useMemo<string[][]>(() => {
    return d.abilityData.map((data: any) => {
      return Array.from(
        new Set(
          allPosts.reduce(
            (list, post) =>
              post.tag != undefined && data.categories.includes(post.category)
                ? [...list, ...post.tag]
                : list,
            [] as string[]
          )
        )
      ).sort();
    });
  }, [allPosts]);

  return (
    <WorksSection
      title={d.title}
      landingClassName={`bg-secondary text-base-content`}
      svg_widthclass={`aspect-w-10 aspect-h-2`}
      Title_svg={d.titleSvg}
      categories={d.category}
      description={d.description}
    >
      <div className="flex xl:-mr-[1em] flex-col sm:flex-row isolate">
        {d.abilityData.map((data: any, idx: number) => (
          <div
            key={idx}
            className="flex flex-1 -my-2 sm:my-0 sm:-mx-2 shrink-0 flex-col items-center"
          >
            <Link
              href={`#${data.title}`}
              className={
                " transition-transform hover:scale-105 active:scale-90 rounded-[100%] mix-blend-screen w-full h-auto text-center py-12 sm:py-24 " +
                data.style
              }
            >
              <p>
                <span className="opacity-70">{data.sub}</span>
                <br />
                <span className="text-xl xl:text-2xl uppercase font-black">
                  {data.title}
                </span>
              </p>
            </Link>
            <div className=" hidden sm:block mr-[1em] mt-4 pt-4 border-t w-3/4">
              <TagOl
                parentClassName="flex flex-col flex-wrap gap-3"
                childColorClassName="text-base-100 fill-accent hover:bg-accent hover:text-base-100"
                data={tagsByCategory[idx]}
              />
            </div>
          </div>
        ))}
      </div>
    </WorksSection>
  );
}
