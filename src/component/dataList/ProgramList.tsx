export default function ProgramList({
  className,
  programList,
}: {
  className?: string;
  programList?: string;
}) {
  if (programList == undefined) return null;
  const list = programList.split(",").map((t: string) => t.trim()) as string[];
  return (
    <ol className={"flex flex-row flex-nowrap gap-1 " + className}>
      {list.map((program, idx) => (
        <li
          key={idx}
          className="block font-thin uppercase px-4 pt-[2px] pb-[3px] rounded-full bg-white whitespace-nowrap"
        >
          {program}
        </li>
      ))}
    </ol>
  );
}
