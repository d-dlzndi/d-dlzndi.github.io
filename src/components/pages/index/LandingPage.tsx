"use client";

import Img from "@/components/common/ImgWithPlaceholder";
import usePosts from "@/hooks/usePosts";
import { notFound } from "next/navigation";
import useWorkPosts from "@/hooks/useWorkPosts";
import { default as DateTime } from "@/components/common/Date";
import Link from "next/link";
import SlideShowText from "@/components/common/textEffect/SlideShowText";
import { WorkPost } from "contentlayer/generated";
import { Icons } from "@/components/common/Icons/Icons";
import { motion } from "framer-motion";

export default function LandingPage(params: any) {
  const { allPosts } = useWorkPosts();
  return (
    <>
      <HelloPage />
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
              <div
                key={post.title}
                className="flex-1 flex flex-col justify-between pt-5 border-t h-auto"
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
                      parentClassName={`flex flex-col gap-3 mb-7 text-sm`}
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
              </div>
            ))}
        </div>
      </WorksSection>
      <WorksSection
        title={`Design`}
        categories={["Digital-Sculpting", "Graphic-Design"]}
      >
        <>
          <div>
            {allPosts
              .reduce((list, p) => {
                if (
                  p.category == "Digital-Sculpting" ||
                  p.category == "Graphic-Design"
                )
                  return [...list, ...p.imageList];
                return list;
              }, [] as any[])
              .map((img, idx) => (
                <div
                  key={img.src}
                  className="inline-block w-[320px] h-[180px] relative border"
                >
                  <Img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={100}
                    height={100}
                    className={` absolute top-0 left-0 w-full h-full object-cover`}
                  />
                </div>
              ))}
          </div>
        </>
      </WorksSection>
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

function LandingBox({
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

function HelloPage() {
  const { allPosts } = usePosts();
  const indexPost = allPosts.find((allpost) => allpost.slug == "Intro");
  if (!indexPost) return notFound();

  return (
    <LandingBox className={`h-screen text-primary`}>
      <div className="flex flex-col mt-[30vh] lg:m-0 lg:flex-row gap-5 p-10 h-screen justify-stretch items-start lg:items-end text-primary relative">
        <SlideShowText
          textSource={indexPost.title.split("\\n")}
          className="text-5xl lg:text-[12vw] 2xl:text-[14em] w-full my-[-0.1em] leading-none font-black"
          delay={0.5}
        />
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 3, duration: 1 }}
          viewport={{ once: true }}
          className=" lg:absolute lg:top-1/3 lg:left-3/4 w-28 break-keep whitespace-pre"
          dangerouslySetInnerHTML={{ __html: indexPost.body?.html || "" }}
        />
      </div>
    </LandingBox>
  );
}

