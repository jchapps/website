import db from "@/utils/db";

export const useBlogs = async () => {
  const blogs = await db.post.findMany({});
  return blogs;
};
