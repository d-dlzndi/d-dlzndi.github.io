import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "SUIT",
        "KoPubWorld바탕체",
        "KoPubWorldBatang",
        "ui-sans-serif",
        "system-ui",
      ],
      serif: ["ui-serif", "Georgia"],
      mono: [
        "D2Coding",
        "ui-monospace",
        "Consolas",
        "Mono",
        "Courier New",
        "monospace",
      ],
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("daisyui"), // always after typo
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4541F6",
          secondary: "#F0CC34",
          accent: "#E86358",
          neutral: "#081F5C",
          "base-100": "#EFEEEA",
          info: "#F2C94D",
          success: "#bae6fd",
          warning: "#fde68a",
          error: "#fca5a5",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "1rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "1rem", // border radius of tabs
        },
      },
    ],
  },
};
export default config;
