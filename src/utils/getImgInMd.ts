/**
 * CODE FROM :: https://www.eddymens.com/blog/regex-get-all-images-in-a-markdown-file-js
 */

type imgType = { alt: string; src: string };

export default function getImgInMd(str: string) {
  const regex =
    /!\[(?<altText>.*)\]\s*\((?<imageURL>.+)\)|img\s*src="(?<imageURL1>[^"]*)"\s*alt="(?<altText1>[^"]*)" \/>|img\s*alt="(?<altText2>[^"]*)"\s*src="(?<imageURL2>[^"]*)" \/>/gm;

  let m: any;
  const images: imgType[] = [];
  while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) regex.lastIndex++;
    images.push({
      alt: m.groups.altText ?? m.groups.altText1 ?? m.groups.altText2,
      src: m.groups.imageURL ?? m.groups.imageURL1 ?? m.groups.imageURL2,
    });
  }

  return images;
}
