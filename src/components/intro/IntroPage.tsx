import { Post } from "contentlayer/generated";
import ImgWithPlaceholder from "../common/ImgWithPlaceholder";
import SlideShowText from "../common/textEffect/SlideShowText";

export default function IntroPage({ post }: { post: Post }) {
  return (
    <div className="w-full h-full justify-center items-center flex flex-col-reverse lg:flex-row p-10">
      <div className="flex-1 p-10">
        <h1>
          <SlideShowText
            textSource={post.title.split("<br />").map((v) => v.toUpperCase())}
            className=" text-4xl lg:text-7xl break-keep font-extrabold"
            childClassName="mb-2"
          />
        </h1>
        <div
          className=" pt-8"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </div>
      <div className="flex-1 flex justify-start p-10">
        <div className=" w-full h-[60vh] overflow-hidden rounded-full">
          <ImgWithPlaceholder
            src={""}
            width={300}
            height={300}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
