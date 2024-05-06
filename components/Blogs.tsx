import { useBlogs } from "@/api/useBlogs";
import InfoItem from "./InfoItem";
import Title from "./Title";
import { convertDate } from "@/utils/convertDate";
import Link from "next/link";

const Blogs: React.FunctionComponent = async () => {
  const blogs = await useBlogs();

  return (
    <div className="max-laptop:pt-8">
      <Title href="/blog">Latest Posts</Title>
      {blogs.map((blog) => {
        return (
          <>
            <InfoItem
              key={blog.title}
              className="before:content-['☞'] before:text-primary pt-4 cursor-pointer max-w-fit"
            >
              <Link href={`${blog.id}`}>&nbsp;{blog.title}</Link>
            </InfoItem>
            <InfoItem className="text-sm" key={blog.title}>
              {convertDate(blog.createdAt)}
            </InfoItem>
          </>
        );
      })}
    </div>
  );
};

export default Blogs;
