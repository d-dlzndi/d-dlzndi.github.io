"use client";
import { Icons } from "@/components/common/Icons/Icons";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("ERROR : " + error);
  }, [error]);

  return (
    <div className=" w-full h-full flex flex-col items-center justify-center">
      <h2 className=" font-black text-5xl md:text-8xl uppercase text-accent">
        ERROR
      </h2>
      <p className=" md:text-2xl p-5 pb-24 text-secondary">
        이 페이지는 아직 준비되지 않았습니다. :(
      </p>
      <button onClick={() => reset()} className="btn btn-ghost text-neutral">
        <Icons.uturnLeft
          width={30}
          height={30}
          className=" fill-neutral inline-block"
        />{" "}
        재시도
      </button>
    </div>
  );
}
