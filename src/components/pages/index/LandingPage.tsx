"use client";

import Img from "@/components/common/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import { default as DateTime } from "@/components/common/Date";
import Link from "next/link";
import { WorkPost } from "contentlayer/generated";
import { Icons } from "@/components/common/Icons/Icons";
import {
  motion,
  useAnimate,
  useInView,
  Variant,
  Variants,
} from "framer-motion";
import SvgTitle from "@/assets/svg/index/title_text.svg";
import SvgTitle_Deco from "@/assets/svg/index/title_deco.svg";
import { useEffect } from "react";
import { DesignSection } from "./DesignSection";
import { SkillTable } from "./SkillTable";
import { RadialProgress } from "./RadialProgress";
import { TimeLine } from "./TimeLine";

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
                initial={{ opacity: 0, translateX: 70 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  delay: idx * 0.4,
                  ease: [0, 0.55, 0.45, 1],
                }}
                //@ts-ignore
                style={{ "--post-color": post.color }}
                className="flex-1 flex flex-col justify-between pt-5 border-t border-[var(--post-color)] h-auto"
              >
                <div className="text-7xl font-black opacity-10">
                  {"0" + (idx + 1)}
                </div>
                <div className="relative h-auto my-5">
                  <h4 className="text-3xl font-extrabold mb-3 break-keep">
                    {post.title}
                  </h4>
                  <p className="w-2/3 break-keep text-base mb-10 opacity-50">
                    {post.description?.raw}
                  </p>
                  {post.tag && (
                    <TagOl
                      data={post.tag}
                      parentClassName={`flex flex-row gap-3 mb-7 text-sm`}
                      childColorClassName={`text-base-100 stroke-base-300 fill-none stroke hover:bg-accent hover:stroke-transparent`}
                    />
                  )}
                  <MoreBtn url={post.url} />
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  <Img
                    src={post.image}
                    width={200}
                    height={200}
                    className={`object-cover w-full h-full`}
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

