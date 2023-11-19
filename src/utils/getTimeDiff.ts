import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.locale("ko");

dayjs.updateLocale("ko", {
  relativeTime: {
    future: "%s 후",
    past: "%s 전",
    s: "몇 초",
    m: "1분",
    mm: "%d분",
    h: "한 시간",
    hh: "%d시간",
    d: "하루",
    dd: "%d일",
    M: "일 개월",
    MM: "%d개월",
    y: "일 년",
    yy: "%d년",
  },
});

export default function getTimeDiff(
  timeToCompare: string,
  now: string = ""
): string {
  const nowtime = dayjs(now == "" ? new Date() : now);
  const compare = dayjs(timeToCompare);
  return dayjs(nowtime).from(compare, true);
}
