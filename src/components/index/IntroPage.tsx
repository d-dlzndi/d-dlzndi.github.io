import { MDXRemote } from "next-mdx-remote";
import { GetStaticPropsContext } from "next";
import usePost from "@/hook/usePost";

export default function IntroPage() {
  //const { data, isLoading, isError } = usePost(undefined, "Intro");
  //if (isLoading) return <Spinner />;
  //if (isError) return <Error />;
  return <div>{"나 힘들다"}</div>;
}

function Spinner() {
  return <>돈다돌아~~~~~~~</>;
}

function Error() {
  return <>오류났어요</>;
}
