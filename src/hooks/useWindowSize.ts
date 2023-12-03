"use client";
import { useEffect, useState } from "react";

type windowSizeType = {
  window: {
    width: number;
    height: number;
  };
  body: {
    width: number;
    height: number;
  };
};

/**
 * code by
 * https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
 * @returns
 */
export default function useWindowSize() {
  const isClient = typeof window === "object";

  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<windowSizeType>({
    window: {
      width: 0,
      height: 0,
    },
    body: {
      width: 0,
      height: 0,
    },
  });

  // only execute all the code below in client side
  // Handler to call on window resize
  function handleResize() {
    // Set window width/height to state
    setWindowSize({
      window: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      body: {
        width: document.body.offsetWidth,
        height: document.body.offsetHeight,
      },
    });
  }

  useEffect(() => {
    if (!isClient) return;
    const evtList = ["resize"];

    // Add event listener
    evtList.forEach(function (evt) {
      window.addEventListener(evt, handleResize);
    });

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => {
      evtList.forEach(function (evt) {
        window.removeEventListener(evt, handleResize);
      });
    };
  }, [isClient]); // Empty array ensures that effect is only run on mount

  useEffect(() => {
    if (!document.body) return;
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(document.body);
    return () => resizeObserver.disconnect(); // clean up
  }, []);

  useEffect(() => {
    if (!document.body) return;
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(document.body);
    return () => resizeObserver.disconnect(); // clean up
  }, []);

  return windowSize;
}
