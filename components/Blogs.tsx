import InfoItem from "./InfoItem";
import Title from "./Title";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import React from "react";

export default function Blogs() {
  const allPosts = getAllPosts();

  return (
    <div className="max-laptop:pt-8">
      <Title href="/blog">Latest Posts</Title>
      {allPosts.map(({ date, title, slug }, i) => (
        <React.Fragment key={i}>
          <InfoItem className="before:content-['☞'] before:text-primary pt-4 cursor-pointer max-w-fit hover:text-secondary transition before:dark:text-white">
            <Link href={`blog/${slug}`}>&nbsp;{title}</Link>
          </InfoItem>
          <InfoItem className="text-sm">{date}</InfoItem>
        </React.Fragment>
      ))}
    </div>
  );
}
