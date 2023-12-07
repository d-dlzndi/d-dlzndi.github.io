"use client";
import styles from "./page.module.scss";
import { useRef, useEffect, useState } from "react";

export default function SvgCurveLoader({
  children,
  colorName = "oklch(var(--p))",
}: {
  children: React.ReactNode;
  colorName?: string;
}) {
  const loader = useRef<any>(null);
  const path = useRef<any>(null);
  const initialCurve = 200;
  const duration = 600;
  let start: number;

  useEffect(() => {
    setDivClass("");
    setPath(initialCurve);
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);
  }, []);

  const animate = (timestamp: number) => {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;

    const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
    setPath(newCurve);

    if (loader)
      loader.current.style.top =
        easeOutQuad(elapsed, 0, -loaderHeight() - 50, duration) + "px";

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    } else {
      // 종료 시
      if (loader) loader.current.style.display = "none";
    }
  };

  const easeOutQuad = (
    time: number,
    start: number,
    end: number,
    duration: number
  ) => {
    return -end * (time /= duration) * (time - 2) + start;
  };

  const loaderHeight = () => {
    const loaderBounds = loader.current.getBoundingClientRect();
    return loaderBounds.height;
  };

  const setPath = (curve: number) => {
    const width = window.innerWidth;
    const height = loaderHeight();
    path.current.setAttributeNS(
      null,
      "d",
      `M0 0
    L${width} 0
    L${width} ${height}
    Q${width / 2} ${height - curve} 0 ${height}
    L0 0`
    );
  };

  const [divClass, setDivClass] = useState(colorName);

  return (
    <>
      {children}
      <div
        ref={loader}
        className={styles.loader}
        style={{ backgroundColor: divClass, fill: colorName }}
      >
        <svg>
          <path ref={path}></path>
        </svg>
      </div>
    </>
  );
}
