import { Post } from "contentlayer/generated";
import ImgWithPlaceholder from "../common/ImgWithPlaceholder";
import SlideShowText from "../common/textEffect/SlideShowText";

export default function IntroPage({ post }: { post: Post }) {
  return (
    <div className="w-full h-full justify-center items-center flex">
      <div className="flex-1 flex justify-end p-10">
        <div className=" w-[80%] h-[50vh] overflow-hidden rounded-full">
          <ImgWithPlaceholder
            src={"/3.jpg"}
            width={300}
            height={300}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div className="flex-1 p-10">
        <h1>
          <SlideShowText
            textSource={post.title.split("<br />").map((v) => v.toUpperCase())}
            className="text-7xl break-keep font-extrabold"
            childClassName="mb-2"
          />
        </h1>
        <div
          className=" pt-8"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </div>
    </div>
  );
}
