"use client";
import { Icons } from "@/components/common/Icons/Icons";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h2 className=" font-black text-5xl md:text-8xl uppercase text-accent">
        404 - <br />
        Not Found
      </h2>
      <p className=" md:text-2xl p-5 pb-24 text-secondary">
        이 페이지는 아직 준비되지 않았습니다. :(
      </p>
      <button onClick={() => router.back()}>
        <Icons.uturnLeft width={30} height={30} className=" fill-neutral" />
      </button>
    </div>
  );
}
