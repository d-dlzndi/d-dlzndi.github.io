"use client";
import { PageWrapper } from "../components/PageWrapper";

import IntroPostPage from "../components/index/IntroPostPage";
import MainWorkPosts from "../../_posts/_main_work_posts";
import FullPageLayout from "../components/fullPage/FullPageLayout";
import IntroPage from "../components/index/IntroPage";

export default function Home() {
  return (
    <main className="">
      <PageWrapper>
        <FullPageLayout
          pages={[
            <IntroPage key={"Intro"} />,
            ...MainWorkPosts.map((page, idx) => {
              return (
                <IntroPostPage
                  key={`${idx}_${page.slug}`}
                  category={page.category}
                  slug={page.slug}
                />
              );
            }),
          ]}
        />
      </PageWrapper>
    </main>
  );
}
