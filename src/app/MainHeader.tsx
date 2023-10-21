"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HOME_LOGO = "SEO YUN KIM";

type headerContentType = {
  title: string;
  url: string;
};
const headerContent: headerContentType[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Work",
    url: "/work",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export default function MainHeader() {
  const path = usePathname();

  return (
    <header>
      <Logo />
      <nav className="fixed right-10 top-10 z-50">
        <ol className="flex font-bold uppercase gap-[20px]">
          {headerContent.map((content, idx) => (
            <li key={idx}>
              <Link href={content.url} className="relative block">
                {content.url == path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full bg-black"
                    transition={{ ease: [0.33, 1, 0.68, 1] }}
                  />
                )}
                {content.title}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}

export function Logo() {
  return (
    <div className="fixed top-10 left-10 z-50 w-auto h-auto">
      <h1 className=" font-extrabold text-2lg">
        <Link href={"/"}>{HOME_LOGO}</Link>
      </h1>
    </div>
  );
}
