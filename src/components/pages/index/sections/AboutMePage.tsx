"use client";
import Img from "@/components/common/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";
import { Icons } from "@/components/common/Icons/Icons";
import { motion, Variants } from "framer-motion";
import { SkillTable } from "../comp/SkillTable";
import { RadialProgress } from "../comp/RadialProgress";
import { TimeLine } from "../comp/TimeLine";
import { LandingBox } from "../LandingPage";
import { TagOl } from "../comp/TagOl";
import Link from "next/link";
import { AboutData as d } from "./SectionDatas";

export function AboutMePage() {
  const { allPosts } = useWorkPosts();

  type aboutType = {
    title: string;
    textContent?: JSX.Element;
    content?: JSX.Element;
  };

  const aboutData: aboutType[] = [
    {
      title: "Ability",
      textContent: (
        <p
          className=" break-keep"
          dangerouslySetInnerHTML={{
            __html: d.abilityText,
          }}
        />
      ),
      content: (
        <div className="flex xl:-mr-[1em] flex-col sm:flex-row isolate">
          {d.abilityData.map((data, idx) => (
            <div
              key={idx}
              className="flex flex-1 -my-2 sm:my-0 sm:-mx-2 shrink-0 flex-col items-center"
            >
              <Link
                href={`#${data.title}`}
                className={
                  " transition-transform hover:scale-105 active:scale-90 rounded-[100%] mix-blend-screen w-[100%] xl:w-[15em] xl:h-[15em] text-center py-12 sm:py-24 " +
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
      ),
    },
    {
      title: "Skill",
      content: (
        <>
          <div className="flex justify-around flex-wrap md:flex-nowrap gap-3 pb-8">
            <RadialProgress
              skills={d.skills.slice(0, 3)}
              colors={["text-secondary"]}
            />
          </div>
          <SkillTable skills={d.skills.slice(3)} colors={["progress-info"]} />
        </>
      ),
    },
    {
      title: "Education",
      textContent: (
        <div className="w-full overflow-clip ">
          <TimeLine
            data={d.educationData}
            className={` ml-[-100%] pl-[10em] break-keep text-base`}
          />
        </div>
      ),
    },
    {
      title: "Experience",
      textContent: (
        <ol className="ml-5 xl:ml-0 list-disc flex flex-col-reverse gap-7">
          {d.experienceData.map((data) => (
            <li key={data.title}>
              <h4 className="text-lg break-keep leading-tight">{data.title}</h4>
              <p className="opacity-50 text-sm">{data.desc}</p>
            </li>
          ))}
        </ol>
      ),
    },
  ];

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
        <div className=" h-96 xl:h-auto xl:w-1/4 relative ">
          <span
            className={`sticky block top-0 w-full h-full xl:max-h-screen object-cover grayscale contrast-50`}
          >
            <Img
              src={d.mainImg}
              className={` w-full h-full object-cover `}
              width={1200}
              height={800}
            />
          </span>
        </div>
        <div className="px-4 md:px-0 xl:w-3/4 mt-20 md:mt-40 xl:mt-[50vh] ">
          <h1 id={"About"} className="pl-10 w-full aspect-w-10 aspect-h-1">
            <span className="hidden">ABOUT ME</span>
            <d.titleSvg
              className={` fill-secondary sm:stroke-secondary sm:fill-none`}
            />
          </h1>
          <div className="pt-12 md:pt-20 flex gap-3 justify-stretch flex-col md:flex-row">
            <div className="flex-1"></div>
            <div className="flex-[5] flex flex-col min-[420px]:flex-row gap-10 min-[420px]:gap-3">
              <div className="flex-[2]">
                <motion.p
                  variants={variants}
                  initial={"start"}
                  whileInView={"end"}
                  viewport={{ once: true }}
                >
                  <span className=" font-extrabold text-3xl pb-5">
                    {d.profile.name}
                  </span>
                  <br />
                  <span className=" text-xl">{d.profile.eng_name}</span>
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
                    {d.profile.list.map((str) => (
                      <span key={str}>
                        {str}
                        <br />
                      </span>
                    ))}
                  </motion.p>
                </div>
              </div>
              <div className="flex-[2] md:flex-[3] text-xl flex flex-col opacity-30 gap-2 place-items-start">
                {d.keywords.map((s, idx) => (
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
          </div>
          <div className="pt-32 pb-32 md:pb-32 md:pt-44 flex justify-stretch">
            <div className="flex-1 flex flex-col gap-44 md:gap-60 ">
              {aboutData.map((cont, idx) => (
                <motion.div
                  key={idx}
                  variants={variants}
                  initial={"start"}
                  whileInView={"end"}
                  viewport={{ once: true }}
                  className="2xl:w-[83%] xl:pl-[17%] xl:flex-row relative pt-14 flex flex-col shrink-0 gap-8 md:gap-3"
                >
                  <div className="absolute top-0 left-0 xl:left-5 w-full 2xl:w-[calc(100%-1.25em)] h-px bg-secondary" />
                  <motion.h4
                    id={cont.title}
                    custom={1}
                    variants={variants}
                    initial={"start"}
                    whileInView={"end"}
                    viewport={{ once: true }}
                    className=" scroll-mt-20 flex-[1] block shrink-0 font-extrabold uppercase text-3xl text-secondary mb-4"
                  >
                    <Link href={`#${cont.title}`}>{cont.title}</Link>
                  </motion.h4>
                  <div className="flex-[3] shrink-0 flex flex-col xl:items-end">
                    {cont.textContent && (
                      <motion.div
                        custom={2}
                        variants={variants}
                        initial={"start"}
                        whileInView={"end"}
                        viewport={{ once: true }}
                        className="md:w-2/3 md:mb-24 [&:not(:only-child)]:mb-10"
                      >
                        {cont.textContent}
                      </motion.div>
                    )}
                    {cont.content && (
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
                    )}
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
