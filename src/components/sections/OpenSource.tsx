"use client";

import { motion } from "framer-motion";
import { FadeInView, StaggerContainer, staggerChild } from "@/components/animations/FadeInView";
import { Github, Star, GitFork, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

const experiments = [
  {
    name: "react-form-wizard",
    description: "A lightweight, headless multi-step form wizard for React with validation, persistence, and TypeScript support.",
    stars: 42, forks: 8,
    tags: ["React", "TypeScript", "Forms"],
    color: "#3B82F6", border: "rgba(59,130,246,0.18)",
  },
  {
    name: "nestjs-audit-logger",
    description: "A NestJS interceptor that automatically logs all API mutations with user context, before/after state, and timestamp.",
    stars: 28, forks: 5,
    tags: ["NestJS", "Audit", "Logging"],
    color: "#8B5CF6", border: "rgba(139,92,246,0.18)",
  },
  {
    name: "mongo-schema-validator",
    description: "CLI tool to validate MongoDB document structures against Zod schemas — useful for large migration projects.",
    stars: 15, forks: 3,
    tags: ["MongoDB", "Zod", "CLI"],
    color: "#22D3EE", border: "rgba(34,211,238,0.18)",
  },
  {
    name: "ui-component-kit",
    description: "Personal UI component library built with React, Tailwind, and Framer Motion. Used across internal projects.",
    stars: 19, forks: 4,
    tags: ["React", "Tailwind", "UI"],
    color: "#10B981", border: "rgba(16,185,129,0.18)",
  },
];

const githubStats = [
  { label: "Public Repos", value: "20+", icon: "📦" },
  { label: "Commits (2024)", value: "800+", icon: "⚡" },
  { label: "Languages", value: "5+", icon: "💻" },
  { label: "Contributions", value: "1.2k+", icon: "🌟" },
];

/* Deterministic contribution graph */
const CONTRIBUTION_CELLS = Array.from({ length: 52 * 7 }, (_, i) => {
  const seed = (i * 127 + 31) % 100;
  const level = seed > 88 ? 4 : seed > 72 ? 3 : seed > 54 ? 2 : seed > 28 ? 1 : 0;
  return level;
});

const LEVEL_COLORS = [
  "rgba(255,255,255,0.04)",
  "rgba(59,130,246,0.25)",
  "rgba(59,130,246,0.45)",
  "rgba(59,130,246,0.68)",
  "rgba(59,130,246,0.9)",
];

export function OpenSource() {
  return (
    <section id="open-source" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="orb w-[350px] h-[350px] right-[-60px] top-1/4" style={{ background: "rgba(8,145,178,0.06)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeInView className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-gray-500 font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            open source & experiments
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Side Projects &{" "}
            <span className="text-gradient-blue">Experiments</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Tools, utilities and experiments I build in my spare time.
          </p>
        </FadeInView>

        {/* GitHub stats + contribution graph */}
        <FadeInView className="mb-10">
          <div
            className="rounded-2xl border border-white/7 p-6"
            style={{ background: "rgba(15,20,35,0.7)", boxShadow: "0 20px 50px rgba(0,0,0,0.2)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center">
                <Github className="w-4 h-4 text-gray-400" />
              </div>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 font-mono hover:text-white transition-colors"
              >
                github.com/{SITE.githubHandle}
              </a>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                </span>
                <span className="text-[11px] text-green-400 font-mono">active</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {githubStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-4 text-center hover:bg-white/4 transition-colors group"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-xl font-bold text-white group-hover:text-gradient-blue transition-all tabular-nums">
                    {s.value}
                  </div>
                  <div className="text-[10px] text-gray-600 mt-0.5 font-mono">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Contribution graph */}
            <div
              className="rounded-xl p-4"
              style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.04)" }}
            >
              <p className="text-[10px] text-gray-700 font-mono mb-3">{"// contribution activity"}</p>
              <div className="overflow-x-auto">
                <div className="flex gap-[3px]" style={{ minWidth: "max-content" }}>
                  {Array.from({ length: 52 }, (_, week) => (
                    <div key={week} className="flex flex-col gap-[3px]">
                      {Array.from({ length: 7 }, (_, day) => {
                        const level = CONTRIBUTION_CELLS[week * 7 + day];
                        return (
                          <motion.div
                            key={day}
                            className="w-2.5 h-2.5 rounded-[2px] cursor-default"
                            style={{ background: LEVEL_COLORS[level] }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (week * 0.005) + (day * 0.001), duration: 0.15 }}
                            whileHover={{ scale: 1.4 }}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end items-center gap-2 mt-3">
                <span className="text-[10px] text-gray-700 font-mono">Less</span>
                {LEVEL_COLORS.map((c, i) => (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 rounded-[2px]"
                    style={{ background: c }}
                  />
                ))}
                <span className="text-[10px] text-gray-700 font-mono">More</span>
              </div>
            </div>
          </div>
        </FadeInView>

        {/* Project cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.1}>
          {experiments.map((p) => (
            <motion.a
              key={p.name}
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerChild}
              className="block rounded-2xl p-6 group"
              style={{
                background: `linear-gradient(135deg, ${p.color}06 0%, rgba(11,15,25,0.9) 100%)`,
                border: `1px solid ${p.border}`,
              }}
              whileHover={{
                y: -4,
                boxShadow: `0 20px 50px rgba(0,0,0,0.35), 0 0 20px ${p.color}18`,
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-mono font-semibold" style={{ color: p.color }}>
                    {p.name}
                  </span>
                </div>
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-600 group-hover:text-white transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-gray-500 border"
                      style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" /> {p.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" /> {p.forks}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
