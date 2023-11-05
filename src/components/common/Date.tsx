import dayjs from "dayjs";

export default function Date({
  dateString,
  dateFormat = "YYYY.MM.",
  className = " ",
}: {
  dateString?: string | Date;
  dateFormat?: string;
  className?: string;
}) {
  if (!dateString) return <></>;
  return (
    <time className={className}>{dayjs(dateString).format(dateFormat)}</time>
  );
}
