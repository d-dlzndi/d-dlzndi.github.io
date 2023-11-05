import Link from "next/link";
import { PageWrapper } from "@/components/common/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h2 className=" font-black text-8xl uppercase">
          404 - <br />
          Not Found
        </h2>
        <p className=" text-2xl p-5 pb-24">
          이 페이지는 아직 준비되지 않았습니다. :(
        </p>
        <Link href="/">↩ 첫 화면으로 돌아가기</Link>
      </div>
    </PageWrapper>
  );
}
