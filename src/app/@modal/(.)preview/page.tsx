"use client";

import Img from "@/components/common/ImgWithPlaceholder";
import Modal from "@/components/common/modal/Modal";
import { useSearchParams } from "next/navigation";
import useImgPreview from "@/hooks/useImgPreview";

export default function PreviewPage() {
  const params = useSearchParams();
  const { getImg } = useImgPreview();
  const img = getImg(params.get("img") || "");

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
