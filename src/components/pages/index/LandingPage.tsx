import { DesignSection } from "./sections/DesignSection";
import { AboutMePage } from "./sections/AboutMePage";
import { ProgrammingSection } from "./sections/ProgrammingSection";
import { AnimationSection } from "./sections/AnimationSection";
import { HiPage } from "./sections/HiPage";
import { ThankSection } from "./sections/ThankSection";

export default function LandingPage(params: any) {
  return (
    <>
      <HiPage />
      <AboutMePage />
      <div>
        <AnimationSection />
        <ProgrammingSection />
        <DesignSection />
        <ThankSection />
      </div>
    </>
  );
}

export function LandingBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className: any;
}) {
  return (
    <div className={" w-screen flex justify-center items-center " + className}>
      <div className="w-screen h-full max-w-[1920px] relative">{children}</div>
    </div>
  );
}