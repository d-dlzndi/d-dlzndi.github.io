"use client";
import usePosts from "@/hooks/usePosts";
import { notFound } from "next/navigation";
import SlideShowText from "@/components/common/textEffect/SlideShowText";
import { motion } from "framer-motion";
import { LandingBox } from "./LandingPage";

function HelloPage() {
  const { allPosts } = usePosts();
  const indexPost = allPosts.find((allpost) => allpost.slug == "Intro");
  if (!indexPost) return notFound();

  return (
    <LandingBox className={`h-screen text-primary`}>
      <div className="flex flex-col mt-[30vh] lg:m-0 lg:flex-row gap-5 p-10 h-screen justify-stretch items-start lg:items-end text-primary relative">
        <SlideShowText
          textSource={indexPost.title.split("\\n")}
          className="text-5xl lg:text-[10vw] 2xl:text-[12em] w-full my-[-0.1em] leading-none font-black lg:mb-2"
          delay={0.5}
        />
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 3, duration: 1 }}
          viewport={{ once: true }}
          className=" lg:absolute lg:top-1/3 lg:left-3/4 w-28 break-keep whitespace-pre"
          dangerouslySetInnerHTML={{ __html: indexPost.body?.html || "" }}
        />
      </div>
    </LandingBox>
  );
}
