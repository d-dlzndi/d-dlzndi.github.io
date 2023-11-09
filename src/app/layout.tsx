import "../styles/tailwind.css";
import "../styles/globals.css";
import "highlight.js/styles/github-dark-dimmed.min.css";

import "dayjs/locale/ko";
import dayjs from "dayjs";
dayjs.locale("ko");

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "PORTFOLIO",
  description: "어쩌고 개발자 어쩌고의 포트폴리오 사이트",
};

import HomeLayout from "@/components/page/HomeLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head />
      <body>
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}
