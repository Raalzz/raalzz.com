import Link from "next/link";
import { BlrTime } from "@/components/blr-time";

const projects = [
  {
    tag: "Open source",
    name: "LLM Council",
    desc: "Browser-only port of Karpathy's multi-model debate. No backend, OpenRouter keys, token estimation, and markdown export.",
    href: "https://github.com/Raalzz/llm-council-on-browser"
  }
  // {
  //   tag: "GenAI",
  //   name: "Agentic platform",
  //   desc: "Serverless agentic workflows on AWS. Built at AntStack, now powering HashedIn clients at scale."
  // },
  // {
  //   tag: "Serverless",
  //   name: "Zero-infra APIs",
  //   desc: "Lambda + API Gateway patterns that scale to zero and back. Battle-tested across 30+ projects."
  // }
];

const lifeTiles = [
  {
    // href: "/music",
    href: "/#",
    icon: "♪",
    label: "Music",
    value: "See recent listens",
    sub: "Tracked live via Last.fm",
    arrow: "All listens →"
  },
  {
    // href: "/places",
    href: "/#",
    icon: "✈",
    label: "Places",
    value: "Exploring the world",
    sub: "Trips, routes & adventures",
    arrow: "See places →"
  },
  {
    // href: "/games",
    href: "/#",
    icon: "◈",
    label: "Games",
    value: "PS5",
    sub: "Games I've played & playing now",
    arrow: "See games →"
  },
  {
    // href: "/uses",
    href: "/#",
    icon: "⌘",
    label: "Uses",
    value: "Gear & Setup",
    sub: "Devices, tools & daily stack",
    arrow: "See setup →"
  }
];

const writingTags = ["Engineering", "AI", "Serverless", "Frontend"];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="flex flex-col justify-center min-h-[calc(100vh-52px)]">
        <div className="max-w-5xl mx-auto w-full px-6 sm:px-8 pb-16">
          <div className="max-w-[680px]">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs text-text-3"
              style={{ border: "0.5px solid var(--border-subtle)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                style={{ animation: "dot-pulse 2.5s ease-in-out infinite" }}
                aria-hidden
              />
              Bengaluru · <BlrTime />
            </div>

            <h1 className="font-sans font-bold text-[4.5rem] leading-[0.95] tracking-tight text-text-1 mb-4">
              Rahul Sawant
            </h1>

            <p className="text-lg text-text-2 leading-snug mb-4">
              Curious by nature. <span className="text-accent">Engineer</span>{" "}
              by trade.
            </p>

            <p className="text-[13px] text-text-3 leading-relaxed">
              <span className="text-accent">
                Tech Architect @ HashedIn by Deloitte.
              </span>{" "}
              Former Founding Member —{" "}
              <a
                href="https://www.linkedin.com/posts/rajeev-vasudeva-4068b5_hashedin-antstack-aiengineering-ugcPost-7467206362578460672-uZuK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-3 underline underline-offset-2 hover:text-accent transition-colors hover:opacity-100"
              >
                AntStack
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-border-subtle" />

      {/* ── Selected Work ── */}
      <section>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-[52px]">
          <div className="section-label">Selected work</div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-lg overflow-hidden"
            style={{ background: "var(--bg)" }}
          >
            {projects.map(({ tag, name, desc, href }) => {
              const Comp = href ? "a" : "div";
              const linkProps = href
                ? { href, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Comp
                  key={name}
                  {...linkProps}
                  className={`group card-glow bg-surface p-5 flex flex-col gap-3 no-underline ${href ? "cursor-pointer" : "cursor-default"}`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-medium tracking-[0.08em] uppercase px-2 py-0.5 rounded-full"
                      style={{
                        color: "var(--accent)",
                        background: "var(--accent-muted)",
                        border: "0.5px solid var(--accent-border)"
                      }}
                    >
                      {tag}
                    </span>
                    <span className="text-text-3 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                      →
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-text-1 mb-1.5">
                      {name}
                    </h3>
                    <p className="text-xs text-text-3 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </Comp>
              );
            })}
          </div>
        </div>
      </section>

      <div className="h-px bg-border-subtle" />

      {/* ── Writing ── */}
      <section>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-[52px]">
          <div className="section-label">Writing</div>

          <Link
            href="/writing"
            className="group relative block rounded-lg p-6 sm:p-8 no-underline card-glow hover:opacity-100 transition-colors"
            style={{
              background: "var(--surface)",
              border: "0.5px solid var(--border-subtle)"
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-text-3 mb-3">
                  Essays · Technical · Non-technical
                </p>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-text-1 leading-snug mb-3">
                  Thoughts on engineering,
                  <br />
                  AI, and everything else.
                </h2>
                <p className="text-sm text-text-2 leading-relaxed mb-5">
                  Writing helps me think clearly. I publish when something feels
                  worth saying — not on a schedule.
                </p>
                <div className="flex flex-wrap gap-2">
                  {writingTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium tracking-[0.06em] px-2 py-0.5 rounded-full text-text-3"
                      style={{
                        background: "var(--surface-2)",
                        border: "0.5px solid var(--border-subtle)"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-base text-accent transition-colors group-hover:bg-accent group-hover:text-accent-on"
                style={{ background: "var(--accent-muted)" }}
              >
                →
              </div>
            </div>
          </Link>
        </div>
      </section>

      <div className="h-px bg-border-subtle" />

      {/* ── Life ── */}
      <section>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-[52px]">
          <div className="section-label">Life</div>

          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-lg overflow-hidden"
            style={{ background: "var(--border-subtle)" }}
          >
            {lifeTiles.map(({ href, icon, label, value, sub, arrow }) => (
              <Link
                key={href}
                href={href}
                className="group card-glow bg-surface p-5 flex flex-col justify-between gap-4 no-underline hover:opacity-100 hover:bg-surface-2 transition-colors"
              >
                <div>
                  <div className="text-xl mb-3 text-text-2">{icon}</div>
                  <div className="text-[10px] font-medium tracking-[0.08em] uppercase text-text-3 mb-1">
                    {label}
                  </div>
                  <div className="text-sm font-medium text-text-1 mb-1">
                    {value}
                  </div>
                  <div className="text-xs text-text-3 leading-relaxed">
                    {sub}
                  </div>
                </div>
                <div className="text-xs text-text-3 group-hover:text-accent transition-colors">
                  {arrow}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
