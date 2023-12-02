"use client";

import Img from "@/components/common/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import { default as DateTime } from "@/components/common/Date";
import Link from "next/link";
import { WorkPost } from "contentlayer/generated";
import { Icons } from "@/components/common/Icons/Icons";
import { motion, useAnimate, useInView, Variant } from "framer-motion";
import SvgTitle from "@/assets/svg/index/title_text.svg";
import SvgTitle_Deco from "@/assets/svg/index/title_deco.svg";
import { useEffect } from "react";
import { DesignSection } from "./DesignSection";
import { AboutMePage } from "./AboutMePage";

export default function LandingPage(params: any) {
  const { allPosts } = useWorkPosts();
  return (
    <>
      <HiPage />
      <AboutMePage />
      <WorksSection title={`Animation`} categories={["Animation"]}>
        <div className="flex flex-col items-center gap-60 mb-32">
          {allPosts
            .filter((p) => p.category == "Animation")
            .reverse()
            .map((post) => (
              <div key={post.title} className="w-3/4 relative">
                <div className="w-full">
                  <Img
                    src={post.image}
                    width={1280}
                    height={720}
                    className={`w-full`}
                  />
                </div>
                <div className=" absolute bottom-[-5em] right-[-10%] w-[560px] h-auto pl-20 pt-12 bg-base-content break-keep flex flex-col gap-4">
                  <h1 className="text-6xl font-extrabold">{post.title}</h1>
                  {post.tag && (
                    <TagOl
                      data={post.tag}
                      parentClassName=" text-sm flex flex-row flex-wrap gap-3"
                    />
                  )}
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: post.description?.html || "",
                    }}
                  />
                  <MoreBtn url={post.url} />
                </div>
              </div>
            ))}
        </div>
      </WorksSection>
      <WorksSection title={`Programming`} categories={["Programming"]}>
        <div className="flex flex-col lg:flex-row items-stretch justify-end gap-5">
          <div className="flex-1 hidden xl:block"></div>
          {allPosts
            .filter((p) => p.category == "Programming")
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
                className="group flex-1 flex flex-col justify-between pt-5 border-t border-[var(--post-color)] h-auto"
                onClick={() => {
                  console.log("악!");
                }}
              >
                <div className="text-[var(--post-color)] text-7xl font-black opacity-20">
                  {"0" + (idx + 1)}
                </div>
                <div className="relative h-auto my-5">
                  <h4 className="text-xl lg:text-2xl font-extrabold mb-3 break-keep">
                    {post.title}
                  </h4>
                  <p className="w-2/3 break-keep text-base mb-10 opacity-50">
                    {post.description?.raw}
                  </p>
                  {post.tag && (
                    <TagOl
                      data={post.tag}
                      parentClassName={`flex flex-row gap-3 mb-7 text-sm`}
                      childColorClassName={`text-base-100 stroke-[var(--post-color)] fill-none stroke hover:bg-accent hover:stroke-transparent`}
                    />
                  )}
                  <MoreBtn
                    url={post.url}
                    colorClassName={" text-[var(--post-color)]"}
                  />
                </div>
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <Img
                    src={post.image}
                    width={200}
                    height={200}
                    style={{ transitionDuration: "1s" }}
                    className={`object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform`}
                  />
                </div>
              </motion.div>
            ))}
        </div>
      </WorksSection>
      <DesignSection />
      <WorksSection
        title={`Thank you<br />for reading!`}
        categories={[
          { name: "CONTACT", href: "/portfolio/contact" },
          { name: "WORKS", category: "NULL" },
        ]}
      >
        <></>
      </WorksSection>
    </>
  );
}

function MoreBtn({
  url,
  colorClassName,
}: {
  url?: string;
  colorClassName?: string;
}) {
  return (
    <Link
      href={url || "/"}
      className={"block font-extrabold group " + colorClassName}
    >
      MORE
      <Icons.arrowRight
        width={20}
        height={20}
        className=" align-sub stroke-current hidden group-hover:inline-block"
      />
    </Link>
  );
}

export function LandingBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className: any;
}) {
  return (
    <div
      className={
        " w-screen min-h-screen flex justify-center items-center " + className
      }
    >
      <div className="w-screen h-full max-w-[1920px] relative">{children}</div>
    </div>
  );
}

