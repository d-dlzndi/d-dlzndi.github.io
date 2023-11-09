import { DefaultFont } from "@/styles/Fonts";
import MainHeader from "../main/MainHeader";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={DefaultFont.className}>
      <MainHeader />
      <div className="flex justify-center items-center w-screen relative">
        <div className="max-w-[var(--width)] w-full">{children}</div>
      </div>
    </div>
  );
}
