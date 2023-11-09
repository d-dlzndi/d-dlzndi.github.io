"use client";

import getBase64 from "@/utils/getBase64";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useMemo } from "react";
import nullImg from "@/../public/5.jpg";

type returnType = {
  base64: any;
  img: { src: string | StaticImageData; width: number; height: number };
};

export default function Img(params: { [key: string]: any }) {
  const [data, setData] = useState<returnType>({
    base64: "",
    img: {
      src: params.src,
      width: params?.width || 500,
      height: params?.height || 500,
    },
  });

  useEffect(() => {
    let active = true;
    // load();
    return () => {
      active = false;
    };
    async function load() {
      //const { base64, img } = await getBase64(params.src, 10);
      if (!active) {
        return;
      }
      //setData({ base64, img });
    }
  }, [params.src]);

  return (
    <Image
      alt={params.alt || ""}
      src={data.img.src}
      width={data.img.width}
      height={data.img.height}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = nullImg.src;
      }}
      placeholder="blur"
      blurDataURL={data.base64 || params.src}
      style={{ backgroundColor: "#ffffff80" }}
      {...params}
    />
  );
}
