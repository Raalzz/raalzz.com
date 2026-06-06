import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing — Rahul Sawant",
  description: "Essays and thoughts on frontend, AI, and product.",
};

export default function Writing() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 sm:px-8 pt-10 pb-20">
      {posts.length === 0 ? (
        <p className="text-sm text-text-3">No posts yet.</p>
      ) : (
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/writing/${post.slug}`}
                className="group flex items-start gap-4 no-underline"
              >
                <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-xs text-text-3">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <h2 className="text-sm font-medium text-text-1 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-text-2 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
