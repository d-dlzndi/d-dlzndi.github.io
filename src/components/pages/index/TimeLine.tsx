"use client";
export type timelineType = { year: string; name: string };

export function TimeLine({
  data,
  lastData,
  lastUse = false,
}: {
  data: timelineType[];
  lastData?: timelineType;
  lastUse?: boolean;
}) {
  if (!lastData)
    lastData = {
      year: `${new Date().getFullYear()}.${new Date().getMonth()}.`,
      name: "NOW",
    };
  const hrBg = "bg-secondary";
  const svgFill = "fill-secondary";
  return (
    <ul className="timeline timeline-vertical ml-[-100%] pl-[10em]">
      {data.map((d, idx) => (
        <li key={d.name} className="">
          {idx !== 0 && <hr className={hrBg} />}
          <div className="timeline-start">{d.year}</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className={"w-5 h-5 " + svgFill}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box text-neutral border-0">
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
          <div className="timeline-end timeline-box text-neutral border-0">
            {lastData.name}
          </div>
        </li>
      )}
    </ul>
  );
}
