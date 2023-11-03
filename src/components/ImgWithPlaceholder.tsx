"use client";

import getBase64 from "@/lib/getBase64";
import Image from "next/image";
import { useEffect, useState } from "react";

type returnType = {
  base64: string;
  img: { src: string; width: number; height: number };
};

export default function ImgWithPlaceholder(params: {
  src: string;
  [key: string]: any;
}) {
  const [data, setData] = useState<returnType>({
    base64: "",
    img: { src: params.src, width: 0, height: 0 },
  });

  useEffect(() => {
    // getBase64(params.src).then(({ base64, img }) => setData({ base64, img }));
  }, [params.src]);

  return (
    <Image
      alt={data.img.src}
      width={data.img.width}
      height={data.img.height}
      placeholder="blur"
      blurDataURL={data.base64 || data.img.src}
      {...params}
    />
  );
}

{
  /* src={params.src} */
}
