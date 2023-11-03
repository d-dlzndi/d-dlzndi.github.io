"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HOME_LOGO = "PORTFOLIO";

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
    title: "About",
    url: "/about",
  },
];

export default function MainHeader() {
  const path = usePathname();
  return (
    <header className="fixed inset-x-0 mx-auto max-w-[var(--width)] top-0 px-10 pt-10 z-50 flex justify-between">
      <Logo />
      <HeaderNavigation path={path} />
    </header>
  );
}

export function Logo() {
  return (
    <div className="w-auto h-auto">
      <h1 className="font-extrabold text-2lg">
        <Link href={"/"}>{HOME_LOGO}</Link>
      </h1>
    </div>
  );
}

export function HeaderNavigation({ path }: { path: string | null }) {
  return (
    <nav className="">
      <ol className="flex font-bold uppercase gap-[20px]">
        {headerContent.map((content, idx) => (
          <motion.li key={idx}>
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
          </motion.li>
        ))}
      </ol>
    </nav>
  );
}
