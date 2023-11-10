"use client";
import useDisableMRB from "@/hooks/useDisableMRB";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Modal({ children }: { children: any }) {
  const router = useRouter();

  useDisableMRB();

  return (
    <div
      className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex justify-center items-center"
      style={{ backgroundColor: "#00000070", zIndex: 10000 }}
      //
    >
      <div className="bg-[var(--color)] w-auto h-auto p-1 relative pointer-events-none select-none">
        {children}
        <button
          className="absolute text-5xl pointer-events-auto"
          style={{ top: 0, right: "-3rem" }}
          onClick={() => router.back()}
        >
          ✖
        </button>
      </div>
    </div>
  );
}
