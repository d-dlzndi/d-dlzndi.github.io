import Link from "next/link";
import { AwardData } from "contentlayer/generated";

export default function AwardList({
  className,
  awardList,
}: {
  className?: string;
  awardList: AwardData[] | undefined;
}) {
  if (awardList == undefined) return <></>;
  return (
    <ol className={`award-list relative flex isolate ${className}`}>
      {awardList.map((award, idx) => (
        <li key={idx} className={`-m-2 mix-blend-multiply`}>
          <Link href={award.href || ""} target="_blank">
            <div
              className={`w-[8em] h-[8em] p-3 rounded-[100%] text-center table-cell align-middle break-keep ${
                award.special
                  ? "bg-[var(--accent)] text-[var(--background)]"
                  : "bg-[var(--gray)]"
              }`}
            >
              {award.name}
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
