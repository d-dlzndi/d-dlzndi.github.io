"use client";
import { PageWrapper } from "../component/PageWrapper";

import MainPage from "../pages/index/MainPage";
import MainWorkPosts from "../../_posts/_main_work_posts";
import FullPageLayout from "../component/fullPage/FullPageLayout";
import IntroPage from "../pages/index/IntroPage";

export default function Home() {
  return (
    <main className="">
      <PageWrapper>
        <FullPageLayout
          pages={[
            IntroPage(),
            ...MainWorkPosts.map((page, idx) => {
              return (
                <MainPage
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

/*

getAllPostsInCategory(
            ["category", "slug"],
            "3D-Animation"
          ).map((page, idx) => {
            return (
              <MainPage
                key={page.slug + "_" + idx}
                category={page.category}
                slug={page.slug}
              />
            );
          })
          */
