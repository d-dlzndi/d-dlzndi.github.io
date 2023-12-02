import { LandingBox } from "../index/LandingPage";
import { Icons } from "@/components/common/Icons/Icons";

const contactTitle = "CONTACT";
const urlData = [
  {
    title: "Email",
    text: "sksoyks@naver.com",
    url: "mailto:sksoyks@naver.com",
  },
  {
    title: "Tel",
    text: "+82 010-2923-8734",
    url: "tel:01029238734",
  },
  {
    title: "Saram.In",
    text: "blabla.com",
    url: "blabla.com",
  },
  {
    title: "Github",
    text: "Github.com/d-dlzndi",
    url: "https://github.com/d-dlzndi",
  },
];

export default function AboutPage() {
  return (
    <LandingBox className={""}>
      <div className="mt-56 p-10 mb-52 flex flex-col lg:flex-row gap-5 text-2xl lg:text-4xl ">
        <div className="flex-[2] ">
          <div className="border-t border-base-content pt-4 font-light">
            {contactTitle}
          </div>
          <div className="flex-[3] pt-8 text-base opacity-30 w-2/3 break-keep">
            국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다.
            국회의 정기회는 법률이 정하는 바에 의하여 매년 1회 집회되며, 국회의
            임시회는 대통령 또는 국회재적의원 4분의 1 이상의 요구에 의하여
            집회된다. 대통령후보자가 1인일 때에는 그 득표수가 선거권자 총수의
            3분의 1 이상이 아니면 대통령으로 당선될 수 없다. 국회의원은 국회에서
            직무상 행한 발언과 표결에 관하여 국회외에서 책임을 지지 아니한다.
          </div>
        </div>
        <div className="flex-[6] flex flex-col font-light">
          {urlData.map((data, idx) => {
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
                    <Icons.arrowUpRight
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
