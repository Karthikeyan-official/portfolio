"use client";

import { ArrowUpRight } from "lucide-react";
import { ProtectedPhoto } from "@/components/shared/ProtectedPhoto";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-6xl px-6 pb-24 pt-10 lg:pt-16">
      <div className="mb-10 flex items-center justify-between text-xs tracking-wide text-[#6b645c]">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2f7d4a]" />
          Open to senior roles
        </span>
        <span>Chennai, India</span>
      </div>

      <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h1 className="display text-[46px] leading-[0.96] tracking-[-0.03em] text-[#1a1814] sm:text-[68px] lg:text-[80px]">
            Security products
            <span className="italic text-[#b8431f]"> that stay up.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[17px] leading-8 text-[#4a453e]">
            Karthikeyan Aruldoss. I build cybersecurity SaaS end to end — React and NestJS, plus the LLMs, RAG, and agents those products run in production.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex h-12 items-center gap-2 rounded-full bg-[#1a1814] px-5 text-sm text-[#f4f1ea] transition-colors hover:bg-[#2c2823]">
              Selected work
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center rounded-full border border-[#1a1814]/15 bg-white/60 px-5 text-sm transition-colors hover:bg-white">
              LinkedIn
            </a>
          </div>
        </div>

        <figure className="lg:justify-self-end">
          <div className="relative aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-[28px] bg-[#ddd6c8] shadow-[0_24px_60px_rgba(26,24,20,0.12)]">
            <ProtectedPhoto src="/portrait.jpg" />
          </div>
          <figcaption className="mt-4 flex max-w-[380px] items-baseline justify-between text-sm">
            <span>Crossbow Cybersecurity</span>
            <span className="text-[#6b645c]">Senior engineer</span>
          </figcaption>
        </figure>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#1a1814]/10 bg-[#1a1814]/10 sm:grid-cols-4">
        {[
          ["4+", "Years shipping"],
          ["10+", "Products"],
          ["20+", "Client features"],
          ["SAA-C03", "AWS architect"],
        ].map(([value, label]) => (
          <div key={label} className="bg-[#f4f1ea] px-5 py-5">
            <dt className="text-xs text-[#6b645c]">{label}</dt>
            <dd className="display mt-1 text-3xl tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
