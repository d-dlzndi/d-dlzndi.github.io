import { LandingBox } from "../index/LandingPage";
import { Icons } from "@/components/common/Icons/Icons";
import { Data as d } from "../../../libs/ContactDatas";
import { SimpleFlexBox } from "../work/SimpleFlexBox";

export default function AboutPage() {
  return (
    <LandingBox className={""}>
      <div className=" flex flex-col lg:flex-row place-items-stretch min-h-screen bg-base-100">
        <div className="flex-1 min-h-[14rem] bg-secondary bg-[url(/img/index/bg.jpg)] bg-cover lg:bg-fixed bg-center bg-blend-exclusion saturate-[1.5]"></div>
        <div className="flex-1 lg:mt-56 p-4 md:p-10 flex flex-col">
          <SimpleFlexBox
            className="!flex-col !mb-0"
            commonChildClassName=" border-base-content text-4xl"
            datas={[
              {
                title: d.title,
                className: "!border-0 !pt-0",
                children: (
                  <div className="text-xl break-keep whitespace-pre-wrap">
                    {d.description}
                  </div>
                ),
              },
              ...d.urls.map((data) => ({
                title: data.title,
                children: (
                  <>
                    <a
                      href={data.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-primary hover:underline font-bold"
                    >
                      {data.text}
                      <Icons.link
                        className="inline-block align-top"
                        width={20}
                        height={20}
                      />
                    </a>
                  </>
                ),
              })),
            ]}
          />
        </div>
      </div>
    </LandingBox>
  );
}
