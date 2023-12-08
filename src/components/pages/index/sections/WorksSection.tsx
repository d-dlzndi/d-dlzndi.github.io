"use client";
import useWorkPosts from "@/hooks/useWorkPosts";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LandingBox } from "../LandingPage";
import styles from "./WorksSection.module.css";

export type workSectionCategoryType =
  | string
  | { href: string; name: string; more: string }
  | { category: string; name: string; more: string };

export function WorksSection({
  children,
  title,
  Title_svg,
  svg_widthclass = "aspect-h-1 aspect-w-10",
  description,
  categories = [],
}: {
  children?: React.ReactNode;
  title: string;
  Title_svg: any;
  svg_widthclass?: string;
  description?: string;
  categories?: workSectionCategoryType[];
}) {
  const svgTitleRef = useRef(null);
  const isInView = useInView(svgTitleRef, { once: false });
  const [svgClass, setSvgClass] = useState("");
  const strokeLength = 600;
  const [svgStrokeLength, setSvgStrokeLength] = useState(strokeLength);
  useEffect(() => {
    if (isInView) {
      setSvgClass(styles.in_view);
      setSvgStrokeLength(0);
    } else {
      setSvgClass("");
      setSvgStrokeLength(strokeLength);
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

  return (
    <LandingBox
      className={`bg-base-content text-base-100 overflow-y-auto overflow-x-hidden`}
    >
      <div className="p-4 md:p-10 my-[15vh] md:my-[20vh] xl:my-[25vh]">
        <h1
          ref={svgTitleRef}
          id={title}
          className={
            "relative scroll-mt-20 origin-bottom-left w-full max-w-screen-xl " +
            svg_widthclass
          }
        >
          <span className=" hidden">{title}</span>
          <Title_svg
            style={{
              strokeDasharray: strokeLength,
              strokeDashoffset: svgStrokeLength,
            }}
            className={`${styles.svg_title} ${svgClass} w-full h-full stroke-none md:stroke-primary fill-primary md:fill-none ml-[-11px] lg:ml-[-5px] stroke-2 xl:stroke-1`}
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
