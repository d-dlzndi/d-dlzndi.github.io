//@ts-nocheck
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import path from "path";
import getBase64 from "./src/utils/getBase64";
import getImgInMd from "./src/utils/getImgInMd";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeExternalLinks from "rehype-external-links";
import remarkComment from "@slorber/remark-comment";

const AwardData = defineNestedType(() => ({
  name: "AwardData",
  fields: {
    name: { type: "string", required: true },
    special: { type: "boolean", default: false },
    href: { type: "string" },
  },
}));

const VideoData = defineNestedType(() => ({
  name: "VideoData",
  fields: {
    name: { type: "string", required: true },
    url: { type: "string", required: true },
    autoPost: { type: "boolean", default: true },
    uploadIndex: { type: "boolean", default: false },
  },
}));

type ImageDataType = {
  src: string;
  alt: string;
  base64: undefined | any;
  size: undefined | { width: number; height: number };
};

export const WorkPost = defineDocumentType(() => ({
  name: "WorkPost",
  filePathPattern: `./**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    image: { type: "string", required: true },
    date: { type: "date", required: true },
    startDate: { type: "date" },
    description: { type: "markdown" },
    tag: { type: "list", of: { type: "string" } },
    award: { type: "list", of: AwardData },
    url: { type: "string" },
    color: { type: "string" },
    video: { type: "string" },
    videos: { type: "list", of: VideoData },
    draft: { type: "boolean", default: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) =>
        encodeURI(`/portfolio/work/${post._raw.flattenedPath.trim()}`),
    },
    slug: {
      type: "string",
      resolve: (post) => path.parse(post._raw.sourceFileName).name,
    },
    category: {
      type: "string",
      resolve: (post) => post._raw.sourceFileDir,
    },
    imageList: {
      type: "list",
      resolve: async (post) => {
        const allList = [
          { src: post.image, alt: post.title },
          ...getImgInMd(post.body.raw),
        ].reduce(
          (list, img) =>
            list && !list.find((v) => v.src == img.src) // && img.src.indexOf("http") < 0
              ? [...list, img]
              : list,
          [] as ImageDataType[]
        );
        return Promise.allSettled(
          allList.map((img) => {
            return getBase64(img.src);
          })
        ).then((results) => {
          const base64List = results.map((r) =>
            r.status == "fulfilled"
              ? {
                  base64: r.value?.base64 || undefined,
                  size: r.value?.img
                    ? {
                        height: r.value?.img.height,
                        width: r.value?.img.width,
                      }
                    : undefined,
                }
              : {
                  base64: undefined,
                  size: undefined,
                }
          );
          console.log(
            post.title,
            base64List.length,
            allList.length,
            typeof base64List[0].base64
          );
          return allList.reduce(
            (list, img, idx) => [...list, { ...img, ...base64List[idx] }],
            [] as ImageDataType[]
          );
        });
      },
    },
  },
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `./*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    data_set: { type: "list", of: { type: "markdown" } },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => path.parse(post._raw.sourceFileName).name,
    },
  },
}));

export default makeSource({
  contentDirPath: "_works",
  documentTypes: [Post, WorkPost],
  mdx: {
    remarkPlugins: [remarkComment, remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      rehypeHighlight,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
            ariaLabel: "anchor",
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener noreferrer"],
        },
      ],
    ],
  },
});
