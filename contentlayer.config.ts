//@ts-nocheck
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import path from "path";
import getImgInMd from "./src/utils/getImgInMd";

import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remark2rehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const AwardData = defineNestedType(() => ({
  name: "AwardData",
  fields: {
    name: { type: "string", required: true },
    special: { type: "boolean", default: false },
    href: { type: "string" },
  },
}));

export type ImageData = { src: string; alt: string };

/*
const ImageData = defineNestedType(() => ({
  name: "ImageData",
  fields: {
    src: { type: "string", required: true },
    alt: { type: "string", required: true },
  },
}));
*/

export const WorkPost = defineDocumentType(() => ({
  name: "WorkPost",
  filePathPattern: `./**/*.md`,
  fields: {
    title: { type: "string", required: true },
    image: { type: "string", required: true },
    date: { type: "date", required: true },
    startDate: { type: "date" },
    description: { type: "markdown" },
    programs: { type: "list", of: { type: "string" } },
    awards: { type: "list", of: AwardData },
    url: { type: "string" },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => encodeURI(`/work/${post._raw.flattenedPath.trim()}`),
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
      resolve: (post) => [
        { src: post.image, alt: post.title },
        ...getImgInMd(post.body.raw),
      ],
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
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight, rehypeSlug],
  },
});

/*
    // parses out the frontmatter (which is needed for full-document parsing)
    builder.use(remarkFrontmatter);
    // parse markdown
    builder.use(remarkParse);
    // other remark plugins as you wish
    builder.use(remarkGfm, { singleTilde: false });
    // remark -> rehype
    builder.use(remark2rehype, { allowDangerousHtml: true });
    // other rehype plugins as you wish
    builder.use(rehypeHighlight);
    builder.use(rehypeSlug);
    // rehype to html
    builder.use(rehypeStringify);
    */

//@ts-ignore //작동잘됨..
// remarkPlugins: [remarkGfm],
