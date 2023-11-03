import Link from "next/link";

import { PageWrapper } from "@/components/PageWrapper";
import MainBackground from "../MainBackground";
import CategoryList from "../../components/dataList/CategoryList";
import { getAllCategories } from "@/lib/post_api";

export default function WorkLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string };
}) {
  return (
    <PageWrapper>
      <section>
        <div className="flex flex-row min-h-screen justify-stretch">
          <header className="header relative w-1/3">
            <div className="sticky top-0 h-screen">
              <h2 className="absolute left-10 bottom-0 text-5xl -rotate-90 origin-top-left font-semibold w-auto h-auto">
                <Link href="/work/">WORK</Link>
              </h2>
              <nav className="absolute left-10 top-[30vh]">
                <h4>CATEGORY</h4>
                <CategoryList categoryList={getAllCategories()} />
              </nav>
            </div>
          </header>
          {children}
        </div>
      </section>
    </PageWrapper>
  );
}
