import Img from "@/components/common/ImgWithPlaceholder";
import Modal from "@/components/common/modal/Modal";
import useImgPreview from "@/hooks/useImgPreview";
import nullImg from "@/../public/img/no-img.gif";

export default function PreviewPage(params: any) {
  const { getImg } = useImgPreview();
  const img =
    "img" in params.searchParams
      ? getImg(params.searchParams["img"])
      : { src: nullImg, alt: "NO Image" };

  return (
    <Modal>
      <Img
        src={img.src}
        alt={img.alt}
        width={1000}
        height={1000}
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          width: "auto",
          height: "auto",
        }}
      />
    </Modal>
  );
}
