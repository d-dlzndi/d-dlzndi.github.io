"use client";
import Img from "@/components/common/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import { Icons } from "@/components/common/Icons/Icons";
import { motion, Variants } from "framer-motion";
import { SkillTable } from "./SkillTable";
import { RadialProgress } from "./RadialProgress";
import { TimeLine } from "./TimeLine";
import { TagOl, LandingBox } from "./LandingPage";

export function AboutMePage() {
  const { allPosts } = useWorkPosts();

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
        <ol className=" list-disc flex flex-col gap-7">
          {[
            {
              title: "스마일게이트 온라인 게임잼 Episode.01 최우수상 수상",
              desc: `2020.07.24.`,
            },
            {
              title: "게임제작 경진대회 GIGDC2021 대학부 금상 수상",
              desc: `2021.04.01.`,
            },
            {
              title: "세이브더칠드런 아동학대 예방 영상물 공모전 참가",
              desc: `2022.10.31.`,
            },
            {
              title: "강원대학교 도서관 브이로그 공모전 참가",
              desc: `2022.11.15.`,
            },
            {
              title: "한국콘텐츠진흥원 2023 대한민국 게임잼 대상 수상",
              desc: `2023.08.11.`,
            },
          ]
            .reverse()
            .map((data) => (
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
      translateY: 50,
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
              <motion.p
                variants={variants}
                initial={"start"}
                whileInView={"end"}
                viewport={{ once: true }}
              >
                <span className=" font-extrabold text-3xl pb-5">
                  {data.name}
                </span>
                <br />
                <span className=" text-xl">{data.eng_name}</span>
              </motion.p>
              <div className="opacity-60">
                <motion.p
                  variants={variants}
                  initial={"start"}
                  whileInView={"end"}
                  viewport={{ once: true }}
                  custom={2}
                  className="pt-5 font-light"
                >
                  <span>{data.birth}</span>
                  <br />
                  <span>{data.phone}</span>
                  <br />
                  <span>{data.email}</span>
                  <br />
                </motion.p>
              </div>
            </div>
            <div className="flex-[3] text-xl flex flex-col opacity-30 gap-2 place-items-start">
              {keywords.map((s, idx) => (
                <span key={idx} className=" inline-block -skew-x-12">
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
            <div className="flex-1 flex flex-col gap-60 pb-32">
              {aboutData.map((cont, idx) => (
                <motion.div
                  key={idx}
                  variants={variants}
                  initial={"start"}
                  whileInView={"end"}
                  viewport={{ once: true }}
                  className="xl:w-[83%] xl:pl-[17%] xl:flex-row relative pt-14 flex flex-col shrink-0 gap-3"
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
