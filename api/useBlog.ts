import db from "@/utils/db";

type Options = {
  id: number;
};

export const useBlog = async ({ id }: Options) => {
  const blogs = await db.post.findUnique({
    where: {
      id: id,
    },
  });
  return blogs;
};
