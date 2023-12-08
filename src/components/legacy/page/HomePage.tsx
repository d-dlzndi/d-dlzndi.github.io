import { PageWrapper } from "../PageWrapper";
import IntroPostPage from "../intro/IntroPostPage";
import FullPageLayout from "../../animation/fullPage/FullPageLayout";
import IntroPage from "../intro/IntroPage";
import usePosts from "@/hooks/usePosts";
import useWorkPosts from "@/hooks/useWorkPosts";

export default function HomePage() {
  const { allPosts } = usePosts();
  const indexPost = allPosts.find((allpost) => allpost.slug == "Intro");

  const workPosts = useWorkPosts();
  const posts = workPosts.allPosts;

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
