import "../styles/tailwind.css";
import "../styles/globals.css";
import "highlight.js/styles/github-dark-dimmed.min.css";

import "dayjs/locale/ko";
import dayjs from "dayjs";
dayjs.locale("ko");

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SEO'S",
  // description: "새내기 디자이너의 포트폴리오 사이트",
  generator: "Next.js",
  applicationName: "SEO'S",
  referrer: "no-referrer",
  // keywords: ["Next.js", "React", "JavaScript"],
  // authors: [{ name: "Seo Yun Kim", url: "https://d-dlzndi.github.io" }],
  // creator: "Seo Yun Kim",
};

import HomeLayout from "@/components/legacy/page/HomeLayout";
import { DefaultFont } from "@/styles/Fonts";

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head />
      <body className={DefaultFont.className}>
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
