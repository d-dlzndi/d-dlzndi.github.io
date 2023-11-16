// @ts-check
const { withContentlayer } = require("next-contentlayer");
// import withPlaiceholder from "@plaiceholder/next";
// const { withPlaiceholder } = require("@plaiceholder/next");

const isProd = process.env.NODE_ENV === "production"; // 프로덕션 모드인지

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: false, // contentLayer
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "https://d-dlzndi.github.io/" : "",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = withContentlayer(nextConfig);
