"use client";

import Lenify from "@/components/animation/LenisScroll";
import useDisableMRB from "@/hooks/useDisableMRB";

export default function Template({ children }: { children: React.ReactNode }) {
  // useSmoothScroll();
  // useDisableMRB();

  return <>{children}</>;
}
