import { PageWrapper } from "../common/PageWrapper";

import IntroPostPage from "@/components/intro/IntroPostPage";
import MainWorkPosts from "../../../_works/_main_works";
import FullPageLayout from "../common/fullPage/FullPageLayout";
import IntroPage from "../intro/IntroPage";
import usePosts from "@/hooks/usePosts";
import useWorkPosts from "@/hooks/useWorkPosts";

export default function HomePage() {
  const { allPosts } = usePosts();
  const indexPost = allPosts.find((allpost) => allpost.slug == "Intro");

  const workPosts = useWorkPosts();
  const posts = MainWorkPosts.map((page) =>
    workPosts.allPosts.find(
      (allP) => allP.category == page.category && allP.slug == page.slug
    )
  );

  return (
    <PageWrapper>
      <FullPageLayout
        pages={[
          indexPost && <IntroPage key={indexPost.slug} post={indexPost} />,
          ...posts.map((page, idx) => {
            return <IntroPostPage key={`${idx}_${page?.slug}`} post={page} />;
          }),
        ]}
      />
    </PageWrapper>
  );
}