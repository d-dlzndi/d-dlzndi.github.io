export type simpleChildType = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

export function SimpleFlexBox({
  className,
  commonChildClassName = "border-base-content",
  commonTitleClassName = "",
  datas,
}: {
  className?: string;
  commonChildClassName?: string;
  commonTitleClassName?: string;
  datas: simpleChildType[];
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-5 mb-16 lg:mb-28 ${className}`}
    >
      {datas.map((data) => (
        <div
          key={data.title}
          className={`flex-1 shrink-0 border-t py-5 w-full ${commonChildClassName} ${data.className}`}
        >
          <h4
            className={`text-xs mb-2 xl:text-sm 2xl:text-base uppercase ${commonTitleClassName}`}
          >
            {data.title}
          </h4>
          {data.children}
        </div>
      ))}
    </div>
  );
}
