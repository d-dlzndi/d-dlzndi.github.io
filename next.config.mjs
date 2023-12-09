// @ts-check
import { withContentlayer } from "next-contentlayer";
import withPlaiceholder from "@plaiceholder/next";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
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
});

export default isProd ? withPlaiceholder(nextConfig) : nextConfig;
