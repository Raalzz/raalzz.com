import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/writing");

function resolveCoverImage(coverImage: string, slug: string): string {
  if (coverImage.startsWith("/")) {
    return `/writing/${slug}${coverImage}`;
  }
  return coverImage;
}

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
};

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.(mdx|md)$/.test(f))
    .map((filename) => {
      const slug = filename.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
      const { data } = matter(raw);
      if (!data.coverImage) {
        throw new Error(
          `Missing required frontmatter field "coverImage" in ${filename}`
        );
      }
      return {
        slug,
        title: data.title ?? "Untitled",
        date: data.date ?? "",
        description: data.description ?? "",
        coverImage: resolveCoverImage(data.coverImage, slug)
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.(mdx|md)$/.test(f))
    .map((f) => f.replace(/\.(mdx|md)$/, ""));
}

export function getPostBySlug(slug: string): PostMeta | null {
  const candidates = [
    path.join(POSTS_DIR, `${slug}.mdx`),
    path.join(POSTS_DIR, `${slug}.md`)
  ];
  const filepath = candidates.find((p) => fs.existsSync(p));
  if (!filepath) return null;

  const raw = fs.readFileSync(filepath, "utf-8");
  const { data } = matter(raw);
  if (!data.coverImage) {
    throw new Error(
      `Missing required frontmatter field "coverImage" in ${slug}.mdx`
    );
  }
  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "",
    description: data.description ?? "",
    coverImage: resolveCoverImage(data.coverImage, slug)
  };
}
