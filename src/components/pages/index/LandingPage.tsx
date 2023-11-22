"use client";

import Img from "@/components/common/ImgWithPlaceholder";
import usePosts from "@/hooks/usePosts";
import { notFound } from "next/navigation";
import MainWorkPosts from "@/libs/main_works";
import useWorkPosts from "@/hooks/useWorkPosts";
import { default as DateTime } from "@/components/common/Date";
import Link from "next/link";
import SlideShowText from "@/components/common/textEffect/SlideShowText";
import { WorkPost } from "contentlayer/generated";
import { Icons } from "@/components/common/Icons/Icons";

const anim_work = [
  {
    category: "Animation",
    slug: "A-Metal-Flower",
  },
  {
    category: "Animation",
    slug: "GameJam-Korea2023",
  },
];
/*
(page) =>
    workPosts.allPosts.find(
      (allP) => allP.category == page.category && allP.slug == page.slug
    )
*/
export default function LandingPage(params: any) {
  const workPosts = useWorkPosts();
  const animPosts: WorkPost[] = anim_work.reduce((array, current) => {
    const value = workPosts.allPosts.find(
      (allP) => allP.category == current.category && allP.slug == current.slug
    );
    if (value) return [...array, value];
    return array;
  }, [] as WorkPost[]);

  return (
    <>
      <HelloPage />
      <AboutMePage />
      <SkillSection />
      <AnimSection posts={animPosts} />
    </>
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
          className="text-5xl lg:text-[12vw] w-full my-[-0.1em] leading-none font-black"
          delay={1}
        />
        <div
          className=" lg:absolute lg:top-1/3 lg:left-3/4 w-28 break-keep whitespace-pre"
          dangerouslySetInnerHTML={{ __html: indexPost.body?.html || "" }}
        />
      </div>
    </LandingBox>
  );
}

const skills = [
  { name: "Maya", progress: 80 },
  { name: "Unreal Engine 5", progress: 50 },
  { name: "Photoshop", progress: 50 },
];

const keywords = [
  "도전적인",
  "끈질긴",
  "호기심이 많은",
  "경청하는",
  "늘 상상하는",
];

type aboutType = { title: string; content: JSX.Element };

const aboutData: aboutType[] = [
  {
    title: "Self-Introduce",
    content: (
      <p>
        자기 소개를 여기에 입력합니다. 자기 소개를 여기에 입력합니다. 자기
        소개를 여기에 입력합니다. 자기 소개를 여기에 입력합니다. 자기 소개를
        여기에 입력합니다.
      </p>
    ),
  },
  {
    title: "Education",
    content: (
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
    content: (
      <>
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="radial-progress bg-primary text-secondary border-4 border-primary"
            style={{
              //@ts-ignore
              "--value": skill.progress,
              "--size": "12rem",
              "--thickness": "1rem",
            }}
            role="progressbar"
          >
            <p className="text-center">
              <span className=" font-bold text-xl">{skill.name}</span>
              <br />
              {skill.progress + "%"}
            </p>
          </div>
        ))}
      </>
    ),
  },
  {
    title: "skills",
    content: (
      <SkillTable
        skills={skills}
        colors={[
          "progress-info",
          "progress-success",
          "progress-warning",
          "progress-error",
        ]}
      />
    ),
  },
  { title: "experience", content: <></> },
  { title: "activity", content: <></> },
];

