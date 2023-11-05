import dayjs from "dayjs";

export default function Date({
  dateString,
  dateFormat = "yyyy.MM.",
  className = " ",
}: {
  dateString?: string | Date;
  dateFormat?: string;
  className?: string;
}) {
  if (!dateString) return <></>;
  return (
    <time className={className}>{dayjs(dateFormat).format(dateFormat)}</time>
  );
}
