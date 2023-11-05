export default function ProgramList({
  className,
  programList,
}: {
  className?: string;
  programList?: string[];
}) {
  if (programList == undefined) return null;
  const list = programList;
  return (
    <ol className={"flex flex-row flex-wrap gap-1 " + className}>
      {list.map((program, idx) => (
        <li
          key={idx}
          className="block font-thin select-none uppercase px-4 pt-[2px] pb-[3px] rounded-full bg-white whitespace-nowrap"
        >
          {program}
        </li>
      ))}
    </ol>
  );
}
