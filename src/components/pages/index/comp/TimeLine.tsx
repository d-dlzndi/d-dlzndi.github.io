"use client";
export type timelineType = { year: string; name: string; priority: number; };
/*
priority :
0 ; 흰배경 검은글자 검은아이콘
1 ; 노란배경 검은글자 검은아이콘
2 ; 흰배경 파란글자 파란아이콘
*/

export function TimeLine({
  data,
  className,
  lastData,
  lastUse = false,
}: {
  data: timelineType[];
  className?: string;
  lastData?: timelineType;
  lastUse?: boolean;
}) {
  if (!lastData)
    lastData = {
      year: `${new Date().getFullYear()}.${new Date().getMonth()}.`,
      name: "NOW",
      priority: 1
    };
  const hrBg = "bg-neutral opacity-50";
  // const svgFill = "fill-secondary";
  return (
    <ul className={`timeline timeline-vertical ${className}`}>
      {data.map((d, idx) => (
        <li key={d.name} className="">
          {idx !== 0 && <hr className={hrBg} />}
          <div className="timeline-start">{d.year}</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className={`w-5 h-5 ${
                d.priority == 2  ? "fill-primary" : 
                d.priority == 1 ? "fill-base-content" :
                "fill-base-content"
              }`}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className={`timeline-end timeline-box border-0 ${
            d.priority == 2 ? "text-primary" :
            d.priority == 1 ? "bg-secondary" :
            ""
            }`}>
            {d.name}
          </div>
          {((lastUse && idx == data.length - 1) ||
            (!lastUse && idx != data.length - 1)) && (
            <hr className={idx == data.length - 1 ? `` : hrBg} />
          )}
        </li>
      ))}
      {lastUse && (
        <li>
          <hr />
          <div className="timeline-start">{lastData.year}</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-5 h-5 fill-secondary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className={`timeline-end timeline-box border-0 ${
              lastData.priority == 2 ? "text-primary" :
              lastData.priority == 1 ? "bg-secondary" :
              ""
            }`}>
            {lastData.name}
          </div>
        </li>
      )}
    </ul>
  );
}
