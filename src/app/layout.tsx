import "../styles/tailwind.css";
import "../styles/globals.css";
import { DefaultFont } from "@/styles/Fonts";

import "dayjs/locale/ko";
import dayjs from "dayjs";
dayjs.locale("ko");

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "PORTFOLIO",
  description: "어쩌고 개발자 어쩌고의 포트폴리오 사이트",
};

import MainHeader from "../components/main/MainHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head />
      <body className={DefaultFont.className}>
        <MainHeader />
        <div className="flex justify-center items-center w-screen relative">
          <div className="max-w-[var(--width)] w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
