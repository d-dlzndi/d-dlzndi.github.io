export default function useImgPreview() {
  const getImg = (param: string) => JSON.parse(decodeURI(param));

  const getProp = ({ src, alt }: { src: string; alt: string }) => ({
    pathname: "/preview",
    query: { img: encodeURI(JSON.stringify({ src, alt })) },
  });

  return {
    getImg,
    getProp,
  };
}
