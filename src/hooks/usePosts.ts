import { Post, allPosts } from "contentlayer/generated";

type Props = {};

const usePosts = () => {
  const basePosts = [...allPosts].sort((prev, next) => {
    return Date.parse(next.date) - Date.parse(prev.date);
  });

  return {
    allPosts: basePosts,
  };
};

export default usePosts;
