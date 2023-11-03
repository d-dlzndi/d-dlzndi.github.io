import { useEffect, useState } from "react";
import "./TextCircle.css";
import { MotionValue, circInOut, motion, useTransform } from "framer-motion";

export default function TextCircle({
  text,
  width = 100,
  className = "",
  aniDuration,
}: {
  text?: string;
  width: number;
  className?: string;
  aniDuration: MotionValue;
}) {
  const str = text || "MORE MORE MORE MORE MORE ";
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(
      () => setRotate((rotate) => rotate + aniDuration.get()),
      100
    );
    return () => clearTimeout(timeout);
  }, [rotate, aniDuration]);

  return (
    <motion.div
      className={`circle_container ${className}`}
      style={{
        width: width,
        height: width,
      }}
      animate={{
        rotate: rotate,
        transition: { ease: "linear" },
      }}
    >
      {str.split("").map((s, idx) => (
        <span
          key={s + "_" + idx}
          className={`circle select-none`}
          style={{
            rotate: `${((360 / str.length) * idx).toFixed(2)}deg`,
            zIndex: 100,
          }}
        >
          {s}
        </span>
      ))}
    </motion.div>
  );
}
