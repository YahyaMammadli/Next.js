import type { ReactNode } from "react";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const features: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Supreme Beans",
    text: "Beans that provides great taste",
    icon: (
      <svg viewBox="0 0 64 64" {...stroke}>
        <ellipse cx="32" cy="32" rx="14" ry="22" transform="rotate(35 32 32)" />
        <path d="M22 18c8 6 6 14 12 18s8 8 8 12" />
      </svg>
    ),
  },
  {
    title: "High Quality",
    text: "We provide the highest quality",
    icon: (
      <svg viewBox="0 0 64 64" {...stroke}>
        <circle cx="32" cy="26" r="16" />
        <path d="m32 17 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
        <path d="m22 40-6 18 10-4 6 8 4-14M42 40l6 18-10-4" />
      </svg>
    ),
  },
  {
    title: "Extraordinary",
    text: "Coffee like you have never tasted",
    icon: (
      <svg viewBox="0 0 64 64" {...stroke}>
        <path d="M10 26h38v10a16 16 0 0 1-16 16h-6a16 16 0 0 1-16-16z" />
        <path d="M48 30h4a6 6 0 0 1 0 12h-6M6 56h48" />
        <path d="M22 8c-3 4 3 6 0 10M32 8c-3 4 3 6 0 10M42 8c-3 4 3 6 0 10" />
      </svg>
    ),
  },
  {
    title: "Affordable Price",
    text: "Our Coffee prices are easy to afford",
    icon: (
      <svg viewBox="0 0 64 64" {...stroke}>
        <circle cx="40" cy="22" r="16" />
        <path d="M40 13v18M45 17c-2-3-10-3-10 1s10 3 10 7-8 4-10 1" />
        <path d="M8 38h10v20H8zM18 42l14-2 14 4c3 1 2 5-1 5H30" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-10 py-16 text-center">
      <h2 className="font-playfair text-5xl font-bold text-brown md:text-6xl">Why are we different?</h2>
      <p className="mt-4 font-playfair text-lg text-muted">We don&apos;t just make your coffee, we make your day!</p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <article
            key={f.title}
            className={`border border-accent/20 px-6 py-10 transition hover:bg-[#ffecd6] ${i === 0 ? "bg-[#ffecd6]" : "bg-card"}`}
          >
            <div className="mx-auto h-20 w-20 text-black">{f.icon}</div>
            <h3 className="mt-6 font-playfair text-2xl font-bold text-brown">{f.title}</h3>
            <p className="mt-3 font-playfair text-lg text-muted">{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
