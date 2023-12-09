import "../styles/tailwind.css";
import "../styles/globals.css";
import "highlight.js/styles/github-dark-dimmed.min.css";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "_",
  // description: "새내기 디자이너의 포트폴리오 사이트",
  generator: "Next.js",
  applicationName: "KSY",
  referrer: "no-referrer",
  // keywords: ["Next.js", "React", "JavaScript"],
  // authors: [{ name: "Seo Yun Kim", url: "https://d-dlzndi.github.io" }],
  // creator: "Seo Yun Kim",
};

import HomeLayout from "@/components/legacy/page/HomeLayout";
import { DefaultFont } from "@/styles/Fonts";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth bg-primary">
      <head />
      <body
        className={DefaultFont.className + " bg-base-100"}
        suppressHydrationWarning
      >
        {props.children}
      </body>
    </html>
  );
}
