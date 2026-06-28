/**
 * @file Marquee
 * @description Infinite scrolling tech marquee with alternating accent colors.
 */
"use client";

const ITEMS = [
  "MACHINE LEARNING",
  "NEURAL NETWORKS",
  "COMPUTER VISION",
  "NLP",
  "AUTOMATION",
  "LLM",
] as const;

const ACCENTS = ["text-neon-cyan", "text-neon-purple", "text-electric-teal"] as const;

export default function Marquee() {
  const content = ITEMS.map((item, i) => (
    <span key={i} className="inline-flex items-center gap-4 whitespace-nowrap">
      <span className="text-mid-grey font-mono text-sm tracking-widest">{item}</span>
      <span className={`${ACCENTS[i % ACCENTS.length]} text-lg`}>✦</span>
    </span>
  ));

  return (
    <div className="border-y border-dark-border overflow-hidden">
      <div className="flex py-6 animate-[marquee_30s_linear_infinite]">
        <div className="flex shrink-0 items-center gap-8">{content}</div>
        <div className="flex shrink-0 items-center gap-8">{content}</div>
        <div className="flex shrink-0 items-center gap-8">{content}</div>
        <div className="flex shrink-0 items-center gap-8">{content}</div>
      </div>
    </div>
  );
}
