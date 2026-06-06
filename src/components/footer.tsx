const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/raalzz" },
  { label: "GitHub",   href: "https://github.com/raalzz" },
  { label: "X",        href: "https://x.com/raalzz" },
  { label: "Email",    href: "mailto:hi@raalzz.com" },
];

export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between px-6 sm:px-8 h-[52px]"
      style={{ borderTop: "0.5px solid var(--border-subtle)" }}
    >
      <span className="text-xs text-text-3">
        raalzz<span className="text-accent">.</span>{" "}
        <span className="hidden sm:inline">· Bengaluru, IN</span>
      </span>

      <div className="flex items-center gap-4">
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="text-xs text-text-3 hover:text-text-1 hover:opacity-100 transition-colors no-underline"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
