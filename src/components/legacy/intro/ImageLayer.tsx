"use client";

import styles from "./IntroImageSlide.module.css";
import ImgWithPlaceholder from "../../common/design/ImgWithPlaceholder";
import useCustomRouter from "@/hooks/useCustomRouter";
import { ImageData } from "@/../contentlayer.config";
import useImgPreview from "@/hooks/useImgPreview";

export default function ImageLayer({
  imageUrls,
  className,
  width,
  height,
  style,
  onClickEvent = false,
}: {
  imageUrls: ImageData[];
  className: (imgIdx: number) => string;
  width: number;
  height: number;
  style: any;
  onClickEvent?: boolean;
}) {
  const { push } = useCustomRouter();
  const { getProp } = useImgPreview();
  return imageUrls.map((url, imgIdx) => (
    <ImgWithPlaceholder
      style={style}
      key={url.src}
      src={url.src}
      alt={url.alt}
      className={`${
        styles.slide_img
      } w-[${width}px] h-[${height}px] cursor-pointer ${className(imgIdx)}`}
      width={width}
      height={height}
      onClick={() => {
        if (onClickEvent) push(getProp(url));
      }}
    />
  ));
}
