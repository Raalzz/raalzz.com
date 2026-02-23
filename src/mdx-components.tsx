import { Children, isValidElement } from "react";
import type { MDXComponents } from "mdx/types";
import CodeBlock from "@/components/code-block";
import Video from "@/components/video";
import { MdxImage } from "@/components/mdx-image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-xl font-bold mt-8 mb-4 text-foreground">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-base font-semibold mt-6 mb-3 text-foreground">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-sm font-semibold mt-4 mb-2 text-foreground">{children}</h3>
    ),

    p: ({ children }) => (
      <p className="text-sm leading-relaxed mb-4 text-foreground">{children}</p>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside pl-5 mb-4 space-y-1 text-sm text-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside pl-5 mb-4 space-y-1 text-sm text-foreground">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-sm leading-relaxed">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-border pl-4 text-muted-foreground italic mb-4">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-border my-8" />,

    // Paths are auto-resolved relative to /writing/{slug}/ via PostContextProvider.
    // You can write: ![alt](/image.png), ![alt](./image.png), or ![alt](image.png)
    img: ({ src, alt }) => <MdxImage src={src} alt={alt} />,

    pre: ({ children }) => {
      let lang = "";
      Children.forEach(children as React.ReactNode, (child) => {
        if (isValidElement(child)) {
          const cls = (child.props as { className?: string }).className ?? "";
          const match = cls.match(/language-(\w+)/);
          if (match) lang = match[1];
        }
      });

      return (
        <div className="relative mb-6">
          {lang && (
            <span className="absolute right-3 top-2.5 z-10 select-none font-mono text-xs text-[#8b949e]">
              {lang}
            </span>
          )}
          <pre className="overflow-x-auto rounded-lg border border-white/10 bg-[#0d1117] p-4 font-mono text-xs leading-relaxed">
            {children}
          </pre>
        </div>
      );
    },
    code: ({
      children,
      className,
    }: {
      children?: React.ReactNode;
      className?: string;
    }) => {
      if (className?.startsWith("language-")) {
        return (
          <CodeBlock className={className}>{String(children)}</CodeBlock>
        );
      }
      return (
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
          {children}
        </code>
      );
    },

    // Usage: <Video url="https://youtube.com/watch?v=..." />
    //        <Video url="https://vimeo.com/123456" title="My video" />
    Video,

    ...components,
  };
}
