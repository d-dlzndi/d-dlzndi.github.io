"use client";
import { useAnimate, useInView, motion } from "framer-motion";
import SvgTitle from "@/assets/svg/index/title_text.svg";
import SvgTitle_Deco1 from "@/assets/svg/index/title_deco1.svg";
import SvgTitle_Deco2 from "@/assets/svg/index/title_deco2.svg";
import { useEffect } from "react";
import { LandingBox } from "./LandingPage";
import Image from "next/image";
import { Icons } from "@/components/common/Icons/Icons";
import Link from "next/link";

const commonEase = [0, 0.55, 0.45, 1];
const startDelay = 1;

export function HiPage() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [width, height] = [550, 450];

  useEffect(() => {
    if (isInView) {
      animate(
        "svg:nth-child(1)",
        { opacity: 1 },
        { delay: 0.5, duration: 2, ease: [0, 0.55, 0.45, 1] }
      );
      animate(
        "svg:nth-child(2)",
        { strokeDashoffset: 0 },
        { delay: startDelay, duration: 2, ease: [0, 0.55, 0.45, 1] }
      );
      animate(
        "svg:nth-child(3)",
        { strokeDashoffset: 0 },
        { delay: startDelay + 0.9, duration: 2, ease: [0, 0.55, 0.45, 1] }
      );
    }
  }, [isInView]);

  return (
    <LandingBox
      className={`h-screen bg-base-100 bg-[url('/img/index/bg.jpg')] bg-cover bg-fixed bg-blend-color-burn`}
    >
      <Image
        src={"/img/index/bg.jpg"}
        alt={"background"}
        width={1280}
        height={720}
        priority={true}
        className="opacity-5 w-px h-px"
      />
      <div
        ref={scope}
        className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-5/6 sm:w-3/4 md:w-1/2 lg:w-1/3 max-w-2xl`}
      >
        <SvgTitle
          width={width}
          height={height}
          style={{ strokeDasharray: 100, strokeDashoffset: 100, opacity: 0 }}
          className={`fill-primary w-full h-full`}
        />
        <SvgTitle_Deco1
          width={width}
          height={height}
          style={{ strokeDasharray: 500, strokeDashoffset: 500 }}
          className={`absolute top-0 left-0 z-[-1] stroke-secondary w-full h-full`}
        />
        <SvgTitle_Deco2
          width={width}
          height={height}
          style={{ strokeDasharray: 200, strokeDashoffset: 200 }}
          className={`absolute top-0 left-0 z-[-1] stroke-secondary w-full h-full`}
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ delay: startDelay + 2 }}
        className={`absolute left-0 bottom-10 w-full text-center font-light text-sm transition-all hover:scale-105 hover:text-accent`}
      >
        <Link href={`#About`} className={`block`}>
          SCROLL
          <br />
          <Icons.chevronDoubleDown
            className={`inline-block`}
            width={30}
            height={30}
          />
        </Link>
      </motion.div>
    </LandingBox>
  );
}
