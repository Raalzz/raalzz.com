import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Rahul`,
    description: post.description,
  };
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Dynamically import the MDX file matching the slug
  let Content: React.ComponentType;
  try {
    const mod = await import(`@/content/writing/${slug}.mdx`);
    Content = mod.default;
  } catch {
    notFound();
  }

  return (
    <article>
      <div className="mb-8">
        <Link
          href="/writing"
          className="text-xs text-muted-foreground no-underline hover:text-foreground transition-colors"
        >
          ← Writing
        </Link>
      </div>

      <header className="mb-8">
        <p className="text-xs text-muted-foreground mb-2">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="text-lg font-bold text-foreground leading-snug">
          {post.title}
        </h1>
      </header>

      <div className="prose-content">
        <Content />
      </div>
    </article>
  );
}
