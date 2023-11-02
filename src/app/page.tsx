"use client";
import { PageWrapper } from "../components/PageWrapper";

import IntroPostPage from "@/components/index/IntroPostPage";
import MainWorkPosts from "../../_posts/_main_work_posts";
import FullPageLayout from "../components/fullPage/FullPageLayout";
import IntroPage from "../components/index/IntroPage";
import { getOnePost } from "@/lib/post_api";

export default function Index() {
  /*
  const posts = MainWorkPosts.map((page) =>
    getOnePost(page.category, encodeURI(page.slug), [
      "slug",
      "title",
      "image",
      "category",
      "content",
      "startDate",
      "date",
      "award",
      "programs",
    ])
  );*/

  return (
    <main className="">
      <PageWrapper>
        <FullPageLayout
          pages={[
            <IntroPage key={"Intro"} />,
            ...MainWorkPosts.map((page, idx) => {
              return <IntroPostPage key={`${idx}_${page.slug}`} post={{}} />;
            }),
          ]}
        />
      </PageWrapper>
    </main>
  );
}
