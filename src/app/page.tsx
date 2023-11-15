import Link from "next/link";
import Script from "next/script";

export default function Index() {
  return (
    <>
      <Script
        id={"indexScript"}
        dangerouslySetInnerHTML={{ __html: `location.replace("/portfolio")` }}
      />
      <Link href={"/portfolio"}>GO</Link>
    </>
  );
}
