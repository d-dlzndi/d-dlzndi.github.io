import { useMemo } from "react";
import { WorkPost, allWorkPosts } from "contentlayer/generated";

type PostsByCategory = Record<string, WorkPost[]>;
type CategoryUrlType = Record<string, string>;

type Props = {
  category?: string;
};

const useWorkPosts = ({ category }: Props = {}) => {
  const basePosts = [...allWorkPosts].sort((prev, next) => {
    return Date.parse(next.date) - Date.parse(prev.date);
  });

  const postsByCategory = useMemo<PostsByCategory>(() => {
    return basePosts.reduce((postsByCategory, post) => {
      postsByCategory[post.category] = [
        ...(postsByCategory[post.category] || []),
        post,
      ];
      return postsByCategory;
    }, {} as PostsByCategory);
  }, [basePosts]);

  const filterPosts = !category ? basePosts : postsByCategory[category];

  const categories = useMemo<string[]>(() => {
    return Object.entries(postsByCategory)
      .sort((prev, next) => {
        /* 
        const nextPosts = next[1];
        const prevPosts = prev[1];
        return nextPosts.length - prevPosts.length; 
        */
        return prev[0].localeCompare(next[0]);
      })
      .map(([category]) => category);
  }, [postsByCategory]);

  const getCategoryUrl = (category: string) => {
    if (categories.includes(category)) {
      return `/work/${category}`;
    }
    return `/work/`;
  };

  return {
    allPosts: basePosts,
    filterPosts,
    categories,
    getCategoryUrl,
  };
};

export default useWorkPosts;
