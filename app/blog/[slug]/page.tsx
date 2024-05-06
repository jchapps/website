import { useBlog } from "@/api/useBlog";
import InfoItem from "@/components/InfoItem";
import Title from "@/components/Title";

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const slug = +params.slug;
  const blog = await useBlog({ slug });

  // TODO: BlogItem Component

  return (
    <>
      <Title>{blog?.title}</Title>
      <InfoItem>epic content</InfoItem>
    </>
  );
}
