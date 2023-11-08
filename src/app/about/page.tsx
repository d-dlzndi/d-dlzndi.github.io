import { Post } from "contentlayer/generated";
import { PageWrapper } from "../../components/common/PageWrapper";
import usePosts from "@/hooks/usePosts";
import { notFound } from "next/navigation";

import styles from "./about.module.css";
import LinkImgUrl from "@/assets/svg/link.svg";

export default function About() {
  const { allPosts } = usePosts();
  const about = allPosts.find((p) => p.slug === "About");
  if (!about) return notFound();

  return <Contact post={about} />;
}

export function Contact({ post }: { post: Post }) {
  return (
    <PageWrapper>
      <div className="min-h-screen p-10 pt-20 ">
        <div className=" py-20 flex flex-col gap-10 text-8xl uppercase font-semibold">
          {post.data_set?.map((data, idx) => (
            <div key={idx} className={styles.titleLink}>
              <LinkImgUrl
                width={30}
                height={30}
                className=" fill-[var(--color)] top-0 right-0 hidden"
              />
              <span
                className="hover:underline inline-block relative"
                dangerouslySetInnerHTML={{ __html: data.html }}
              />
            </div>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </div>
    </PageWrapper>
  );
}
