"use client";

import useDisableMRB from "@/hooks/useDisableMRB";
import useSmoothScroll from "@/hooks/useSmoothScroll";

export default function Template({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  useDisableMRB();

  return <>{children}</>;
}
