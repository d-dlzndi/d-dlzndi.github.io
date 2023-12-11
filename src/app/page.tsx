import { Icons } from "@/components/common/Icons/Icons";
import Link from "next/link";
import Script from "next/script";

export default function Index() {
  return (
    <>
      <div className="py-32 text-center ">
        <a href={"/portfolio"} className="text-5xl">
          PORTFOLIO{" "}
          <Icons.arrowRight
            width={40}
            height={40}
            className="inline-block align-baseline"
          />
        </a>
      </div>
      <Script
        id={"indexScript"}
        dangerouslySetInnerHTML={{ __html: `location.replace("/portfolio")` }}
      />
    </>
  );
}
