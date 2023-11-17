import Link from "next/link";
import AwardList from "@/components/dataList/AwardList";
import ProgramList from "@/components/dataList/ProgramList";
import Date from "@/components/common/Date";
import IntroImageSlide from "./IntroImageSlide";
import MouseFollowBox from "../common/effect/MouseFollowBox";
import { WorkPost } from "contentlayer/generated";
import NotFound from "../../app/not-found";
import useWorkPosts from "@/hooks/useWorkPosts";
import HtmlRemover from "@/utils/htmlRemover";

export default function IntroPostPage({ post }: { post?: WorkPost }) {
  const { getCategoryUrl } = useWorkPosts();

  if (!post) return <NotFound />;

  const categoryUrl = getCategoryUrl(post.category);
  const url = post.url || "/";

  return (
    <article className="w-screen h-screen flex justify-center px-10">
      <div className="relative w-screen max-w-[var(--width)] h-screen flex flex-row justify-stretch gap-10">
        <div className="flex-1 relative basis-0">
          <IntroImageSlide imageArray={post.imageList.slice(0, 8)} />
          <div
            className="absolute top-20 left-[65%] font-bold text-4xl z-10 pointer-events-none"
            style={{ textShadow: "1px 2px var(--background)" }}
          >
            <Date dateString={post.startDate} />
            <br />
            {"\u00A0\u00A0\u00A0"}
            <span>-</span>
            {"\u00A0"}
            <Date dateString={post.date} />
          </div>
        </div>
        <MouseFollowBox className="flex flex-1 max-w-[40%] basis-0 relative">
          <header className="flex-1 basis-0 relative">
            <div className="top-box h-[60vh] gap-10 relative py-7 flex flex-col justify-end">
              <AwardList awardList={post.awards} />
              <div className="flex flex-row gap-3 w-3/4">
                <div className="description1 flex-1 break-all text-justify opacity-20 max-w-[340px]">
                  {HtmlRemover(post.description?.html).substring(0, 200) +
                    "..."}
                </div>
              </div>
              <div>
                <p className="sub-title font-thin uppercase text-3xl">
                  <Link href={categoryUrl}>
                    {post.category?.replaceAll("-", " ").toUpperCase()}
                  </Link>
                </p>
                <div className="eng-title absolute -z-10 select-none bottom-0 left-20 font-extrabold break-keep text-7xl opacity-5">
                  {post.slug?.replaceAll("-", " ")}
                </div>
                <h2 className="main-title">
                  <Link
                    href={url}
                    className="font-extrabold text-7xl break-keep"
                  >
                    {post.title}
                  </Link>
                </h2>
              </div>
            </div>
            <div className="bottom-box relative w-full h-[50vh] py-8 flex flex-col justify-between">
              <div className="program-box">
                <h5 className="mb-2">PROGRAM</h5>
                <div className="w-2/3">
                  <ProgramList
                    programList={post.programs || undefined}
                    className=""
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-10 right-10 p-10">
              <Link href={url} className="font-medium text-xl ">
                MORE
              </Link>
            </div>
          </header>
        </MouseFollowBox>
      </div>
    </article>
  );
}
