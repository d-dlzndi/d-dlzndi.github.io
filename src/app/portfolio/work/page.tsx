import ScreenWorkList from "./ScreenWorkList";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "WORK",
};

export default function MainWorkPage() {
  return (
    <div className=" w-full p-10 pt-[30vh]">
      <h1 className=" text-5xl lg:text-7xl mb-10">WORK</h1>
      <ScreenWorkList />
    </div>
  );
}
