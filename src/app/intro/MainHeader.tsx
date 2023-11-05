"use client";
import "./mainHeader.css";

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
    <header className=" select-none pointer-events-none fixed inset-x-0 mx-auto max-w-[var(--width)] top-0 px-10 pt-10 z-50 flex justify-between">
      <Logo />
      <HeaderNavigation path={path} />
    </header>
  );
}

export function Logo() {
  return (
    <div className="w-auto h-auto pointer-events-auto">
      <h1 className="font-extrabold text-2lg">
        <Link href={"/"} className="hover-a-anim">
          {HOME_LOGO}
        </Link>
      </h1>
    </div>
  );
}

export function HeaderNavigation({ path }: { path: string | null }) {
  return (
    <nav className="main-header-nav">
      <ol className="flex font-bold uppercase gap-[20px] pointer-events-auto">
        {headerContent.map((content, idx) => (
          <motion.li key={idx}>
            <Link
              href={content.url}
              className="relative block w-16 hover-a-anim"
            >
              {path &&
                ((content.url == "/" && path == content.url) ||
                  (content.url != "/" && path.indexOf(content.url) == 0)) && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full bg-[var(--color)]"
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
