"use client";
import styles from "./worklist.module.css";
import Link from "next/link";
import ImgWithPlaceholder from "@/components/common/design/ImgWithPlaceholder";
import Date from "@/components/common/design/Date";
import { WorkPost } from "contentlayer/generated";

export function WorkImage({ post }: { post: WorkPost }) {
  return (
    <Link
      href={post.url || "/"}
      className="block relative w-full h-full aspect-w-16 aspect-h-9"
    >
      <ImgWithPlaceholder
        src={post.image}
        alt={post.title}
        width={400}
        height={300}
        className={
          styles["img"] + " w-full h-full object-center object-cover scale-110"
        }
        unoptimized={false}
      />
      <div
        className={
          styles["work-thumb-text"] +
          " " +
          styles["bg"] +
          " backdrop-blur-sm backdrop-saturate-50 mix-blend-multiply "
        }
        style={{ backgroundColor: post?.color || "oklch(var(--p))" }}
      ></div>
      <div
        className={`${styles["work-thumb-text"]} ${styles["inner"]} bg-clip-text`}
      >
        {post.category && (
          <span
            className={
              styles["category"] +
              " block absolute top-5 left-5 font-extrabold uppercase text-4xl break-keep"
            }
            dangerouslySetInnerHTML={{
              __html: post.category.replaceAll("-", "<br />"),
            }}
          />
        )}
        <p
          className={
            styles["date"] + " absolute bottom-5 left-5 font-extralight"
          }
        >
          <Date dateString={post.startDate} />
          <br />
          -
          <br />
          <Date dateString={post.date} />
        </p>
        <h4
          className={
            styles["title"] +
            " bottom-5 right-5 font-medium text-right text-2xl"
          }
        >
          {post.title}
        </h4>
      </div>
    </Link>
  );
}
