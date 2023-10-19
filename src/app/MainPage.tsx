import Link from "next/link";

type awardDataType = {
  name: string;
  special: boolean;
  href?: string;
};

export default function MainPage() {
  const programList = [
    "photoshop",
    "illustrator",
    "maya",
    "premiere",
    "after effect",
    "maya",
    "premiere",
    "after effect",
  ];

  const awardList: awardDataType[] = [
    { name: "어쩌고저쩌고 참여작", special: false, href: "naver.com" },
    { name: "어쩌고 룰루 블라 릴라 장려상", special: true },
  ];

  return (
    <article className="w-screen h-screen">
      <div className="w-full h-full flex flex-col">
        <div className="fixed top-0 right-0 w-1/2 h-screen z-10">
          <div className="main-img absolute bg-indigo-300 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden">
            <img
              className="object-cover object-center"
              width={500}
              height={800}
            />
          </div>
          <div className="absolute top-10 left-10 font-bold text-5xl">
            <span>2019.10.</span>
            <br />
            <span>-</span>
            <br />
            <span>2020.04.</span>
          </div>
          <div className="absolute bottom-10 right-10 p-10">
            <Link href={"/"} className="font-medium text-xl ">
              <span>MORE</span>
            </Link>
          </div>
        </div>
        <header className="top-box w-2/3 h-1/2 relative p-10 flex flex-col justify-between">
          <AwardList
            className="flex flex-row flex-nowrap"
            awardList={awardList}
          />
          <div className="relative">
            <p className="sub-title uppercase relative">
              <Link href="/">3D animation</Link>
            </p>
            <h2 className="main-title relative font-bold text-7xl break-keep">
              <Link href="/">반갑습니다~~ 반갑습니다~~반갑</Link>
            </h2>
          </div>
        </header>
        <div className="bottom-box relative w-2/3 h-1/2 p-10 flex flex-col justify-between">
          <div className="flex flex-row gap-3 w-3/4">
            <p className="description1 flex-1 break-all text-justify">
              모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한
              이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다. 모든 국민은
              법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다.
              대통령은 제4항과 제5항의 규정에 의하여 확정된 법률을 지체없이
              공포하여야 한다. 제5항에 의하여 법률이 확정된 후 또는 제4항에 의한
              확정법률이 정부에 이송된 후 5일 이내에 대통령이 공포하지 아니할
              때에는 국회의장이 이를 공포한다.
            </p>
            <p className="description2 flex-1  break-all text-justify">
              대통령은 제4항과 제5항의 규정에 의하여 확정된 법률을 지체없이
              공포하여야 한다. 제5항에 의하여 법률이 확정된 후 또는 제4항에 의한
              확정법률이 정부에 이송된 후 5일 이내에 대통령이 공포하지 아니할
              때에는 국회의장이 이를 공포한다.
            </p>
          </div>
          <nav className="relative">
            <h5 className="mb-2">PROGRAM</h5>
            <ProgramList programList={programList} className="" />
          </nav>
        </div>
      </div>
    </article>
  );
}

export function AwardList({
  className,
  awardList,
}: {
  className?: string;
  awardList: awardDataType[];
}) {
  return (
    <>
      <ol className={`award-list relative ${className}`}>
        {awardList.map((v, idx) => (
          <li key={idx} className="-m-2 ">
            <a href={v.href} target="_blank">
              <div className="w-[8em] h-[8em] p-3 rounded-[100%] bg-slate-300 text-center table-cell align-middle break-keep">
                {v.name}
              </div>
            </a>
          </li>
        ))}
      </ol>
    </>
  );
}

export function ProgramList({
  className,
  programList,
}: {
  className?: string;
  programList: string[];
}) {
  return (
    <>
      <ol className={"flex flex-row flex-nowrap gap-1 " + className}>
        {programList.map((program, idx) => (
          <li
            key={idx}
            className="block font-thin uppercase px-4 pt-[2px] pb-[3px] rounded-full bg-white whitespace-nowrap"
          >
            {program}
          </li>
        ))}
      </ol>
    </>
  );
}
