export function TextCircle() {
  const str = "MORE MORE MORE MORE MORE MORE MORE MORE MORE MORE ";
  return (
    <div className=" relative w-[100px] h-[100px]">
      {str.split("").map((s, idx) => (
        <span
          key={s + "_" + idx}
          className={`absolute top-0 left-[50%-1em] inline-block w-[1em] h-full origin-bottom rotate-[${(
            (360 / str.length) *
            idx
          ).toFixed(2)}deg]`}
        >
          {s}
        </span>
      ))}
    </div>
  );
}
