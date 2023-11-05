// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default withPlaiceholder(nextConfig);
// module.exports = nextConfig;
