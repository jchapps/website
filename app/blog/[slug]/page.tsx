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

  return (
    <>
      <Title>{post.title}</Title>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="[&>h2]:font-semibold text-2xl [&>p]:text-2xl [&>p>img]:w-60 [&>p>img]:m-auto"
      />
    </>
  );
}
