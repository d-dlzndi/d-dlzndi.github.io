import Link from "next/link";
import Image from "next/image";

import { getAllCategories } from "@/lib/post_api";
import { PageWrapper } from "@/components/PageWrapper";
import MainBackground from "../MainBackground";

export const category_all: string = "All";

export default function WorkLayout({
  children,
  selectedCategory = "",
}: {
  children: React.ReactNode;
  selectedCategory: string;
}) {
  const categoryList = [category_all].concat(getAllCategories());

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
                <ul className="flex flex-col gap-1">
                  {categoryList.map((category, idx) => (
                    <li key={idx}>
                      <Link
                        className={`relative inline-block w-auto px-3 pt-1 pb-1 rounded-full ${
                          category == selectedCategory
                            ? "bg-black text-cyan-50"
                            : "bg-slate-100"
                        }`}
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
