import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";
import { join } from "node:path";

const getBase64 = async (src: string, size: number = 10) => {
  try {
    const imgsrc =
      src.indexOf("http") < 0 ? join(process.cwd(), "public", src) : src;
    const buffer = await fs.readFile(imgsrc);

    const {
      metadata: { height, width },
      ...plaiceholder
    } = await getPlaiceholder(buffer, { size: size });

    return {
      ...plaiceholder,
      img: { src, height, width },
    };
  } catch {
    return undefined;
  }
};

export default getBase64;
