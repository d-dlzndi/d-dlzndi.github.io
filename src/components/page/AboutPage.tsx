import { Post } from "contentlayer/generated";
import { PageWrapper } from "../common/PageWrapper";
import usePosts from "@/hooks/usePosts";
import { notFound } from "next/navigation";

import styles from "../../styles/about.module.css";
import LinkImgUrl from "@/assets/svg/link.svg";

export default function AboutPage() {
  const { allPosts } = usePosts();
  const post: Post | undefined = allPosts.find((p) => p.slug == "About");
  if (!post) notFound();

  return (
    <PageWrapper>
      <div className="min-h-screen p-10 pt-20 ">
        <div className=" py-20 flex flex-col gap-2 text-3xl sm:text-4xl md:text-6xl md:gap-10 xl:text-8xl uppercase font-semibold">
          {post.data_set?.map((data, idx) => {
            return (
              <div key={idx} className={styles.titleLink}>
                <LinkImgUrl
                  width={30}
                  height={30}
                  className=" fill-[var(--color)] top-0 right-0 hidden"
                />
                <span
                  className="hover:underline inline-block relative"
                  dangerouslySetInnerHTML={{
                    __html: data.html,
                  }}
                />
              </div>
            );
          })}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </div>
    </PageWrapper>
  );
}
