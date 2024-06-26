import { DesignSection } from "./sections/DesignSection";
import { AboutMePage } from "./AboutMePage";
import { ProgrammingSection } from "./sections/ProgrammingSection";
import { AnimationSection } from "./sections/AnimationSection";
import { HiPage } from "./HiPage";
import { ThankSection } from "./sections/ThankSection";
import { FXSection } from "./sections/FXSection";

export default function LandingPage(params: any) {
  return (
    <>
      <HiPage />
      <AboutMePage />
      <div>
        <FXSection />
        <AnimationSection />
        <ProgrammingSection />
        <DesignSection />
      </div>
      <ThankSection />
    </>
  );
}

export function LandingBox({
  children,
  className,
  childClassName,
}: {
  children: React.ReactNode;
  className: any;
  childClassName?: any;
}) {
  return (
    <div className={" w-screen flex justify-center items-center " + className}>
      <div
        className={"w-screen h-full max-w-[1920px] relative " + childClassName}
      >
        {children}
      </div>
    </div>
  );
}
