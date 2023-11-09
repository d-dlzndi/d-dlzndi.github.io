import { readFileSync } from "fs";
import { join } from "path";
import { getPlaiceholder } from "plaiceholder";
import { useMemo } from "react";

const getBase64 = async (src: string, size: number = 10) => {
  const buffer = await readFileSync(join(process.cwd(), "public", src));

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: size });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

export default getBase64;
