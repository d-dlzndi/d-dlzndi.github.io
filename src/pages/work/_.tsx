import "@/app/globals.css";

import type { Metadata } from "next";

import { getAllCategories, getAllPostsInCategory } from "@/lib/post_api";
import { notFound } from "next/navigation";

import RootLayout from "@/app/layout";
import { ReactElement } from "react";

export const postProps = [
  "slug",
  "title",
  "image",
  "category",
  "date",
  "startDate",
];

interface props {
  selected: string;
  contentList: any[];
}

const WorkCategoryPage = (params: any) => {
  if (!params.category || params.posts.length <= 0) {
    return notFound();
  }

  return <></>;
};

WorkCategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <div className=" bg-red-500">{page}</div>;
};

export default WorkCategoryPage;

export async function getStaticProps({ params }: any) {
  const posts = getAllPostsInCategory(postProps, params.category, true);
  return { props: { posts: posts, category: params.category } };
}

export async function getStaticPaths() {
  const categories = getAllCategories();
  return {
    paths: categories.map((c) => {
      return {
        params: {
          category: c,
        },
      };
    }),
    fallback: false,
  };
}

/*
export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  return {
    title: encodeURI(params.category.replaceAll("-", " ")),
    description: encodeURI(params.category.replaceAll("-", " ")),
    authors: { name: "Seo Yun Kim", url: "/" },
  };
};
*/

const data = {
  posts: [
    {
      content: "",
      slug: "A-Metal-Flower",
      title: "철로 이루어진 꽃",
      image: "/images/chronic-pain-1.jpg",
      category: "3D-Animation",
      date: "2019-01-01",
      startDate: "2020-10-20",
    },
    {
      content: "",
      slug: "chronic-pain-2",
      title: "Chronic Pain 2",
      image: "/images/chronic-pain-2.jpg",
      category: "3D-Animation",
      date: "2018-01-02",
      startDate: null,
    },
  ],
  category: "3D-Animation",
};