function AboutMePage() {
  return (
    <LandingBox className={`bg-primary text-base-100`}>
      <div className="flex place-items-stretch min-h-screen p-10 py-20">
        <div className="w-1/4 relative">
          <Img
            src={"/3.jpg"}
            className={` sticky block top-16 w-full h-full max-h-[90vh] object-cover`}
            width={1200}
            height={800}
          />
        </div>
        <div className="w-3/4 mt-[50vh] ">
          <h1 className="pl-10 font-bold text-9xl">ABOUT ME</h1>
          <div className="pt-10 flex justify-stretch">
            <div className="flex-1"></div>
            <div className="flex-[2]">
              <p className=" font-extrabold text-3xl pb-5">김서윤</p>
              <p className=" font-light">
                Seo Yun Kim <br />
                2001. 01. 29.
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
          <div className="pt-48 flex justify-stretch">
            <div className="flex-1"></div>
            <div className="flex-[5] flex flex-col gap-28">
              {aboutData.map((cont, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <h4 className="font-extrabold uppercase text-xl">
                    {cont.title}
                  </h4>
                  <div className="pr-10">{cont.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LandingBox>
  );
}

function SkillSection({}) {
  return (
    <LandingBox className={`bg-secondary`}>
      <div>악</div>
    </LandingBox>
  );
}

function LandingTitleBox({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className: any;
  title: string;
}) {
  return (
    <LandingBox className={className}>
      <div className="pt-48 px-24 min-h-[50vh] text-center">
        <h1 className=" text-primary text-7xl font-bold">{title}</h1>
      </div>
      {children}
    </LandingBox>
  );
}

function AnimSection({ posts }: { posts: WorkPost[] }) {
  return (
    <LandingTitleBox
      title="Animation"
      className={`bg-base-content text-base-100`}
    >
      <div className="w-full flex flex-col px-[15%] py-48 gap-60">
        {posts.map((post, idx) => (
          <div key={post._id} className="px-20">
            <div className="w-full aspect-w-15 aspect-h-9 relative">
              <div className="absolute top-0 left-0 flex ">
                <Img
                  src={post.image}
                  className={`absolute block top-0 left-0 w-full h-full object-cover pb-[8%]`}
                  width={1200}
                  height={800}
                />
                <div className="bg-base-content w-full min-h-[12%] sticky bottom-0 self-end flex place-self-stretch py-4">
                  <div className="w-1/2">
                    <span>
                      <DateTime dateString={post.startDate} />
                      {"-"}
                      <DateTime dateString={post.date} />
                    </span>
                    <h3 className="font-bold text-6xl">{post.title}</h3>
                  </div>
                  <div className="w-1/4 pr-10 break-keep">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.description?.html || "",
                      }}
                    />
                  </div>
                  <div className="w-1/4 text-right text-7xl font-bold hover:underline text-primary">
                    <Link href={post.url || "/"}>MORE</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </LandingTitleBox>
  );
}

function AboutPage() {
  return (
    <LandingBox className={" text-primary p-20"}>
      <div className="flex w-full">
        <div>
          <figure>
            <Img src="/2.jpg" width={200} height={200} />
          </figure>
          <Link href="/portfolio/contact" className="btn btn-primary">
            CONTACT
          </Link>
        </div>
        <div className="divider divider-horizontal">Default</div>
        {/** left end */}
        <div>
          <ul className="steps">
            <li className="step step-info">Fly to moon</li>
            <li className="step step-info">Shrink the moon</li>
            <li className="step step-info">Grab the moon</li>
            <li className="step step-error" data-content="?">
              Sit on toilet
            </li>
          </ul>
          <ul className="steps steps-vertical lg:steps-horizontal">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>

          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Downloads</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">New Users</div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">New Registers</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
        {/** right end */}
      </div>
      {/* join end */}
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
  const hrBg = "bg-accent";
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
              className="w-5 h-5 fill-accent"
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
  { name: "Photoshop", progress: 60 },
  { name: "Photoshop", progress: 95 },
  { name: "Photoshop", progress: 70 },
  { name: "Photoshop", progress: 90 },
  { name: "Photoshop", progress: 70 },
  { name: "Photoshop", progress: 50 },
  { name: "Photoshop", progress: 60 },
  { name: "Photoshop", progress: 95 },
  { name: "Photoshop", progress: 70 },
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
      <table className="table">
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
              <th>{String(idx + 1).padStart(2, "0")}</th>
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
