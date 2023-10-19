"use client";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHtml from "./markdownToHtml";

const postsDirectory = "/posts";

const categorysNames = [
  "chronic-pain",
  "low-back-pain",
  "neck-pain",
  "pelvic-health",
];

export type fileDataListType = {
  category: string;
  data?: fileDataType[];
};
export type fileDataType = { id: string; category: string; [key: string]: any };

// Gets all articles data and sorts them by most recent date
export function getSortedPostsData() {
  // Get file names under each categories directory
  let fileNamesList: string[][] = [];
  let fileDataList: fileDataListType[] = [];

  categorysNames.forEach((categoryName) => {
    const categoryPath = postsDirectory + "/" + categoryName;
    const fileNames = fs.readdirSync(path.resolve(".." + categoryPath));
    fileNamesList.push(fileNames);
    fileNames.map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");
      // Read markdown file as string
      const fullPath = categoryPath + "/" + fileName;
      const fileContents = fs.readFileSync(fullPath, "utf8");
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      // 데이터 추가Combine the data with the id
      if (fileDataList.find((v) => v.category == categoryName) == null) {
        fileDataList.push({ category: categoryName, data: [] });
      }
      fileDataList
        .find((v) => v.category == categoryName)
        ?.data?.push({ id, category: categoryName, ...matterResult });
    });
  });

  // Concatenate each articles data in one array
  const allPostsData: fileDataType[] = [];
  fileDataList.forEach((data) => {
    if (data.data) allPostsData.concat(data.data);
  });

  // Sort articles by date
  return allPostsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
} // END - getSortedPostsData()

// 작은 조각...
function getPostFileNames(): string[][] {
  let fileNamesList: string[][] = [];
  categorysNames.forEach((categoryName) => {
    const fileNames = fs.readdirSync(`${postsDirectory}/${categoryName}`);
    fileNamesList.push(fileNames);
  });
  return fileNamesList;
}

// Get all the post IDs
export function getAllPostIds() {
  // Get file names under each categories directory

  let fileNamesList: string[][] = [];
  // Holds all [category] names
  let categoryNamesList: string[] = [];

  categorysNames.forEach((categoryName) => {
    const fileNames = fs.readdirSync(`${postsDirectory}/${categoryName}`);
    fileNamesList.push(fileNames);

    // Loop through each xxxFileNames array.
    // Add relevant category name to categoryNames array
    fileNames.forEach((name) => {
      categoryNamesList.push(categoryName);
    });
  });

  // Concatenate each articles name in one array (id)
  const fileNames = [...fileNamesList];

  // Combine categoryNames & fileNames arrays. [{ categoryName: 'low-back-pain', id: 'low-back-pain-1.md' }, etc]
  const postParams = categoryNamesList.map((e: any, i: any) => {
    return { categoryName: e, id: fileNames[i] };
  });

  // Loop through postParams. Output variable params
  return postParams.map((postParam: any) => {
    return {
      params: {
        category: postParam.categoryName,
        id: postParam.id.replace(/\.md$/, ""),
      },
    };
  });
}

// Get relevant post data
export async function getPostData(category: any, id: number) {
  // Set the relevant /posts file path using category and id in the query params
  const fullPath = postsDirectory + `/${category}` + `/${id}.md`;
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  console.log(matterResult);

  // Use remark to convert markdown into HTML string
  const contentHtml = markdownToHtml(matterResult.content);

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
