"use client";

import Img from "@/components/common/ImgWithPlaceholder";
import CircleButton from "@/components/common/button/CircleButton";
import TextCircle from "@/components/common/textCircle/TextCircle";
import usePosts from "@/hooks/usePosts";
import { notFound } from "next/navigation";
import MainWorkPosts from "@/libs/main_works";
import useWorkPosts from "@/hooks/useWorkPosts";
import { default as DateTime } from "@/components/common/Date";
import HtmlRemover from "@/utils/htmlRemover";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <FirstPage />
      <AboutPage />
      <LandingWorkPage />
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
      <div className="w-screen h-full max-w-screen-2xl relative">
        {children}
      </div>
    </div>
  );
}

function FirstPage() {
  const { allPosts } = usePosts();
  const indexPost = allPosts.find((allpost) => allpost.slug == "Intro");
  if (!indexPost) return notFound();

  return (
    <LandingBox className={"h-screen bg-primary text-primary-content"}>
      <div className="flex place-items-stretch w-full h-full">
        <div
          id="LeftContents"
          className=" w-1/3 flex flex-col pt-14 gap-8 justify-center"
        >
          <div className="w-32 h-px bg-primary-content"></div>
          <h1
            className="text-7xl"
            dangerouslySetInnerHTML={{ __html: indexPost.title || "" }}
          />
          <div
            className=" pt-8 w-1/2"
            dangerouslySetInnerHTML={{ __html: indexPost.body?.html || "" }}
          />
        </div>
        <div id="rightContents" className="relative w-2/3">
          <div className="w-full h-[95vh] mb-10 relative">
            <Img
              src=""
              width={1000}
              height={1000}
              className={`absolute top-0 left-0 w-full h-full object-cover`}
            />
          </div>
          <TextCircle
            text="NEXT NEXT NEXT NEXT NEXT NEXT NEXT NEXT NEXT "
            className="absolute bottom-[40%] left-[-100px] bg-secondary text-secondary-content z-50"
            width={200}
          />
        </div>
      </div>
      <div
        style={{ borderRadius: "100%" }}
        className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-secondary z-50 origin-center pointer-events-none skew-x-[18deg] scale-[120%]"
      />
    </LandingBox>
  );
}

function AboutPage() {
  const educations = [
    { name: "강원대학교 영상디자인전공 졸업", date: "2024.02." },
    { name: "강원대학교 영상디자인전공 졸업", date: "2024.02." },
    { name: "강원대학교 영상디자인전공 졸업", date: "2024.02." },
  ];
  const skills = [
    { name: "Photoshop", progress: 90 },
    { name: "Photoshop", progress: 70 },
    { name: "Photoshop", progress: 50 },
    { name: "Photoshop", progress: 60 },
    { name: "Photoshop", progress: 95 },
    { name: "Photoshop", progress: 70 },
  ];

  return (
    <LandingBox className={" text-primary p-20"}>
      <div className="flex w-full">
        <div>
          <div>
            <h3>김서윤</h3>
            <p>
              Seo Yun Kim <br />
              2001. 01. 29.
            </p>
          </div>
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
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start">2019.02.</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                First Macintosh computer
              </div>
              <hr className="bg-primary" />
            </li>
            <li>
              <hr className="bg-primary" />
              <div className="timeline-start">2023.02.</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">iMac</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start">{`${new Date().getFullYear()}.${new Date().getMonth()}.`}</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">And?</div>
            </li>
          </ul>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>프로그램</th>
                  <th>숙련도</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {skills.map((skill, idx) => (
                  <tr key={skill.name}>
                    <th>{idx + 1}</th>
                    <td>{skill.name}</td>
                    <td>
                      <progress
                        className="progress progress-primary w-56"
                        value={skill.progress}
                        max="100"
                      ></progress>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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

          <p>
            {skills.map((skill, idx) => (
              <div
                key={skill.name}
                className="radial-progress text-primary"
                style={{
                  //@ts-ignore
                  "--value": skill.progress.toString(),
                  "--size": "6rem",
                  "--thickness": ".6rem",
                }}
                role="progressbar"
              >
                {skill.name}
              </div>
            ))}
          </p>
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

function LandingWorkPage() {
  const workPosts = useWorkPosts();
  const posts = MainWorkPosts.map((page) =>
    workPosts.allPosts.find(
      (allP) => allP.category == page.category && allP.slug == page.slug
    )
  ).filter((post) => !post == false);

  return (
    <LandingBox className={"p-20 bg-base-content text-base-100"}>
      <ul>
        {posts.map((post, idx) => (
          <li key={post?.slug} className=" h-[80vh]">
            <Link href={post?.url || "/"} className="join">
              <div>
                <p>{post?.category}</p>
                <span>
                  {post?.startDate && (
                    <>
                      <DateTime dateString={post?.startDate} /> -{" "}
                    </>
                  )}
                  <DateTime dateString={post?.date} />
                </span>
                <h4>{post?.title}</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: HtmlRemover(post?.description?.html),
                  }}
                />
                <button className="btn btn-secondary">MORE</button>
              </div>
              <div>
                <Img src={post?.image} width={500} height={500} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Link href="/portfolio/work">...And More!</Link>
      </div>
    </LandingBox>
  );
}
