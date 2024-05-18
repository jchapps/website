import Title from "@/components/Title";
import markdownToHtml from "@/lib/markdownConverter.ts/markdownToHtml";
import { getPostBySlug } from "@/lib/posts";

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  const content = await markdownToHtml(post.content || "");

  /* TODO: content styles */
  return (
    <>
      <Title>{post.title}</Title>
      <div className="max-w-2xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
}
