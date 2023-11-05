const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

type ScrollToOptions = {
  left?: number;
  top?: number;
  behavior?: "auto" | "smooth";
};

export function scrollToTop(
  option: ScrollToOptions = { top: 0, behavior: "smooth" }
) {
  if (!isBrowser()) return;
  window.scrollTo(option);
}
