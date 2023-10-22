import { useRouter } from "next/navigation";

// 이래도 서버 클라이언트 쓰라고 하네...
export function History_Back() {
  const router = useRouter();
  return router.back();
}
