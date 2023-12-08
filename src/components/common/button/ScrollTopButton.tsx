"use client";

import { scrollToTop } from "@/utils/scrollEvent";

export default function ScrollTopButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={() => scrollToTop()}
      className={`cursor-n-resize ${className}`}
    >
      {children}
    </button>
  );
}
