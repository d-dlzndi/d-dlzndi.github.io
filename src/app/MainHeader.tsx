"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <header className="fixed right-10 top-10 z-50">
      <nav>
        <ol className="flex font-bold uppercase gap-[20px]">
          {headerContent.map((content, idx) => (
            <li key={idx}>
              <Link className="relative block" href={content.url}>
                {content.url == path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full bg-black"
                    transition={{ ease: [0.33, 1, 0.68, 1] }}
                    whileHover={{ scaleY: "200%" }}
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
