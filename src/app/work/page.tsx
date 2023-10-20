import Link from "next/link";
import { PageWrapper } from "../../../component/PageWrapper";
import Image from "next/image";

export default function Work() {
  const galleryContentList = [
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello2",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello2",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello2",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello2",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello2",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello2",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello2",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "blabla",
      date: "2034-23-12",
      category: "hello2",
      url: "/work/blabla",
      thumbnail:
        "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
  ];

  const categoryList = ["hello", "hello2"];

  return (
    <PageWrapper>
      <section>
        <div className="flex flex-row min-h-screen justify-stretch">
          <header className="header relative w-1/3">
            <div className="sticky top-0 h-screen">
              <h2 className="absolute left-10 bottom-0 text-5xl -rotate-90 origin-top-left font-semibold w-auto h-auto">
                <Link href="/work/">WORK</Link>
              </h2>
              <nav className="absolute left-10 bottom-[50em]">
                <h4>CATEGORY</h4>
                <ul className="block">
                  {categoryList.map((category, idx) => (
                    <li key={idx}>
                      <Link
                        className="inline-block w-auto px-3 pt-1 pb-1 rounded-full bg-slate-600 "
                        href={`/work/${category}`}
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </header>
          <div className="gallery-contents w-2/3 flex flex-row flex-wrap content-start">
            {galleryContentList.map((article, idx) => {
              return (
                <figure
                  key={idx}
                  className=" w-1/2 max-h-[28.125%]  overflow-hidden"
                >
                  <Link href={article.url}>
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      width={600}
                      height={400}
                      className=" object-center object-cover scale-110"
                      // unoptimized={false} // 나중에 내 홈의 이미지 링크로 변경하게 되면 수정할 것.
                    />
                    <h4>{article.title}</h4>
                  </Link>
                </figure>
              );
            })}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
