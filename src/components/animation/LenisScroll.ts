"use client";

import Lenis from "@studio-freight/lenis";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function LenisScroll() {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (lenis.current) lenis.current!.scrollTo(0, { immediate: true });
  }, [pathname, searchParams, lenis]);

  useEffect(() => {
    lenis.current = new Lenis();

    lenis.current.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.current!.destroy();
      lenis.current = null;
    };
  }, []);

  return null;
}
