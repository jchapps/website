import db from "@/utils/db";

type Options = {
  slug: number;
};

export const useBlog = async ({ slug }: Options) => {
  const blog = await db.post.findUnique({
    where: {
      id: slug,
    },
  });
  return blog;
};
