"use client";
import { PageWrapper } from "../../component/PageWrapper";
import SlideShowText from "../../component/text_effect/SlideShowText";

import { FullPage, Slide } from "react-full-page";
import MainPage from "./MainPage";

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
      <div
        id="bg"
        className="fixed bottom-[-50vh] left-0 h-screen w-screen -z-10 bg-indigo-200"
      ></div>
      <PageWrapper>
        <div>
          <MainPage />
        </div>
        {/*}
        <FullPage
          controls
          duration={900}
          controlsProps={{ className: "flex-col fixed top-[50%] right-[20px]" }}
        >
          {fullpages.map(({ text }) => (
            <Slide key={text}>
              <div className="section">
                <h1>{text}</h1>
              </div>
            </Slide>
          ))}
        </FullPage>
          {*/}
      </PageWrapper>
    </main>
  );
}
