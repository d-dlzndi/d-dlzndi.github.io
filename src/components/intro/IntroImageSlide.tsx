"use client";
import styles from "./IntroImageSlide.module.css";

import { useEffect, useMemo, useState } from "react";
import ArrowNextButton from "../common/button/ArrowNextButton";
import { ImageData } from "@/../contentlayer.config";
import { notFound } from "next/navigation";
import ImageLayer from "./ImageLayer";

export default function IntroImageSlide({
  imageArray,
}: {
  imageArray: ImageData[];
}) {
  // 중복 제거
  const imageUrls = useMemo(() => {
    return imageArray.reduce((unique: any, item) => {
      return unique.find((x: ImageData) => x.src == item.src)
        ? unique
        : [...unique, item];
    }, []);
  }, [imageArray]);

  const [focus, setFocus] = useState(0);
  const [focusBefore, setFocusBefore] = useState(imageUrls.length - 1);
  const [nowControl, setNowControl] = useState(false);

  /**
   * 버튼들 최소 최대 너비
   */
  const max_width = 900;
  const min_width = 200;

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
      ? styles.back
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
  }, [focusBefore, focus, nowControl]);

  return (
    <div className="slide flex-1 w-full h-full flex flex-col items-center">
      <div
        className={
          styles.slide_main_box +
          " w-full h-[60vh] m-h-[60vh] flex items-end justify-center overflow-hidden"
        }
      >
        <ArrowNextButton
          className={"absolute top-8 left-1/2 transform -translate-x-1/2 z-50"}
          onClick={() => {
            focusPrev();
          }}
          direction="top"
          width={40}
          height={40}
          strokeWidth={2}
        />
        <ArrowNextButton
          className={
            "absolute bottom-0 left-1/2 transform -translate-x-1/2 z-50"
          }
          onClick={() => {
            focusNext();
          }}
          direction="bottom"
          width={40}
          height={40}
          strokeWidth={2}
        />
        <div className={styles.slide_main}>
          {
            <ImageLayer
              onClickEvent={true}
              imageUrls={imageUrls}
              style={{}}
              className={(idx) =>
                idx == focus
                  ? styles.focus + " " + getBackClass()
                  : idx == focusBefore
                  ? styles.focus_before + " " + getBackClass()
                  : ""
              }
              width={500}
              height={500}
            />
          }
        </div>
      </div>

      <div className="flex flex-col justify-around items-center gap-2 pt-4 flex-nowrap max-h-[35vh]">
        {imageUrls.slice(1).map((btnUrl: any, idx: number) => {
          let length = imageUrls.length - 2;
          if (length <= 0) length = 1;
          const width = max_width - ((max_width - min_width) / length) * idx;
          const height = 80;
          return (
            <button
              key={btnUrl.src}
              style={{ width: width, height: height, maxWidth: width }}
              className={styles.slide_btn}
              onClick={() => {
                setNowControl(true);
                focusSetAt(getMyFocus(focus, idx + 1));
              }}
            >
              <ImageLayer
                imageUrls={imageUrls}
                style={{ width: max_width, minWidth: max_width }}
                className={(imgIdx) =>
                  (imgIdx == getMyFocus(focus, idx + 1)
                    ? styles.focus + " " + getBackClass()
                    : imgIdx == getMyFocus(focusBefore, idx + 1)
                    ? styles.focus_before + " " + getBackClass()
                    : "") +
                  " " +
                  "max-w-full"
                }
                width={width}
                height={height}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
