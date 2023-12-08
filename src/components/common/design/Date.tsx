import dayjs from "dayjs";
import "dayjs/locale/ko";

// dayjs.locale("ko");

export default function Date({
  dateString,
  dateFormat = "YYYY.MM.",
  className = " ",
}: {
  dateString?: string | Date | undefined;
  dateFormat?: string;
  className?: string;
}) {
  if (!dateString) return <></>;
  return (
    <time className={className}>{dayjs(dateString).format(dateFormat)}</time>
  );
}
