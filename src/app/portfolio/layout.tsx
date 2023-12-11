import Link from "next/link";
import _navigation from "./_navigation";
import { MainFooter } from "../../components/pages/index/MainFooter";
import MainSideMenu from "../../components/pages/index/MainSideMenu";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | SEO'S PORTFOLIO",
    default: "SEO'S PORTFOLIO",
  },
  description: "새내기 디자이너의 포트폴리오 사이트",
  applicationName: "SEO'S PORTFOLIO",
  // keywords: ["Next.js", "React", "JavaScript"],
  // authors: [{ name: "Seo Yun Kim", url: "https://d-dlzndi.github.io" }],
  // creator: "Seo Yun Kim",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-screen flex flex-wrap flex-col justify-center items-center bg-primary">
        <div className="w-full min-h-screen">{props.children}</div>
        <MainFooter />
      </div>
      <MainSideMenu />
    </>
  );
}
