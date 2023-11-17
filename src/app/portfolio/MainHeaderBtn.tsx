"use client";

import FramerMagnetic from "@/components/animation/Magnetic";
import _navigation from "./_navigation";
import Link from "next/link";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { FooterContents } from "./MainFooter";
import { Icons } from "@/components/common/Icons/Icons";
import MenuButton from "@/components/animation/pixelTransition/Header";

type positionType = "left" | "right";
const pos: positionType = "left";

export default function MainHeaderBtn() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((s) => !s);
  };
  const nav = _navigation;
  return (
    <div className={`fixed flex top-0 ${pos}-0 p-10 z-50 select-none`}>
      {show && (
        <div
          className=" w-screen h-screen absolute top-0 left-0 cursor-pointer"
          onClick={() => setShow(false)}
        />
      )}
      <AnimatePresence>
        {show && (
          <motion.div
            id="side-menu"
            initial={{ translateX: (pos == "left" ? "-" : "") + "100%" }}
            animate={{ translateX: 0 }}
            exit={{ translateX: (pos == "left" ? "-" : "") + "100%" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className={`absolute top-0 ${pos}-0 bg-primary w-[100vw] lg:w-[50vw] h-[100vh] overflow-hidden flex`}
          >
            <nav className=" w-full p-[20%] text-base-100 flex flex-col justify-center">
              <ul className="flex flex-col gap-5 min-w-fit min-h-fit">
                {nav.map((url, idx) => (
                  <li key={url.name} onClick={() => setShow(false)}>
                    <Link
                      href={url.url || "/"}
                      className="text-5xl hover:underline underline-offset-8"
                    >
                      <Icons.arrowRight
                        width={30}
                        height={30}
                        className="inline-block "
                      />{" "}
                      {url.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <hr className="my-10" />
              <div className="text-xs footer text-primary-content">
                <FooterContents />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <FramerMagnetic
        className={` absolute rounded-full top-5 ${pos}-5`}
        max={50}
      >
        <button
          onClick={() => toggleShow()}
          className="btn btn-primary rounded-full p-5 w-16 h-16"
        >
          <MenuButton menuIsActive={show} className=" top-[.6rem]" />
        </button>
      </FramerMagnetic>
    </div>
  );
}
