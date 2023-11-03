import fs from "fs";
import path, { join } from "path";
import matter from "gray-matter";

const postsDirectory = () => join(process.cwd(), "_posts");

export type PostItem = {
  [key: string]: string | null;
};

export type awardDataType = {
  name: string;
  special: boolean;
  href?: string;
};

/**
 * _posts 안에 있는 "폴더명"만 읽고 카테고리 목록을 반환함.
 * @returns
 */
export function getAllCategories() {
  try {
    return fs
      .readdirSync(postsDirectory(), { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  } catch (error) {
    return [];
  }
}

/**
 * 파일 디렉토리를 읽고 안에 있는 파일들(마크다운)을 가져옴
 * @param path 기본값: postDirectory
 * @returns
 */
function getPostSlugs(path = postsDirectory()) {
  try {
    return fs
      .readdirSync(path, { withFileTypes: true })
      .filter((dirent) => dirent.isFile())
      .map((dirent) => dirent.name);
  } catch (error) {
    return [];
  }
}

/**
 * 가져온 마크다운 파일을 객체로 변환해서 반환합니다.
 * @param slug 파일명 (md 제외)
 * @param fields 객체에서 사용할 필드명의 집합
 * @param category
 * @returns Item[]
 */
function getPostBySlug(
  slug: string,
  fields: string[],
  category?: string
): PostItem {
  const realSlug = slug.replace(/\.md$/, "");
  let pathList = [postsDirectory(), `${realSlug}.md`];
  if (category != undefined) pathList = [pathList[0], category, pathList[1]];
  const fullPath = join(...pathList);
  let fileContents: any = null;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch (error) {
    console.log("오류! " + error);
  }

  // 여기서 matter는 마크다운 파일의 front-matter(앞머리)를 파싱해주는 역할
  const { data, content } = matter(fileContents);

  const items: PostItem = {};
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (category != undefined && field === "category") {
      items[field] = category;
    }
    if (items[field] == undefined) {
      // 이랬는데도 값이 없으면 null 지정함.
      items[field] = data[field] || null;
    }
  });
  return items;
}

/**
 * 포스트 기본 정렬 방식 (날짜순)
 * @param post1
 * @param post2
 * @returns
 */
const postSort = (post1: any, post2: any) => (post1.date > post2.date ? -1 : 1);

/**
 * 마크다운 전체 파일 목록 가져오기
 * @param fields
 * @returns
 */
export function getAllPosts(fields: string[] = []) {
  const posts: PostItem[] = [];
  getAllCategories().forEach((category) =>
    posts.push(...getAllPostsInCategory(fields, category, false))
  );
  return posts.sort(postSort);
}

/**
 * 마크다운 파일들을 모두 가져오고, 정렬, 이어붙임
 * @param fields 어떤 필드를 사용할건지에 대한 배열
 * @param sort 날짜별로 정렬 여부
 * @returns 정렬된 아이템 배열
 */
export function getAllPostsInCategory(
  fields: string[] = [],
  category: string,
  sort: boolean = true
) {
  const posts: PostItem[] = [];
  const slugs = getPostSlugs(join(postsDirectory(), category));
  slugs.map((slug) => posts.push(getPostBySlug(slug, fields, category)));
  if (!sort) return posts;
  else return posts.sort(postSort);
}

/**
 * 특정 글 목록 불러오기
 * @param list 카테고리명, 글 이름은 필수
 * @param fields 공통 필드
 * @param sort 정렬 안함이 기본값
 * @returns
 */
export function getPostList(
  list: { category: string; slug: string }[],
  fields: string[],
  sort: boolean = false
) {
  return list
    .map((post) => getOnePost(post.category, post.slug, fields))
    .sort(sort ? postSort : undefined);
}

/**
 * 특정 글만 읽어오기
 * @param category 카테고리
 * @param slug 슬러그
 * @param fields 사용할 필드
 * @returns Items 1개
 */
export function getOnePost(
  category: string | undefined,
  slug: string,
  fields: string[] = []
): PostItem {
  return getPostBySlug(slug, fields, category);
}
