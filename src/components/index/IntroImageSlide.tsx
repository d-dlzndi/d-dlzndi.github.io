import "./style.css";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroImageSlide({
  imageUrls,
}: {
  imageUrls: string[];
}) {
  imageUrls = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];
  const [focus, setFocus] = useState(0);
  const [focusBefore, setFocusBefore] = useState(imageUrls.length - 1);
  const [nowControl, setNowControl] = useState(false);

  const focusSetAt = (next: number) => {
    if (next >= imageUrls.length) next = 0;
    else if (next < 0) next = imageUrls.length - 1;
    setFocusBefore(focus);
    setFocus(next);
  };
  const focusNext = () => {
    setNowControl(false);
    focusSetAt(focus + 1);
  };
  const focusPrev = () => {
    setNowControl(false);
    focusSetAt(focus - 1);
  };
  const getMyFocus = (fcs: number, add: number) => {
    if (fcs + add >= imageUrls.length) add -= imageUrls.length;
    else if (fcs + add < 0) add += imageUrls.length;
    return fcs + add;
  };

  /**
   * 위로 움직일지 아래로 움직일지 결정함.
   * 버튼을 눌러서 넘어갈 경우(nowControl) 무조건 back이 아님.
   * @returns "back" | ""
   */
  const getBackClass = () =>
    nowControl == false &&
    ((focus < focusBefore &&
      !(focusBefore == imageUrls.length - 1 && focus == 0)) ||
      (focusBefore == 0 && focus == imageUrls.length - 1))
      ? "back"
      : "";

  useEffect(() => {
    console.log(
      "before : " +
        focusBefore +
        "/ after: " +
        focus +
        " / 컨트롤중 " +
        nowControl
    );

    return () => {};
  }, [focusBefore, focus]);

  return (
    <div className="slide flex-1 w-full h-full flex flex-col items-center">
      <div className="slide_main_box w-full h-[60vh] flex items-end justify-center overflow-hidden">
        <div className="slide_main w-[400px] h-[400px] bg-indigo-300">
          {
            <Images
              imageUrls={imageUrls}
              className={(idx) =>
                idx == focus
                  ? "focus " + getBackClass()
                  : idx == focusBefore
                  ? "focus_before " + getBackClass()
                  : ""
              }
              width={500}
              height={500}
            />
          }
        </div>
        <button
          className="absolute bottom-0 left-[50%] mx-auto"
          onClick={focusNext}
        >
          아래
        </button>
      </div>
      <div className="flex flex-col justify-around items-center gap-2 p-2">
        {imageUrls.slice(1).map((btnUrl, idx) => {
          const max_width = 450;
          const min_width = 150;
          const width =
            max_width -
            ((max_width - min_width) / (imageUrls.length - 2)) * idx;
          const height = 50;
          return (
            <button
              key={btnUrl}
              style={{ width: width, height: height }}
              className={`slide_btn`}
              onClick={() => {
                setNowControl(true);
                focusSetAt(getMyFocus(focus, idx + 1));
              }}
            >
              {
                <Images
                  imageUrls={imageUrls}
                  className={(imgIdx) =>
                    imgIdx == getMyFocus(focus, idx + 1)
                      ? "focus " + getBackClass()
                      : imgIdx == getMyFocus(focusBefore, idx + 1)
                      ? "focus_before " + getBackClass()
                      : ""
                  }
                  width={width}
                  height={height}
                />
              }
            </button>
          );
        })}
      </div>
      <button onClick={focusPrev}>이전</button>
      <button onClick={focusNext}>다음</button>
    </div>
  );
}

function Images({
  imageUrls,
  className,
  width,
  height,
}: {
  imageUrls: string[];
  className: (imgIdx: number) => string;
  width: number;
  height: number;
}) {
  return imageUrls.map((url, imgIdx) => (
    <Image
      key={url}
      src={url}
      alt={"image"}
      className={`slide_img w-[${width}px] h-[${height}px] ${className(
        imgIdx
      )}`}
      width={width}
      height={height}
    />
  ));
}
