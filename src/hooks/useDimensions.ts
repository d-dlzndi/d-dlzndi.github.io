import { MutableRefObject, useEffect, useState } from "react";

export default function useDimensions(targetRef: MutableRefObject<any>) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  const handleResize = () => {
    if (targetRef.current) {
      const d = targetRef.current.getBoundingClientRect();
      setDimensions({
        width: d.width,
        height: d.height,
        top: d.top,
        left: d.left,
      });
    }
  };

  useEffect(() => {
    if (!targetRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(targetRef.current);
    return () => resizeObserver.disconnect(); // clean up
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return dimensions;
}
