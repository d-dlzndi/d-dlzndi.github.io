// @ts-check
// import withPlaiceholder from "@plaiceholder/next";
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // trailingSlash: true, // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  reactStrictMode: true,
  swcMinify: false, // contentLayer
  images: {
    unoptimized: true,
  },
};

// export default (withContentlayer(nextConfig));
module.exports = withContentlayer(nextConfig);
