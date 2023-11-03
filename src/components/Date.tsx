import { parseISO, format } from "date-fns";

export default function Date({
  dateString,
  dateFormat = "yyyy.MM.",
  className = "",
}: {
  dateString?: string | null;
  dateFormat?: string;
  className?: string;
}) {
  const date = parseISO(dateString || "1999-01-01");
  return (
    <time className={className} dateTime={date.toDateString()}>
      {format(date, dateFormat)}
    </time>
  );
}
