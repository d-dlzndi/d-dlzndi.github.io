import Link from "next/link";
import Image from "next/image";

import { PageWrapper } from "../../../component/PageWrapper";
import MainBackground from "../MainBackground";
import { getAllCategories } from "../../../lib/post_api";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoryList = ["all"].concat(getAllCategories());

  return (
    <PageWrapper>
      <MainBackground type="right" />
      <section>
        <div className="flex flex-row min-h-screen justify-stretch">
          <header className="header relative w-1/3">
            <div className="sticky top-0 h-screen">
              <h2 className="absolute left-10 bottom-0 text-5xl -rotate-90 origin-top-left font-semibold w-auto h-auto">
                <Link href="/work/">WORK</Link>
              </h2>
              <nav className="absolute left-10 top-[30vh]">
                <h4>CATEGORY</h4>
                <ul className="flex flex-col gap-1">
                  {categoryList.map((category, idx) => (
                    <li key={idx}>
                      <Link
                        className="inline-block w-auto px-3 pt-1 pb-1 rounded-full bg-slate-100 "
                        href={`/work${category == "all" ? "" : "/" + category}`}
                      >
                        {category.replaceAll("-", " ").toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </header>
          {children}
        </div>
      </section>
    </PageWrapper>
  );
}
