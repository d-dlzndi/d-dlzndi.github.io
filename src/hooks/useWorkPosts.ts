import { useMemo } from "react";
import { WorkPost, allWorkPosts } from "contentlayer/generated";

type PostsByCategory = Record<string, WorkPost[]>;
type CategoryUrlType = Record<string, string>;

type Props = {
  category?: string | null;
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

  const filterPosts =
    category && Object.keys(postsByCategory).includes(category)
      ? postsByCategory[category]
      : basePosts;

  const categories = useMemo<string[]>(() => {
    return Object.entries(postsByCategory)
      .sort((prev, next) => {
        /* 
        const nextPosts = next[1];
        const prevPosts = prev[1];
        return nextPosts.length - prevPosts.length; // 글의 개수 순으로 반환
        */
        return prev[0].localeCompare(next[0]); // 문자열을 비교하여 반환
      })
      .map(([category]) => category);
  }, [postsByCategory]);

  const getCategoryUrl = (category: string) => {
    //if (categories.includes(category)) {
    //  return `/portfolio/work/${category}`;
    //}
    return `/portfolio/work/`;
  };

  return {
    allPosts: basePosts,
    filterPosts,
    categories,
    getCategoryUrl,
  };
};

export default useWorkPosts;
