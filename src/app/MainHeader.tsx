"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type headerContentType = {
  title: string;
  url: string;
};

export default function MainHeader() {
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

  const path = usePathname();

  return (
    <header>
      <nav>
        <ol className="flex font-bold uppercase fixed right-0 top-0 gap-[20px] z-50">
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
