//@ts-nocheck
import mediumZoom, { Zoom } from "medium-zoom";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Img from "../design/ImgWithPlaceholder";
import useWorkPosts from "@/hooks/useWorkPosts";

export default function ZoomImage({
  src,
  alt,
  ...props
}: React.ComponentProps<"img">) {
  const ref = useRef(null);
  const [zoom, setZoom] = useState<Zoom>();
  const { getImgBase64BySrc, getImgSizeBySrc } = useWorkPosts();
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
    <Img
      ref={ref}
      width={1920}
      height={1080}
      src={src || ""}
      alt={alt || ""}
      size={getImgSizeBySrc(src)}
      base64={getImgBase64BySrc(src)}
      {...props}
    />
  );
}