function HiPage() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [width, height] = [550, 450];
  const commonEase = [0, 0.55, 0.45, 1];

  useEffect(() => {
    if (isInView) {
      animate(
        "svg:first-child",
        { strokeDashoffset: 0 },
        { delay: 2, duration: 2, ease: [0, 0.55, 0.45, 1] }
      );
      animate(
        "svg:not(:first-child)",
        { strokeDashoffset: 0 },
        { delay: 1, duration: 2, ease: [0, 0.55, 0.45, 1] }
      );
    }
  }, [isInView]);

  return (
    <LandingBox
      className={`h-screen bg-base-100 bg-[url('/img/index/bg.jpg')] bg-cover bg-fixed bg-blend-color-burn`}
    >
      <div
        ref={scope}
        className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full xl:w-1/3 max-w-2xl`}
      >
        <SvgTitle
          width={width}
          height={height}
          style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
          className={`fill-primary w-full h-full`}
        />
        <SvgTitle_Deco
          width={width}
          height={height}
          style={{ strokeDasharray: 500, strokeDashoffset: 500 }}
          className={`absolute top-0 left-0 z-[-1] stroke-secondary w-full h-full`}
        />
      </div>
    </LandingBox>
  );
}

type workSectionCategoryType =
  | string
  | { href: string; name: string }
  | { category: string; name: string };

export function WorksSection({
  children,
  title,
  description = `국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다.
  국회의 정기회는 법률이 정하는 바에 의하여 매년 1회 집회되며, 국회의
  임시회는 대통령 또는 국회재적의원 4분의 1 이상의 요구에 의하여
  집회된다.`,
  categories = [],
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
  categories?: workSectionCategoryType[];
}) {
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

  return (
    <LandingBox className={` bg-base-content text-base-100 `}>
      <div className="p-4 lg:p-10 my-[25vh]">
        <h1 className="relative font-bolc text-primary text-9xl uppercase flex gap-3">
          <motion.span
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            viewport={{ once: true }}
            className="relative origin-bottom-left inline-block"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </h1>
        {description && (
          <div className=" w-full max-w-xs mt-8 opacity-20">{description}</div>
        )}
        <div className="pt-24 px-5">{children}</div>
        <div className=" w-full pt-32 flex flex-col gap-16 lg:pl-[50%] text-2xl md:text-4xl lg:text-4xl 2xl:text-6xl">
          {categories.map((category) => (
            <Link
              href={GetCtUrl(category)}
              className="block whitespace-nowrap relative opacity-30 transition-opacity hover:opacity-100 uppercase border-b group overflow-hidden leading-none"
              key={GetCtName(category)}
            >
              <span className=" inline-block whitespace-nowrap w-[3em] mr-2 text-center relative -left-[3em] font-[10] opacity-30 group-hover:left-0 transition-all ">
                MORE
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

export function TagOl({
  data,
  parentClassName = "flex flex-wrap gap-3 flex-row items-center",
  childColorClassName = "text-base-content stroke stroke-base-content fill-none hover:text-accent hover:stroke-accent",
  showCount = false,
  selectedChild = "",
  selectedChildClass = "bg-accent fill-none text-base-100",
}: {
  data: string[];
  parentClassName?: string;
  childColorClassName?: string;
  showCount?: boolean;
  selectedChild?: string;
  selectedChildClass?: string;
}) {
  const { getTagUrl, allPosts } = useWorkPosts();
  return (
    <ol className={parentClassName}>
      {data.map((tag) => (
        <li key={tag} className={"leading-snug "}>
          <Link
            href={getTagUrl(tag)}
            className={
              "relative whitespace-nowrap w-auto transition-colors py-1 pr-2 my-px rounded-tl-full rounded-bl-full" +
              " " +
              (tag == selectedChild ? selectedChildClass : childColorClassName)
            }
          >
            <Icons.tag
              width={20}
              height={20}
              className="inline-block h-[1em] -m-px mr-0 stroke-2 align-[-0.05em]"
            />
            {tag}
            {showCount && (
              <span className="text-xs align-top pl-1">
                {allPosts.reduce(
                  (count, post) =>
                    post.tag?.includes(tag) ? count + 1 : count,
                  0
                )}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ol>
  );
}
