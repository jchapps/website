import InfoItem from "@/components/InfoItem";
import Title from "@/components/Title";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import React, { Fragment } from "react";

const Blog: React.FunctionComponent = () => {
  const allPosts = getAllPosts();

  return (
    <>
      {allPosts.map(({ date, title, slug, blurb }, i) => (
        <Fragment key={i}>
          {/* <Link href={`blog/${slug}`}> */}
          <div
            key={title}
            className="shadow rounded-md p-6 space-y-2 mx-2 hover:shadow-lg transition"
          >
            <Title href={`blog/${slug}`}>{title}</Title>
            <InfoItem className="text-md">{blurb}</InfoItem>
            <InfoItem className="text-sm">{date}</InfoItem>
          </div>
          {/* </Link> */}
        </Fragment>
      ))}
    </>
  );
};

export default Blog;
