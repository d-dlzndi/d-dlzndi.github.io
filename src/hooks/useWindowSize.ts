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
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<windowSizeType>({
    window: {
      width: 1,
      height: 1,
    },
    body: {
      width: 1,
      height: 1,
    },
  });

  useEffect(() => {
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

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
