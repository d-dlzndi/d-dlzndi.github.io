import { useMemo } from "react";
import { WorkPost, allWorkPosts } from "contentlayer/generated";

export const WORK_URL = "/portfolio/work";
type PostsByCategory = Record<string, WorkPost[]>;

type Props = {
  category?: string | null;
  tag?: string | null;
};

const useWorkPosts = ({ category, tag }: Props = {}) => {
  const basePosts = [...allWorkPosts]
    .filter((post) => post.draft == false)
    .sort((prev, next) => {
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

  const postsByTag = useMemo<PostsByCategory>(() => {
    return basePosts.reduce((postsByTag, post) => {
      post.tag?.map((t) => {
        postsByTag[t] = [...(postsByTag[t] || []), post];
      });
      return postsByTag;
    }, {} as PostsByCategory);
  }, [basePosts]);

  const filterPosts =
    category && Object.keys(postsByCategory).includes(category)
      ? postsByCategory[category]
      : tag && Object.keys(postsByTag).includes(tag)
      ? postsByTag[tag]
      : basePosts;

  const categories = useMemo<string[]>(() => {
    return Object.entries(postsByCategory)
      .sort((prev, next) => {
        return prev[0].localeCompare(next[0]); // 문자열 순서로 반환
      })
      .map(([category]) => category);
  }, [postsByCategory]);

  const tags = useMemo<string[]>(() => {
    return Object.entries(postsByTag)
      .sort((prev, next) => {
        const nextPosts = next[1];
        const prevPosts = prev[1];
        return nextPosts.length - prevPosts.length; // 글의 개수 순으로 반환
      })
      .map(([tag]) => tag);
  }, [postsByTag]);

  const getCategoryUrl = (category?: string) => {
    return { pathname: WORK_URL, query: { category: category } };
  };

  const getTagUrl = (tag?: string) => {
    return { pathname: WORK_URL, query: { tag: tag } };
  };

  return {
    allPosts: basePosts,
    filterPosts,
    categories,
    tags,
    getCategoryUrl,
    getTagUrl,
  };
};

export default useWorkPosts;
