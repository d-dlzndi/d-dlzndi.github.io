"use client";

import FramerMagnetic from "@/components/animation/Magnetic";
import _navigation, { urlType } from "../../../app/portfolio/_navigation";
import Link from "next/link";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { FooterContents } from "./MainFooter";
import { Icons } from "@/components/common/Icons/Icons";
import MenuButton from "@/components/animation/pixelTransition/Header";
import styles from "./mainSideMenu.module.scss";
import useWindowSize from "@/hooks/useWindowSize";

type positionType = "left" | "right";
const pos: positionType = "right";

export default function MainSideMenu() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((s) => !s);
  };
  const nav = _navigation;
  return (
    <div
      className={`fixed flex w-screen h-screen top-0 left-0 p-10 z-50 select-none pointer-events-none`}
    >
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key="side-menu-bg"
            className="block lg:hidden pointer-events-auto w-screen h-screen absolute top-0 left-0 cursor-pointer"
            initial={{ backdropFilter: "none" }}
            animate={{ backdropFilter: "blur(1px)" }}
            exit={{ backdropFilter: "none" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            onClick={() => setShow(false)}
          />
        )}
        {show && (
          <motion.div
            key="side-menu"
            initial={{
              translateX: `calc(${pos == "left" ? "-" : ""}100% ${
                pos == "left" ? "-" : "+"
              } 100px)`,
            }}
            animate={{ translateX: 0 }}
            exit={{
              translateX: `calc(${pos == "left" ? "-" : ""}100% ${
                pos == "left" ? "-" : "+"
              } 100px)`,
            }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className={`block lg:hidden absolute top-0 ${pos}-0 bg-primary w-[100vw] lg:w-[50vw] h-[100vh] flex pointer-events-auto`}
          >
            <SvgCurveBackground />
            <nav className=" w-full p-[20%] text-base-100 flex flex-col justify-center">
              <ul className="flex flex-col gap-5 min-w-fit min-h-fit">
                {nav.map((url, idx) => (
                  <MenuTextAnimation
                    url={url}
                    idx={idx}
                    key={url.name}
                    onClick={() => setShow(false)}
                  />
                ))}
              </ul>
              <hr className="my-10" />
              <div className="text-xs footer text-base-100">
                <FooterContents />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <FramerMagnetic
        className={`block lg:hidden absolute rounded-full top-5 ${pos}-5 pointer-events-auto`}
        max={20}
      >
        <button
          onClick={() => toggleShow()}
          className="btn btn-primary rounded-full p-5 w-16 h-16"
        >
          <MenuButton menuIsActive={show} className=" top-[.6rem]" />
        </button>
      </FramerMagnetic>
      <FramerMagnetic
        className={`absolute rounded-full top-8 left-8 pointer-events-auto`}
        max={10}
      >
        <Link href="/portfolio" className=" text-2xl font-black text-primary">
          PORTFOLIO
        </Link>
      </FramerMagnetic>
      <nav
        className={`hidden lg:block absolute top-8 right-8 pointer-events-auto`}
      >
        <ol className="flex gap-8 text-primary">
          {_navigation.map((url, idx) => (
            <li
              key={url.name}
              className={`uppercase w-24 text-center font-bold hover:font-black text-lg`}
            >
              <Link href={url.url || "/"}>{url.name}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

function SvgCurveBackground() {
  const initialPath = `M0 0 L0 ${window.innerHeight} Q200 ${
    window.innerHeight / 2
  } 0 0`;
  const targetPath = `M0 0 L0 ${window.innerHeight} Q0 ${
    window.innerHeight / 2
  } 0 0`;
  const finalPath = `M50 0 L0 0 V${window.innerHeight} H50 Q0 ${
    window.innerHeight / 2
  } 50 0`;

  const pathAnimation: Variants = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
    },
    exit: {
      d: initialPath,
    },
  };

  return (
    <svg
      className={
        styles.svgCurve +
        " fill-primary pointer-events-none " +
        (pos == "left" ? "" : "-scale-x-100")
      }
      style={{
        right: pos == "left" ? "-99px" : "none",
        left: pos == "left" ? "none" : "-99px",
      }}
    >
      <motion.path
        variants={pathAnimation}
        initial={"initial"}
        animate={"enter"}
        exit={"exit"}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

function MenuTextAnimation({
  url,
  idx,
  onClick,
}: {
  url: urlType;
  idx: number;
  onClick: () => void;
}) {
  return (
    <motion.li
      key={url.name}
      initial={{ translateX: -200 * (pos == "left" ? 1 : -1) }}
      animate={{ translateX: 0 }}
      exit={{
        translateX: 100 * (pos == "left" ? 1 : -1),
        transition: { duration: 0.4 + 0.1 * idx },
      }}
      transition={{
        delay: 0.3 + 0.1 * idx,
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      }}
      onClick={onClick}
    >
      <Link href={url.url || "/"} className="text-5xl w-full block relative">
        <Icons.arrowRight width={30} height={30} className="inline-block " />{" "}
        {url.name}
      </Link>
    </motion.li>
  );
}
