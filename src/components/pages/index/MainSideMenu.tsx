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
import { usePathname } from "next/navigation";
import DecoLine from "@/components/common/DecoLine";

type positionType = "left" | "right";
const pos: positionType = "right";
const TITLE = "PORTFOLIO";

export default function MainSideMenu() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((s) => !s);
  };
  const nav = _navigation;
  return (
    <>
      <div
        className={`fixed flex w-screen h-screen top-0 left-0 p-10 z-50 select-none pointer-events-none`}
      >
        {show && (
          <div
            key="side-menu-bg"
            className="block lg:hidden pointer-events-auto w-screen h-screen absolute top-0 left-0 cursor-pointer"
            onClick={() => setShow(false)}
          />
        )}
        <AnimatePresence mode="wait">
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
                      pathname={pathname}
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
        <div
          className={`block lg:hidden absolute top-0 right-0 pointer-events-auto`}
        >
          <button
            onClick={() => toggleShow()}
            className="btn btn-primary rounded-none p-5 w-16 h-16"
          >
            <MenuButton
              menuIsActive={show}
              className=" top-[.6rem] right-[.1rem]"
            />
          </button>
        </div>
      </div>
      <div
        className={`fixed z-[45] w-full max-w-[1920px] h-0 top-0 left-[50%] -translate-x-1/2 mix-blend-exclusion invert bg-white`}
      >
        <FramerMagnetic
          className={`absolute rounded-full top-5 left-4 lg:top-7 lg:left-10 pointer-events-auto`}
          max={10}
        >
          <Link href="/portfolio" className=" text-2xl font-black text-primary">
            {TITLE}
          </Link>
        </FramerMagnetic>
        <nav
          className={`hidden lg:block absolute top-8 right-8 pointer-events-auto `}
        >
          <ol className="flex gap-8 text-primary">
            {_navigation.map((url, idx) => (
              <li key={url.name} className={`w-24 text-center relative`}>
                <Link
                  href={url.url || "/"}
                  className={`uppercase font-bold hover:font-black text-lg relative`}
                >
                  {url.name}
                  {(pathname == url.url ||
                    (url.href == "/work" &&
                      pathname.indexOf(url.url || "") >= 0)) && (
                    <DecoLine className={``} />
                  )}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </>
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
        " absolute top-0 fill-primary pointer-events-none " +
        (pos == "left" ? "" : "-scale-x-100")
      }
      style={{
        width: "100px",
        height: "100vh",
        stroke: "none",
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
  pathname,
  onClick,
}: {
  url: urlType;
  idx: number;
  pathname: string;
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
      <Link href={url.url || "/"} className="text-5xl w-full block uppercase">
        <span className="inline-block relative z-[1]">
          {url.name}
          {(pathname == url.url ||
            (url.href == "/work" && pathname.indexOf(url.url || "") >= 0)) && (
            <DecoLine className={``} />
          )}
        </span>
      </Link>
    </motion.li>
  );
}
