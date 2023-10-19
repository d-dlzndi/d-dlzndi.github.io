"use client";
import { PageWrapper } from "../../../component/PageWrapper";

import Link from "next/link";
import { useState } from "react";
// import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData, fileDataType } from "../../../lib/post";

export default function Work({
  allPostsData,
}: {
  allPostsData: fileDataType[];
}) {
  // Delcare what category should be shown
  const [viewCategory, setCategory] = useState("all");

  return (
    <PageWrapper>
      <section>
        <button
          onClick={() =>
            setCategory(viewCategory === "neck-pain" ? "all" : "neck-pain")
          }
        >
          Neck Pain
        </button>
      </section>
      <section>
        <ul>
          {allPostsData?.map(({ id, category, date, title, image }: any) => (
            <li
              key={id}
              style={{
                display:
                  viewCategory === category || viewCategory === "all"
                    ? "block"
                    : "none",
              }}
            >
              <Link href="/[category]/[id]" as={`/${category}/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <p>{date}</p>
              <br />
              <p>{image}</p>
            </li>
          ))}
        </ul>
      </section>
    </PageWrapper>
  );
}

Work.getInitialProps = async () => {
  let pageProps = {};
  try {
    console.log("된다");
    const allPostsData = getSortedPostsData();
    console.log(allPostsData);
    console.log("아아악~");
    pageProps = { allPostsData };
  } catch (error) {
    console.log(error);
  }

  return { pageProps };
};
