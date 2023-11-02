import "./globals.css";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "PORTFOLIO",
  description: "어쩌고 개발자 어쩌고의 포트폴리오 사이트",
};

import MainHeader from "./MainHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head />
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
