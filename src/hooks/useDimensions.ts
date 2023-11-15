import { MutableRefObject, useEffect, useState } from "react";

export default function useDimensions(targetRef: MutableRefObject<any>) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  useEffect(() => {
    function handleResize() {
      if (targetRef.current) {
        setDimensions({
          width: targetRef.current.offsetWidth,
          height: targetRef.current.offsetHeight,
          top: targetRef.current.offsetTop,
          left: targetRef.current.offsetLeft,
        });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return dimensions;
}
