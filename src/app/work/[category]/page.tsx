import Link from "next/link";
import Image from "next/image";

import { getAllPostsInCategory } from "../../../../lib/post_api";
import WorkLayout from "../WorkLayout";
import { notFound } from "next/navigation";

export default function WorkCategory(params: any) {
  const category = params.params.category;
  const galleryContentList: any[] = getAllPostsInCategory(
    ["title", "image", "category"],
    category
  );

  if (!category || galleryContentList.length <= 0) {
    return notFound();
  }

  return (
    <WorkLayout selectedCategory={category}>
      <div className="gallery-contents w-2/3 flex flex-row flex-wrap content-start">
        {galleryContentList.map((article, idx) => {
          return (
            <figure
              key={idx}
              className=" w-1/2 max-h-[28.125%]  overflow-hidden"
            >
              <Link
                href={`/work/${encodeURI(article.category)}/${encodeURI(
                  article.title
                )}`}
              >
                <img
                  src={
                    "https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                  }
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
    </WorkLayout>
  );
}
