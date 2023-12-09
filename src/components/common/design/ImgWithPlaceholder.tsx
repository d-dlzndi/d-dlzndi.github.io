"use client";

import getBase64 from "@/utils/getBase64";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useMemo } from "react";
import nullImg from "@/../public/img/no-img.gif";

type returnType = {
  base64: any;
  img: { src: string | StaticImageData; width: number; height: number };
};

export default function Img(params: { [key: string]: any }) {
  const [data, setData] = useState<returnType>({
    base64: "",
    img: {
      src: params.src,
      width: params?.width ? params?.width : 1,
      height: params?.height ? params?.height : 1,
    },
  });

  useEffect(() => {
    let active = true;
    load();
    return () => {
      active = false;
    };
    async function load() {
      const { base64, img } = await getBase64(params.src, 10);
      console.log(img, base64);
      if (!active) {
        return;
      }
      setData({ base64, img });
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
      quality={90}
      priority={true}
      placeholder={!data.base64 ? "empty" : "blur"}
      blurDataURL={data.base64 || params.src}
      style={{ backgroundColor: "#ffffff80" }}
      {...params}
    />
  );
}
