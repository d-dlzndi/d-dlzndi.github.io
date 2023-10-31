import { parseISO, format } from "date-fns";

export default function Date({
  dateString,
  dateFormat = "yyyy.MM.",
  className = "",
}: {
  dateString: string;
  dateFormat?: string;
  className?: string;
}) {
  const date = parseISO(dateString);
  return (
    <time className={className} dateTime={dateString}>
      {format(date, dateFormat)}
    </time>
  );
}
