import { useBlog } from "@/api/useBlog";
import Title from "@/components/Title";

export default async function BlogDetails({
  params,
}: {
  params: { id: string };
}) {
  const id = +params.id;
  const blog = await useBlog({ id });

  // TODO: BlogItem Component

  return <Title>{blog?.title}</Title>;
}
