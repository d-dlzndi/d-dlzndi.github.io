// @ts-check
const { withContentlayer } = require("next-contentlayer");
// const withTM = require("next-transpile-modules")(["@plaiceholder/next"]);
// const { withPlaiceholder } = require("@plaiceholder/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: false,
  swcMinify: false, // contentLayer
  images: {
    unoptimized: true,
  },
};

module.exports = withContentlayer(nextConfig);
