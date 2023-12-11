import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useSmoothScroll() {
  useEffect(() => {
    console.log("아악~~");
    let lenis = new Lenis();
    /* lenis.on("scroll", (e: any) => {
         console.log(e);
      });*/
    const raf = (time: number) => {
      if (lenis) {
        console.log("느아악!!");
        lenis.raf(time);
        requestAnimationFrame(raf);
      } else {
        console.log("없음!!!");
      }
    };
    requestAnimationFrame(raf);
    return () => {
      // @ts-ignore
      lenis = null;
    };
  });
}
