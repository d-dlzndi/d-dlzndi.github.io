import { LandingBox } from "../index/LandingPage";
import { Icons } from "@/components/common/Icons/Icons";
import { Data as d } from "./ContactDatas";

export default function AboutPage() {
  return (
    <LandingBox className={""}>
      <div className="mt-56 p-4 md:p-10 mb-52 flex flex-col lg:flex-row gap-5 text-2xl lg:text-4xl ">
        <div className="flex-[2] ">
          <div className="border-t border-base-content pt-4 font-light">
            {d.title}
          </div>
          <div className="flex-[3] pt-8 pb-14 text-base opacity-30 w-2/3 break-keep whitespace-pre-wrap">
            {d.description}
          </div>
        </div>
        <div className="flex-[6] flex flex-col font-light">
          {d.urls.map((data, idx) => {
            return (
              <div
                key={idx}
                className=" pt-4 pb-20 last:border-b flex flex-col md:flex-row place-items-stretch border-t border-base-content"
              >
                <div className="flex-[2] pb-4">{data.title}</div>
                <div className="flex-[4] font-bold">
                  <a
                    href={data.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary hover:underline"
                  >
                    {data.text}
                    <Icons.link
                      className="inline-block align-top"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </LandingBox>
  );
}
