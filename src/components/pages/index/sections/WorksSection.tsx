"use client";
import useWorkPosts from "@/hooks/useWorkPosts";
import Link from "next/link";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { LandingBox } from "../LandingPage";

export type workSectionCategoryType =
  | string
  | { href: string; name: string; more: string }
  | { category: string; name: string; more: string };

export function WorksSection({
  children,
  title,
  Title_svg,
  svg_widthclass = "aspect-h-1 aspect-w-10",
  description = `국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다.국회의 정기회는 법률이 정하는 바에 의하여 매년 1회 집회되며, 국회의 시회는 대통령 또는 국회재적의원 4분의 1 이상의 요구에 의하여 집회된다.`,
  categories = [],
}: {
  children?: React.ReactNode;
  title: string;
  Title_svg: any;
  svg_widthclass?: string;
  description?: string;
  categories?: workSectionCategoryType[];
}) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "svg",
        { strokeDashoffset: 0, opacity: 1 },
        { delay: 0, duration: 2, ease: [0.33, 1, 0.68, 1] }
      );
    }
  }, [isInView]);

  const { getCategoryUrl } = useWorkPosts();
  const GetCtUrl = (category: workSectionCategoryType) => {
    if (typeof category == "string") return getCategoryUrl(category);
    if ("href" in category) return category.href;
    return getCategoryUrl(category.category);
  };
  const GetCtName = (category: workSectionCategoryType) => {
    if (typeof category == "string") return category;
    return category.name;
  };
  const GetCtMore = (category: workSectionCategoryType) => {
    if (typeof category == "string") return "MORE";
    return category.more;
  };

  const strokeLength = 600;

  return (
    <LandingBox
      className={`bg-base-content text-base-100 overflow-y-auto overflow-x-hidden`}
    >
      <div className="p-4 md:p-10 my-[10vh] sm:my-[15vh] md:my-[20vh]">
        <h1
          id={title}
          ref={scope}
          className={
            "relative scroll-mt-20 origin-bottom-left w-full max-w-screen-xl " +
            svg_widthclass
          }
        >
          <span className=" hidden">{title}</span>
          <Title_svg
            style={{
              strokeDasharray: strokeLength,
              strokeDashoffset: strokeLength,
            }}
            className={` opacity-0 w-full h-full stroke-none md:stroke-primary fill-primary md:fill-none ml-[-5px]`}
          />
        </h1>
        {description && (
          <div className=" w-full max-w-xs mt-4 opacity-40 whitespace-pre-wrap leading-relaxed text-justify">
            {description}
          </div>
        )}
        {children && <div className="pt-12 md:pt-24 xl:px-5">{children}</div>}
        <div className=" w-full pt-20 lg:pt-32 flex flex-col gap-16 lg:pl-[50%] text-2xl md:text-4xl lg:text-4xl 2xl:text-6xl">
          {categories.map((category) => (
            <Link
              href={GetCtUrl(category)}
              className="block whitespace-nowrap relative opacity-30 transition-opacity hover:opacity-100 uppercase border-b group overflow-hidden leading-none"
              key={GetCtName(category)}
            >
              <span className=" inline-block whitespace-nowrap w-[3em] mr-2 relative -left-[3em] font-[10] opacity-30 group-hover:left-0 transition-all ">
                {GetCtMore(category)}
              </span>
              {GetCtName(category)
                .split("")
                .map((str, idx) => (
                  <span
                    key={idx}
                    className="font-thin relative -left-[3em] group-hover:left-0 group-hover:font-extrabold group-hover:text-secondary transition-all"
                  >
                    {str.replaceAll("-", " ")}
                  </span>
                ))}
              <span className="block w-10 h-px border-b origin-top-right absolute bottom-[-1px] right-0 rotate-45" />
              <span className="block w-10 h-px border-b origin-top-right absolute bottom-[-1px] right-0 rotate-45 group-hover:right-3 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </LandingBox>
  );
}
