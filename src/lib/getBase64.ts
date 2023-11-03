import fs from "fs";
import path from "path";
import { getPlaiceholder } from "plaiceholder";

const getBase64 = async (src: string, size: number = 10) => {
  const buffer = await fs.readFileSync(path.join(process.cwd(), "public", src));

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
