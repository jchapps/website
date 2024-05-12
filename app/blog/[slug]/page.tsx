import InfoItem from "@/components/InfoItem";
import Title from "@/components/Title";
import { getPostBySlug } from "@/lib/posts";

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  return (
    <>
      <Title>{post.title}</Title>
      <InfoItem>{post.content}</InfoItem>
    </>
  );
}
