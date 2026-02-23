import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      // Placeholder images (picsum.photos). Remove once you use local images.
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

const withMDX = createMDX({
  options: {
    // String form required for Turbopack compatibility
    remarkPlugins: ["remark-frontmatter", "remark-gfm"],
  },
});

export default withMDX(nextConfig);
