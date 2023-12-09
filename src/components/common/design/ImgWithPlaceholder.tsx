import Image, { StaticImageData } from "next/image";
import nullImg from "@/../public/img/no-img.gif";
import { forwardRef } from "react";

const Img = forwardRef(function Img(
  props: {
    alt?: string;
    src?: string;
    width?: number;
    height?: number;
    base64?: any;
    size?: any;
    [key: string]: any;
  },
  ref?: any
) {
  // await getBase64(params.src, 10)
  const { alt, src, width, height, base64, size, ...paramList } = props;
  return (
    <Image
      ref={ref}
      alt={alt || ""}
      src={src || nullImg}
      width={width}
      height={height}
      style={{ aspectRatio: size ? size.width / size.height : "auto" }}
      quality={90}
      placeholder={base64 ? base64 : "empty"}
      {...paramList}
    />
  );
});

export default Img;
