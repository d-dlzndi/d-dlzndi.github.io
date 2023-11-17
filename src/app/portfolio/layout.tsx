import Link from "next/link";
import _navigation from "./_navigation";
import SlideTransition from "@/components/animation/slideTransition";
import { MainFooter } from "./MainFooter";
import MainHeaderBtn from "./MainHeaderBtn";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    template: "%s | SEO'S PORTFOLIO",
    default: "SEO'S PORTFOLIO",
  },
  description: "새내기 디자이너의 포트폴리오 사이트",
  // keywords: ["Next.js", "React", "JavaScript"],
  // authors: [{ name: "Seo Yun Kim", url: "https://d-dlzndi.github.io" }],
  // creator: "Seo Yun Kim",
};

export default function Layout(props: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <>
      <div className="w-screen flex flex-wrap flex-col justify-center items-center">
        <div className="w-full min-h-screen">{props.children}</div>
        <MainFooter />
      </div>
      <MainHeaderBtn />
    </>
  );
}

export function MainNavigation() {
  return (
    <nav className=" w-screen h-[10vh] bg-black text-white">
      <ul className=" w-full h-full flex flex-row justify-stretch items-stretch flex-nowrap">
        {_navigation.map((nav, idx) => (
          <li key={nav.name} className=" text-7xl w-full text-center">
            <Link href={nav.url || "/"}>
              {nav.name}
              <nav.icon className=" w-10 h-10 inline-block" />
            </Link>
          </li>
        ))}
        <li>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
        </li>
      </ul>
    </nav>
  );
}
