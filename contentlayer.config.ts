//@ts-nocheck
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import path from "path";
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

export type ImageData = { src: string; alt: string };

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
      resolve: (post) =>
        [
          { src: post.image, alt: post.title },
          ...getImgInMd(post.body.raw),
        ].reduce((list, img) => {
          if (list.find((value) => value.src == img.src)) return list;
          else return [...list, img];
        }, [] as { src: string; alt: string }[]),
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
