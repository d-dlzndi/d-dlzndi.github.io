import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import path from "path";

import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

const Award = defineNestedType(() => ({
  name: "Award",
  fields: {
    name: { type: "string", required: true },
    special: { type: "boolean", default: false },
    href: { type: "string" },
  },
}));

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
    awards: { type: "list", of: Award },
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
  //@ts-ignore //작동잘됨..
  markdown: { rehypePlugins: [rehypeSlug, rehypeHighlight, rehypeStringify] },
});
