// @ts-check
const { createContentlayerPlugin } = require("next-contentlayer");
const isProd = process.env.NODE_ENV === "production";

//@ts-ignore
module.exports = async (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: "export",
    reactStrictMode: true,
    swcMinify: true, // contentLayer
    images: {
      unoptimized: true,
    },
    assetPrefix: isProd ? "https://d-dlzndi.github.io/" : "",
    webpack: (config, { webpack }) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

      /*
      // for node:fs/promises
      config.experiments = { ...config.experiments, topLevelAwait: true };
      config.externals["node:fs"] = "commonjs node:fs";
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
          resource.request = resource.request.replace(/^node:/, "");
        })
      );
      */

      return config;
    },
  };

  const withContentlayer = createContentlayerPlugin({});
  const withPlaiceholder = await (async () => {
    const ph = await import("@plaiceholder/next");
    return ph.default;
  })();

  if (isProd) {
    console.log(withPlaiceholder);
    return withPlaiceholder(withContentlayer(nextConfig));
  }
  return withContentlayer(nextConfig);
};
