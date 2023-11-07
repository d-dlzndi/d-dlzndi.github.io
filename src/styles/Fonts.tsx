import localFont from "next/font/local";

const DefaultFont = localFont({
  src: "../assets/fonts/SUIT-Variable.woff2",
  display: "swap",
  fallback: [
    "SUIT Variable",
    "SUIT",
    "Gill Sans",
    "Gill Sans MT",
    "Calibri",
    "Trebuchet MS",
    "sans-serif",
  ],
  variable: "--default-font",
});

export { DefaultFont };
