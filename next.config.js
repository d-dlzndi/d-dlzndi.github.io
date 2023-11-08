// @ts-check
const { withContentlayer } = require("next-contentlayer");
// const withTM = require("next-transpile-modules")(["@plaiceholder/next"]);
// const { withPlaiceholder } = require("@plaiceholder/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: false, // contentLayer
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withContentlayer(nextConfig);