const skills = [
  { name: "Maya", progress: 80 },
  { name: "Unreal Engine", progress: 50 },
  { name: "ZBrush", progress: 70 },
  { name: "Substance Painter", progress: 50 },
  { name: "After Effect", progress: 70 },
  { name: "Premiere", progress: 80 },
  { name: "Illustrator", progress: 70 },
  { name: "Photoshop", progress: 65 },
  { name: "Aseprite", progress: 70 },
  { name: "Visual Studio 2022", progress: 70 },
  { name: "Visual Studio Code", progress: 90 },
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

  const aboutData: aboutType[] = [
    {
      title: "Education",
      textContent: (
        <TimeLine
          data={[
            { name: "화정고등학교 졸업", year: "2019.02." },
            { name: "강원대학교 영상디자인전공 졸업", year: "2024.02." },
          ]}
        />
      ),
    },
    {
      title: "ability",
      textContent: (
        <p>
          자기 소개를 여기에 입력합니다. 자기 소개를 여기에 입력합니다. 자기
          소개를 여기에 입력합니다. 자기 소개를 여기에 입력합니다. 자기 소개를
          여기에 입력합니다.
        </p>
      ),
      content: (
        <>
          <div>
            <div className="flex -mr-[1em] isolate">
              {[
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
                  style: "bg-accent text-accent-content",
                },
                {
                  sub: "2D + 3D",
                  title: "DESIGN",
                  data: ["Graphic-Design", "Digital-Sculpting"],
                  style: "bg-neutral text-neutral-content",
                },
              ].map((data, idx) => (
                <div
                  key={idx}
                  className="flex flex-1 shrink-0 flex-col items-center"
                >
                  <div
                    className={
                      " rounded-full mix-blend-screen w-[15em] h-[15em] text-center -ml-[1em] py-24 " +
                      data.style
                    }
                  >
                    <p>
                      <span className="opacity-50">{data.sub}</span>
                      <br />
                      <span className=" text-2xl uppercase font-black">
                        {data.title}
                      </span>
                    </p>
                  </div>
                  <div className="mr-[1em] mt-4 pt-4 border-t w-3/4">
                    <TagOl
                      parentClassName="flex flex-col flex-wrap gap-3"
                      childColorClassName=" bg-base-100 text-primary hover:bg-secondary"
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
          <div className="flex justify-around pb-8">
            <RadialProgress skills={skills.slice(0, 3)} />
          </div>
          <SkillTable
            skills={skills.slice(3)}
            colors={[
              "progress-info",
              "progress-success",
              "progress-warning",
              "progress-error",
            ]}
          />
        </>
      ),
    },
    {
      title: "experience",
      textContent: (
        <ol className=" list-disc">
          <li>안녕하세요</li>
          <li>안녕하세요</li>
          <li>안녕하세요</li>
          <li>안녕하세요</li>
        </ol>
      ),
    },
    {
      title: "activity",
      textContent: (
        <p>
          자기 소개를 여기에 입력합니다. 자기 소개를 여기에 입력합니다. 자기
          소개를 여기에 입력합니다. 자기 소개를 여기에 입력합니다. 자기 소개를
          여기에 입력합니다.
        </p>
      ),
    },
  ];

  const data = {
    name: "김서윤",
    eng_name: "Seo Yun Kim",
    birth: "2001.01.29.",
    phone: "+82 10-1234-1232",
    email: "sksoyks@naver.com",
  };

  return (
    <LandingBox className={`bg-primary text-base-100`}>
      <div className="flex flex-col xl:flex-row place-items-stretch min-h-screen p-10 py-20">
        <div className="h-96 xl:h-auto xl:w-1/4 relative ">
          <Img
            src={mainImg}
            className={` sticky block top-0 w-full h-full xl:max-h-screen object-cover grayscale contrast-50 `}
            width={1200}
            height={800}
          />
        </div>
        <div className=" xl:w-3/4 mt-40 xl:mt-[50vh] ">
          <h1 className="pl-10 font-bold text-9xl">ABOUT ME</h1>
          <div className="pt-20 flex justify-stretch">
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
                <div
                  key={idx}
                  className="2xl:w-[83%] xl:pl-[17%] relative pt-14 flex flex-col xl:flex-row gap-3 mb-60"
                >
                  <div className="absolute top-0 left-0 xl:left-5 w-full xl:w-[calc(100%-1.25em)] h-px bg-base-100" />
                  <h4 className="flex-[1] shrink-0 font-extrabold uppercase text-3xl">
                    {cont.title}
                  </h4>
                  <div className="flex-[3] shrink-0 flex flex-col xl:items-end">
                    {cont.textContent && (
                      <div className="md:w-2/3 mb-24">{cont.textContent}</div>
                    )}
                    <div className="w-full">{cont.content}</div>
                  </div>
                </div>
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

function WorksSection({
  children,
  title,
  categories = [],
}: {
  children: React.ReactNode;
  title: string;
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
      <div className="p-10 my-40">
        <h1
          className=" text-primary pb-24 text-9xl uppercase whitespace-nowrap"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="px-5">{children}</div>
        <div className=" w-full lg:pl-[50%] text-xl md:text-4xl lg:text-4xl 2xl:text-6xl">
          {categories.map((category) => (
            <Link
              href={GetCtUrl(category)}
              className="block whitespace-nowrap relative pt-32 opacity-30 transition-opacity hover:opacity-100 uppercase border-b group overflow-hidden leading-none"
              key={GetCtName(category)}
            >
              <span className=" inline-block whitespace-nowrap w-[3em] mr-2 text-center relative -left-[3em] font-[10] opacity-30 group-hover:left-0 transition-all ">
                MORE
              </span>
              {GetCtName(category)
                .split("")
                .map((str) => (
                  <span
                    key={str}
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

type timelineType = { year: string; name: string };

function TimeLine({
  data,
  lastData,
  lastUse = false,
}: {
  data: timelineType[];
  lastData?: timelineType;
  lastUse?: boolean;
}) {
  if (!lastData)
    lastData = {
      year: `${new Date().getFullYear()}.${new Date().getMonth()}.`,
      name: "NOW",
    };
  const hrBg = "bg-secondary";
  const svgFill = "fill-secondary";
  return (
    <ul className="timeline timeline-vertical ml-[-100%] pl-[10em]">
      {data.map((d, idx) => (
        <li key={d.name} className="">
          {idx !== 0 && <hr className={hrBg} />}
          <div className="timeline-start">{d.year}</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className={"w-5 h-5 " + svgFill}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box text-neutral border-0">
            {d.name}
          </div>
          {((lastUse && idx == data.length - 1) ||
            (!lastUse && idx != data.length - 1)) && (
            <hr className={idx == data.length - 1 ? `` : hrBg} />
          )}
        </li>
      ))}
      {lastUse && (
        <li>
          <hr />
          <div className="timeline-start">{lastData.year}</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-5 h-5 fill-secondary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box text-neutral border-0">
            {lastData.name}
          </div>
        </li>
      )}
    </ul>
  );
}

type skillType = { name: string; progress: number };

const testSkill: skillType[] = [
  { name: "Maya", progress: 80 },
  { name: "Unreal Engine 5", progress: 50 },
  { name: "Photoshop", progress: 50 },
];

const defaultColors = [
  "progress",
  "progress-primary",
  "progress-secondary",
  "progress-accent",
  "progress-info",
  "progress-success",
  "progress-warning",
  "progress-error",
];

function SkillTable({
  skills,
  headUse = false,
  colors = defaultColors,
}: {
  skills?: skillType[];
  headUse?: boolean;
  colors?: string[];
}) {
  if (!skills) skills = testSkill;
  return (
    <div className="overflow-x-auto">
      <table className="table border-t border-b">
        {headUse && (
          <thead>
            <tr>
              <th></th>
              <th>프로그램</th>
              <th>숙련도</th>
            </tr>
          </thead>
        )}
        <tbody>
          {/* row 1 */}
          {skills.map((skill, idx) => (
            <tr key={skill.name + "_" + idx} className="text-lg">
              {/** <th>{String(idx + 1).padStart(2, "0")}</th> */}
              <td>{skill.name}</td>
              <td className="w-1/2">
                <progress
                  className={`progress w-full ${colors[idx % colors.length]}`}
                  value={skill.progress}
                  max="100"
                ></progress>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RadialProgress({
  skills,
  colors,
  progressTextUse,
}: {
  skills: skillType[];
  colors?: string[];
  progressTextUse?: boolean;
}) {
  const col = colors || ["text-secondary", "text-neutral", "text-accent"];

  return skills.map((skill, idx) => (
    <div
      key={idx}
      className={"radial-progress " + col[idx % col.length]}
      style={{
        //@ts-ignore
        "--value": skill.progress,
        "--size": "12rem",
        "--thickness": "1rem",
      }}
      role="progressbar"
    >
      <p className="text-center px-8 pt-1 text-base-100">
        <span className=" font-bold text-xl">{skill.name}</span>
        {progressTextUse && (
          <>
            <br />
            {skill.progress + "%"}
          </>
        )}
      </p>
    </div>
  ));
}

export function TagOl({
  data,
  parentClassName = "flex flex-row flex-wrap items-center gap-3",
  childColorClassName = "bg-neutral hover:bg-accent",
}: {
  data: string[];
  parentClassName?: string;
  childColorClassName?: string;
}) {
  const { getTagUrl } = useWorkPosts();
  return (
    <ol className={parentClassName}>
      {data.map((tag) => (
        <li key={tag} className="leading-snug">
          <Link
            href={getTagUrl(tag)}
            className={
              "z-[1] mr-[0.15rem] decoration-clone uppercase relative break-keep pb-1 pt-[0.3rem] px-3 w-auto rounded-sm " +
              childColorClassName
            }
          >
            {tag}
            <span className="z-[-1] absolute top-0 right-0 block w-[1.25em] h-[1.25em] origin-top-right -rotate-45 bg-inherit" />
          </Link>
        </li>
      ))}
    </ol>
  );
}
