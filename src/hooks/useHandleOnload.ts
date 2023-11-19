import { useRouter } from "next/router";
import { useEffect } from "react";

type Handler = (...evts: any[]) => void;

/**
 * Route 주소가 변경됐을 때 특정 액션을 발생시켜야 하는 경우
 * code by : https://velog.io/@bangina/TIL-nextjsreact-라우터-변경시-함수-호출fire-actions-when-router-changed-routeChangeComplete
 * @param handleOnLoad 특정 액션
 */
export default function useHandleOnload(handleOnLoad: Handler) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", handleOnLoad);
    return () => {
      router.events.off("routeChangeComplete", handleOnLoad);
    };
  }, [handleOnLoad, router.events]);
}
