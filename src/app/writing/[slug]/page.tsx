import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import { PostContextProvider } from "@/lib/post-context";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Rahul Sawant`,
    description: post.description,
    openGraph: {
      images: [{ url: post.coverImage }],
    },
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

  let Content: React.ComponentType;
  try {
    const mod = await import(`@/content/writing/${slug}.mdx`);
    Content = mod.default;
  } catch {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto px-6 sm:px-8 pt-10 pb-20">
      <div className="mb-6">
        <Link
          href="/writing"
          className="text-xs text-text-3 no-underline hover:text-text-1 transition-colors"
        >
          ← Writing
        </Link>
      </div>

      <div className="relative w-full aspect-video max-h-[400px] overflow-hidden rounded-xl mb-8">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <header className="mb-8">
        <p className="text-xs text-text-3 mb-2">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="text-xl font-serif font-semibold text-text-1 leading-snug">
          {post.title}
        </h1>
      </header>

      <div className="prose-content">
        <PostContextProvider slug={slug}>
          <Content />
        </PostContextProvider>
      </div>
    </article>
  );
}
