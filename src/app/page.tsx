"use client";
import { PageWrapper } from "../../component/PageWrapper";
import SlideShowText from "../../component/text_effect/SlideShowText";

import MainPage from "./MainPage";
import MainBackground from "./MainBackground";

export default function Home() {
  const fullpages = [
    { text: "a~~~~~~~~~~~~~~~~~~~~~~~~" },
    { text: "b123123123123123123" },
    { text: "a" },
    { text: "b" },
    { text: "a" },
    { text: "b" },
    { text: "a" },
    { text: "b" },
  ];

  return (
    <main className="">
      <PageWrapper>
        <MainBackground type="middle" />
        <div id="container">
          {fullpages.map((page, idx) => {
            return <MainPage key={idx} data-anchor={`page-${idx}`} />;
          })}
        </div>
      </PageWrapper>
    </main>
  );
}
