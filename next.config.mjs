// @ts-check
import withPlaiceholder from "@plaiceholder/next";
import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  reactStrictMode: true,
  swcMinify: false, // contentLayer
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default withPlaiceholder(withContentlayer(nextConfig));
// module.exports = nextConfig;
