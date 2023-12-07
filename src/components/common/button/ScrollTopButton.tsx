"use client";

import { scrollToTop } from "@/utils/scrollEvent";

export default function ScrollTopButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button onClick={() => scrollToTop()} className={`cursor-n-resize`}>
      {children}
    </button>
  );
}
