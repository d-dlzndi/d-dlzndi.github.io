import { motion } from "framer-motion";

const path = {
  start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
  end: {
    pathLength: 1,
  },
};

type direction = "left" | "right" | "top" | "bottom";

export default function ArrowNextButton({
  className,
  onClick,
  width = 100,
  height = 100,
  strokeWidth = 3,
  direction = "right",
}: {
  className: string;
  onClick: () => void;
  width: number;
  height: number;
  strokeWidth: number;
  direction: direction;
}) {
  return (
    <button
      className={
        "origin-center transition-transform hover:scale-90 hover:opacity-50 active:scale-75 rounded-full " +
        className
      }
      onClick={onClick}
    >
      <div className="w-auto h-auto relative">
        <ArrowSvg />
      </div>
    </button>
  );

  function ArrowSvg({ className }: { className?: string }) {
    return (
      <motion.svg
        width={width}
        height={height}
        strokeWidth={strokeWidth}
        strokeLinejoin={"round"}
        strokeLinecap={"round"}
        className={`${
          direction == "left"
            ? "-scale-x-100"
            : direction == "bottom"
            ? "rotate-90 -scale-y-100"
            : direction == "top"
            ? "-rotate-90"
            : ""
        } stroke-white ${className}`}
        viewBox="0 0 28.59 54.36"
      >
        <motion.polyline
          variants={path}
          initial="start"
          animate="end"
          className={`scale-90 origin-center `}
          transition={{
            default: { duration: 2.5, ease: [0.76, 0, 0.24, 1] },
            // fill: { duration: 1, delay: 1.5 },
          }}
          points=".71 .71 27.18 27.18 .71 53.65"
        />
      </motion.svg>
    );
  }
}
