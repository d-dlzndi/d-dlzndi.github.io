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
      .reverse()
      .sort((prev, next) => {
        const nextPosts = next[1];
        const prevPosts = prev[1];
        const compareLength = nextPosts.length - prevPosts.length;
        if (compareLength == 0) return prev[0].localeCompare(next[0]);
        else return compareLength; // 글의 개수 순으로 반환
      })
      .map(([tag]) => tag);
  }, [postsByTag]);

  const getCategoryUrl = (category?: string) => {
    return { pathname: WORK_URL, query: { category: category } };
  };

  const getTagUrl = (tag?: string) => {
    return { pathname: WORK_URL, query: { tag: tag } };
  };

  const getImgBase64 = (post: WorkPost, src?: string): string | undefined => {
    const target = post.imageList.find((img: any) => img.src == src);
    if (!target) return undefined;
    return target.base64;
  };

  const getImgSize = (
    post: WorkPost,
    src?: string
  ): { height: number; width: number } | undefined => {
    const target = post.imageList.find((img: any) => img.src == src);
    if (!target) return undefined;
    return target.size;
  };

  const findImgBySrc = (src: string) => {
    return basePosts
      .find((post) => post.imageList.find((img: any) => img.src == src))
      ?.imageList.find((img: any) => img.src == src);
  };

  const getImgBase64BySrc = (src: string): string | undefined => {
    const target = findImgBySrc(src);
    if (!target) return undefined;
    return target.base64;
  };

  const getImgSizeBySrc = (
    src: string
  ): { width: number; height: number } | undefined => {
    const target = findImgBySrc(src);
    if (!target) return undefined;
    return target.size;
  };

  return {
    allPosts: basePosts,
    filterPosts,
    postsByCategory,
    postsByTag,
    categories,
    tags,
    getCategoryUrl,
    getTagUrl,
    getImgBase64,
    getImgSize,
    getImgBase64BySrc,
    getImgSizeBySrc,
  };
};

export default useWorkPosts;
