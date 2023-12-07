//@ts-nocheck
import mediumZoom, { Zoom } from "medium-zoom";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ZoomImage({
  src,
  alt,
  ...props
}: React.ComponentProps<"img">) {
  const ref = useRef<HTMLImageElement>(null);
  const [zoom, setZoom] = useState<Zoom>();
  const background = "oklch(var(--p))";

  useEffect(() => {
    if (!ref.current || ref.current.classList.contains("medium-zoom-image"))
      return;

    setZoom(mediumZoom(ref.current, { background }));
  }, []);

  useEffect(() => {
    zoom?.update({ background });
  });

  // return <Image src={src || ""} alt={alt || ""} {...props} />;
  return (
    <Image
      ref={ref}
      width={1920}
      height={1080}
      src={src || ""}
      alt={alt || ""}
      {...props}
    />
  );
}