function MoreBtn({ url }: { url?: string }) {
  return (
    <Link href={url || "/"} className="block text-primary font-extrabold group">
      <Icons.chevronDoubleRight
        width={20}
        height={20}
        className=" align-sub stroke-current hidden group-hover:inline-block"
      />
      MORE
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

const skills = [
  {
    name: <>Maya</>,
    progress: 80,
  },
  {
    name: <>Unreal Engine</>,
    progress: 50,
  },
  { name: "ZBrush", progress: 70 },
  { name: "Substance Painter", progress: 50 },
  { name: "After Effect", progress: 70 },
  { name: "Premiere", progress: 80 },
  { name: "Illustrator", progress: 70 },
  { name: "Photoshop", progress: 65 },
  { name: "Aseprite", progress: 70 },
  { name: "JavaScript", progress: 80 },
  { name: "TypeScript", progress: 40 },
  { name: "C#", progress: 60 },
  { name: "Python", progress: 50 },
];

const keywords = [
  "도전적인",
  "끈질긴",
  "호기심이 많은",
  "경청하는",
  "늘 상상하는",
];

type aboutType = {
  title: string;
  textContent?: JSX.Element;
  content?: JSX.Element;
};

function AboutMePage() {
  const { allPosts } = useWorkPosts();

  const mainImg = "/img/index/profile.jpg";

  const abilityText = `저의 좌우명은 <code class="w-auto inline-block font-bold rounded-md bg-secondary italic text-secondary-content px-2">0보다 0.1이 낫다</code> 입니다.<br /><br />비록 당장의 결과물에선 눈에 띄지 않더라도, 늘 더 나은 방안이 있을지 고민합니다. 할 수 없는 일로써 미리 선 그어두는 것을 지양하고, 할 수 있는 일의 경계를 넓히기를 즐깁니다.`;

  const abilityData = [
    {
      sub: "3D + 2D",
      title: "Animation",
      data: ["Animation"],
      style: "bg-secondary text-secondary-content",
    },
    {
      sub: "WEB + GAME",
      title: "Programming",
      data: ["Programming"],
      style: "bg-base-300 text-secondary-content",
    },
    {
      sub: "2D + 3D",
      title: "DESIGN",
      data: ["Graphic-Design", "Digital-Sculpting"],
      style: "bg-neutral text-neutral-content",
    },
  ];

  const educationData = [
    { name: "화정고등학교 졸업", year: "2019.02." },
    { name: "강원대학교 영상디자인전공 졸업", year: "2024.02." },
  ];

  const aboutData: aboutType[] = [
    {
      title: "ability",
      textContent: (
        <p
          className=" break-keep"
          dangerouslySetInnerHTML={{
            __html: abilityText,
          }}
        />
      ),
      content: (
        <>
          <div>
            <div className="flex xl:-mr-[1em] flex-col sm:flex-row isolate">
              {abilityData.map((data, idx) => (
                <div
                  key={idx}
                  className="flex flex-1 -my-2 sm:my-0 sm:-mx-2 shrink-0 flex-col items-center"
                >
                  <div
                    className={
                      " rounded-full mix-blend-screen w-[100%] xl:w-[15em] xl:h-[15em] text-center py-12 sm:py-24 " +
                      data.style
                    }
                  >
                    <p>
                      <span className="opacity-50">{data.sub}</span>
                      <br />
                      <span className=" xl:text-xl 2xl:text-2xl uppercase font-black">
                        {data.title}
                      </span>
                    </p>
                  </div>
                  <div className=" hidden sm:block mr-[1em] mt-4 pt-4 border-t w-3/4">
                    <TagOl
                      parentClassName="flex flex-col flex-wrap gap-3"
                      childColorClassName="text-base-100 fill-accent hover:bg-accent hover:text-base-100"
                      data={...Array.from(
                        new Set(
                          data.data.reduce(
                            (datalist, category) => [
                              ...datalist,
                              ...allPosts.reduce(
                                (list, post) =>
                                  post.tag != undefined &&
                                  post.category === category
                                    ? [...list, ...post.tag]
                                    : list,
                                [] as string[]
                              ),
                            ],
                            [] as string[]
                          )
                        )
                      ).sort()}
                    />
                    {}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ),
    },
    {
      title: "skill",
      content: (
        <>
          <div className="flex justify-around flex-wrap md:flex-nowrap gap-3 pb-8">
            <RadialProgress
              skills={skills.slice(0, 3)}
              colors={["text-secondary"]}
            />
          </div>
          <SkillTable skills={skills.slice(3)} colors={["progress-info"]} />
        </>
      ),
    },
    {
      title: "Education",
      textContent: <TimeLine data={educationData} />,
    },
    {
      title: "experience",
      textContent: (
        <ol className=" list-disc flex flex-col gap-5">
          {[
            {
              title: "제목을 입력합니다.",
              desc: ` 국회의 정기회는 법률이 정하는 바에 의하여 매년 1회 집회되며, 국회의
          임시회는 대통령 또는 국회재적의원 4분의 1 이상의 요구에 의하여
          집회된다.`,
            },
            {
              title: "제목을 입력합니다.",
              desc: ` 국회의 정기회는 법률이 정하는 바에 의하여 매년 1회 집회되며, 국회의
          임시회는 대통령 또는 국회재적의원 4분의 1 이상의 요구에 의하여
          집회된다.`,
            },
            {
              title: "제목을 입력합니다.",
              desc: ` 국회의 정기회는 법률이 정하는 바에 의하여 매년 1회 집회되며, 국회의
          임시회는 대통령 또는 국회재적의원 4분의 1 이상의 요구에 의하여
          집회된다.`,
            },
          ].map((data) => (
            <li key={data.title}>
              <h4 className="text-lg">{data.title}</h4>
              <p className="opacity-50 text-sm">{data.desc}</p>
            </li>
          ))}
        </ol>
      ),
    },
  ];

  const data = {
    name: "김서윤",
    eng_name: "Seo Yun Kim",
    birth: "2001. 01. 29.",
    phone: "+82 10-1234-1232",
    email: "sksoyks@naver.com",
  };

  const variants: Variants = {
    //Variants
    start: {
      opacity: 0,
      translateY: 100,
    },
    end: (c: number) => ({
      opacity: 1,
      translateY: 0,
      transition: { delay: c * 0.1, duration: 1, ease: [0, 0.55, 0.45, 1] },
    }),
  };

  return (
    <LandingBox className={`bg-primary text-base-100`}>
      <div className="flex flex-col xl:flex-row place-items-stretch min-h-screen md:px-10 md:py-20">
        <div className="h-96 xl:h-auto xl:w-1/4 relative ">
          <Img
            src={mainImg}
            className={` sticky block top-0 w-full h-full xl:max-h-screen object-cover grayscale contrast-50 `}
            width={1200}
            height={800}
          />
        </div>
        <div className=" xl:w-3/4 mt-20 md:mt-40 xl:mt-[50vh] ">
          <h1 className="pl-10 font-bold text-9xl text-secondary">ABOUT ME</h1>
          <div className="pt-20 flex gap-3 justify-stretch flex-col md:flex-row">
            <div className="flex-1"></div>
            <div className="flex-[2]">
              <p>
                <span className=" font-extrabold text-3xl pb-5">
                  {data.name}
                </span>
                <br />
                <span className=" text-xl">{data.eng_name}</span>
              </p>
              <p className="pt-5 font-light">
                <span>{data.birth}</span>
                <br />
                <span>{data.phone}</span>
                <br />
                <span>{data.email}</span>
                <br />
              </p>
            </div>
            <div className="flex-[3] text-xl flex flex-col gap-2 place-items-start">
              {keywords.map((s, idx) => (
                <span key={idx} className="px-3 py-[2px] border rounded-full">
                  <Icons.sharp
                    width={20}
                    height={20}
                    className=" fill-current inline-block"
                    style={{ verticalAlign: "-.12em" }}
                  />
                  {s.replaceAll(" ", "-")}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-44 flex justify-stretch">
            <div className="flex-1 flex flex-col">
              {aboutData.map((cont, idx) => (
                <motion.div
                  key={idx}
                  variants={variants}
                  initial={"start"}
                  whileInView={"end"}
                  viewport={{ once: true }}
                  className="xl:w-[83%] xl:pl-[17%] xl:flex-row relative pt-14 flex flex-col shrink-0 gap-3 mb-60"
                >
                  <div className="absolute top-0 left-0 xl:left-5 w-full xl:w-[calc(100%-1.25em)] h-px bg-secondary" />
                  <motion.h4
                    custom={1}
                    variants={variants}
                    initial={"start"}
                    whileInView={"end"}
                    viewport={{ once: true }}
                    className="flex-[1] shrink-0 font-extrabold uppercase text-3xl text-secondary"
                  >
                    {cont.title}
                  </motion.h4>
                  <div className="flex-[3] shrink-0 flex flex-col xl:items-end">
                    {cont.textContent && (
                      <motion.div
                        custom={2}
                        variants={variants}
                        initial={"start"}
                        whileInView={"end"}
                        viewport={{ once: true }}
                        className="md:w-2/3 mb-24"
                      >
                        {cont.textContent}
                      </motion.div>
                    )}
                    <motion.div
                      custom={3}
                      variants={variants}
                      initial={"start"}
                      whileInView={"end"}
                      viewport={{ once: true }}
                      className="w-full"
                    >
                      {cont.content}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
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
      <div className="p-10 my-[25vh]">
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
        <div className=" w-full pt-32 flex flex-col gap-16 lg:pl-[50%] text-xl md:text-4xl lg:text-4xl 2xl:text-6xl">
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
