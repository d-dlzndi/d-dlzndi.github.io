import { allWorkPosts,WorkPost } from "contentlayer/generated";
import Link from "next/link";

export default function NextPrevPostBtns ({
    nextPost,
    prevPost,
  }: {
    nextPost: WorkPost;
    prevPost: WorkPost;
  }) {

    return (
    <div className="flex">
        <div>
            <Link href="/">HOME</Link>
            <Link href="/">CONTECT</Link>
            </div>
            {prevPost && <Link className={`block w-auto text-8xl font-extrabold`} href={prevPost.url ||"/"}>PREV</Link>}
            {nextPost && <Link className={`block w-auto text-8xl font-extrabold`} href={nextPost.url|| "/"}>NEXT</Link>}
        </div>
        );
}