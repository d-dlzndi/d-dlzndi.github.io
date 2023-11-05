import { PageWrapper } from "../components/PageWrapper";

import IntroPostPage from "@/app/intro/IntroPostPage";
import MainWorkPosts from "../../_posts/_main_work_posts";
import FullPageLayout from "../components/fullPage/FullPageLayout";
import IntroPage from "./intro/IntroPage";
import { getOnePost } from "@/lib/post_api";

const indexPost = getOnePost(undefined, "Intro", [
  "slug",
  "description",
  "title",
  "image",
  "content",
]);

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
);

export default function Index() {
  return (
    <PageWrapper>
      <FullPageLayout
        pages={[
          <IntroPage key={indexPost.slug} post={indexPost} />,
          ...posts.map((page, idx) => {
            return <IntroPostPage key={`${idx}_${page.slug}`} post={page} />;
          }),
        ]}
      />
    </PageWrapper>
  );
}
