"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/writing", label: "Writing" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-row gap-6 md:flex-col md:gap-3">
        {links.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href} className="flex items-center gap-2">
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                  isActive ? "bg-brand" : "bg-transparent"
                }`}
              />
              <Link
                href={href}
                className={`text-sm no-underline transition-colors ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
