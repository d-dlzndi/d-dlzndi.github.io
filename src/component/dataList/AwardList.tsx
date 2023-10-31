import Link from "next/link";
import { awardDataType } from "../../lib/post_api";

export default function AwardList({
  className,
  awardList,
}: {
  className?: string;
  awardList?: string;
}) {
  if (awardList == undefined) return null;
  let list: any[] = [];
  try {
    list = JSON.parse(awardList) as awardDataType[];
  } catch (error) {
    console.log("어워드리스트오류~~~!!" + awardList);
  }
  return (
    <ol className={`award-list relative ${className}`}>
      {list.map((v, idx) => (
        <li key={idx} className="-m-2 ">
          <Link href={v.href} target="_blank">
            <div className="w-[8em] h-[8em] p-3 rounded-[100%] bg-slate-300 text-center table-cell align-middle break-keep">
              {v.name}
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
