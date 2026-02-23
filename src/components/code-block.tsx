import { highlight } from "sugar-high";

interface CodeBlockProps {
  children: string;
  className?: string;
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
  const html = highlight(children.trimEnd());
  return (
    <code
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
