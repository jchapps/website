import db from "@/utils/db";

type Options = {
  id: number;
};

export const useBlog = async ({ id }: Options) => {
  const blog = await db.post.findUnique({
    where: {
      id,
    },
  });
  return blog;
};
