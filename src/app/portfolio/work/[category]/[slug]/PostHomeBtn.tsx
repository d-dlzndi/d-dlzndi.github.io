"use client";

import FramerMagnetic from "@/components/animation/Magnetic";
import { Icons } from "@/components/common/Icons/Icons";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function PostHomeBtn({}) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.1,
      }}
      className={`fixed z-50 top-24 left-5`}
    >
      <FramerMagnetic className={`rounded-full`} max={10}>
        <button
          onClick={() => router.back()}
          className="btn btn-secondary rounded-full p-5 w-16 h-16"
        >
          <Icons.uturnLeft width={20} height={20} className=" fill-base-100" />
        </button>
      </FramerMagnetic>
    </motion.div>
  );
}
