import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import path from "path";

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
      resolve: (post) => encodeURI(`/${post._raw.flattenedPath}`),
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
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => path.parse(post._raw.sourceFileName).name,
    },
  },
}));

export default makeSource({
  contentDirPath: "_posts",
  documentTypes: [Post, WorkPost],
});
