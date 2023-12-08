import LineSvg from "@/assets/svg/index/line.svg";

export default function DecoLine({ className }: { className?: string }) {
  return (
    <LineSvg
      className={
        "absolute top-[25%] left-0 w-[calc(120%)] ml-[-10%] h-full z-[-1] stroke-secondary " +
        className
      }
      preserveAspectRatio="none"
    />
  );
}
