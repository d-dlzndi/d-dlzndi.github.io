"use client";
import useDisableMRB from "@/hooks/useDisableMRB";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Icons } from "../Icons/Icons";

export default function Modal({ children }: { children: any }) {
  const router = useRouter();

  // useDisableMRB();

  return (
    <>
      <div
        className=" w-screen h-screen fixed top-0 left-0 bg-primary-content opacity-50 cursor-pointer"
        style={{ zIndex: 9999 }}
        onClick={() => router.back()}
      />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-auto h-auto p-1 select-none"
        style={{ zIndex: 10000 }}
      >
        {children}
        <button
          className="btn btn-ghost w-16 h-16 absolute pointer-events-auto"
          style={{ top: 0, right: 0 }}
          onClick={() => router.back()}
        >
          <Icons.x width={30} height={30} className="stroke-primary" />
        </button>
      </div>
    </>
  );
}
