"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/", label: "work" },
  { href: "/writing", label: "writing" },
  { href: "/#", label: "talks" },
  { href: "/#", label: "about" }
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 sm:px-8 h-[52px]"
      style={{
        background: "var(--bg-2)",
        borderBottom: "0.5px solid var(--border-subtle)"
      }}
    >
      <Link
        href="/"
        className="text-base font-semibold text-text-1 no-underline tracking-tight leading-none hover:opacity-100"
      >
        raalzz<span className="text-accent">.</span>
      </Link>

      <div className="flex items-center gap-6">
        <ul className="hidden sm:flex items-center gap-6 list-none m-0 p-0">
          {links.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm no-underline transition-colors hover:opacity-100 ${
                    isActive ? "text-accent" : "text-text-3 hover:text-accent"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <ThemeToggle />

        <div
          className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"
          style={{ animation: "dot-pulse 2.5s ease-in-out infinite" }}
          title="Open to work"
          aria-hidden
        />
      </div>
    </nav>
  );
}
