"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { AlertCircle, Lightbulb, TrendingUp, CheckCircle, Zap } from "lucide-react";

/* ─── Animated SVG Architecture Diagram ────────────────────── */
function ArchDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const nodes = [
    { id: "client", label: "React Client", sublabel: "SPA / SSR", x: 150, y: 40, color: "#3B82F6", icon: "⚛" },
    { id: "api",    label: "NestJS API",   sublabel: "REST / WS",  x: 150, y: 160, color: "#8B5CF6", icon: "⚡" },
    { id: "auth",   label: "Auth Guard",   sublabel: "JWT / RBAC", x: 310, y: 160, color: "#22D3EE", icon: "🔒" },
    { id: "db",     label: "MongoDB",      sublabel: "Documents",  x: 150, y: 280, color: "#10B981", icon: "🍃" },
    { id: "cache",  label: "Redis Cache",  sublabel: "Sessions",   x: 310, y: 280, color: "#F59E0B", icon: "⚡" },
  ];

  const edges = [
    { from: "client", to: "api",   path: "M150,72 L150,132", dashed: false },
    { from: "api",    to: "auth",  path: "M200,160 L282,160", dashed: true },
    { from: "api",    to: "db",    path: "M150,192 L150,252", dashed: false },
    { from: "api",    to: "cache", path: "M200,180 L292,260", dashed: true },
  ];

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      <svg
        viewBox="0 0 460 340"
        className="w-full max-w-[400px]"
        style={{ overflow: "visible" }}
      >
        {/* Grid */}
        <defs>
          <pattern id="sm-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />
          </pattern>
          <filter id="node-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="rgba(255,255,255,0.2)" />
          </marker>
        </defs>

        <rect width="460" height="340" fill="url(#sm-grid)" rx="12" />

        {/* Edges */}
        {edges.map((e, i) => (
          <motion.path
            key={e.from + e.to}
            d={e.path}
            fill="none"
            stroke={e.dashed ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.18)"}
            strokeWidth={e.dashed ? "1.5" : "2"}
            strokeDasharray={e.dashed ? "5,4" : "none"}
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ delay: 0.4 + i * 0.18, duration: 0.5, ease: "easeOut" }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: i * 0.12,
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {/* Glow halo */}
            <circle cx={n.x} cy={n.y} r="30" fill={n.color} opacity="0.08" />
            <circle cx={n.x} cy={n.y} r="22" fill="rgba(11,15,25,0.95)" stroke={n.color} strokeWidth="1.5" strokeOpacity="0.5" />
            <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="13" fill={n.color}>
              {n.icon}
            </text>

            {/* Label */}
            <text x={n.x} y={n.y + 40} textAnchor="middle" fontSize="9.5" fill="white" fontFamily="monospace" fontWeight="600">
              {n.label}
            </text>
            <text x={n.x} y={n.y + 52} textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="monospace">
              {n.sublabel}
            </text>

            {/* Active dot */}
            <motion.circle
              cx={n.x + 17} cy={n.y - 17} r="4"
              fill={n.color}
              animate={{ opacity: [0.6, 1, 0.6], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.4 }}
            />
          </motion.g>
        ))}

        {/* Data flow animation particles */}
        {inView && [
          { path: "M150,72 L150,132", color: "#3B82F6", delay: 1 },
          { path: "M150,192 L150,252", color: "#8B5CF6", delay: 1.5 },
        ].map((p, i) => (
          <motion.circle
            key={i}
            r="3"
            fill={p.color}
            opacity="0.8"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ delay: p.delay, duration: 1.2, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            style={{ offsetPath: `path("${p.path}")` } as React.CSSProperties}
          />
        ))}
      </svg>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4">
        {[
          { label: "Direct call", color: "rgba(255,255,255,0.3)", dashed: false },
          { label: "Async / guard", color: "rgba(255,255,255,0.15)", dashed: true },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div
              className="w-6 h-[1.5px]"
              style={{
                background: l.dashed ? "none" : l.color,
                borderTop: l.dashed ? `1.5px dashed ${l.color}` : "none",
              }}
            />
            <span className="text-[10px] text-gray-600 font-mono">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CaseStudy() {
  return (
    <section id="case-study" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fine opacity-50" />
      <div className="orb w-[450px] h-[450px] -left-20 top-1/4" style={{ background: "rgba(124,58,237,0.08)" }} />
      <div className="orb w-[300px] h-[300px] right-0 bottom-0" style={{ background: "rgba(37,99,235,0.06)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeInView className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-gray-500 font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            case study
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Deep Engineering{" "}
            <span className="text-gradient-violet">Breakdown</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            How I designed and built the Action Point Management System from the ground up.
          </p>
        </FadeInView>

        {/* Problem / Solution row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <FadeInView direction="left">
            <div
              className="rounded-2xl border border-red-500/15 p-7 h-full"
              style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.04) 0%, rgba(11,15,25,0.8) 100%)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-[10px] text-red-400 font-mono uppercase tracking-wider">Problem</p>
                  <h3 className="font-semibold text-white text-base">The Challenge</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Teams had no single source of truth for action items. Tasks lived scattered across emails, Slack, and spreadsheets — leading to missed deadlines and zero accountability.
              </p>
              <ul className="space-y-2">
                {[
                  "No visibility into task ownership",
                  "Action items falling through the cracks",
                  "No audit trail or evidence tracking",
                  "Manual status updates via email chains",
                ].map((pain) => (
                  <li key={pain} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/60 mt-[6px] flex-shrink-0" />
                    {pain}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>

          <FadeInView direction="right">
            <div
              className="rounded-2xl border border-green-500/15 p-7 h-full"
              style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.04) 0%, rgba(11,15,25,0.8) 100%)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-[10px] text-green-400 font-mono uppercase tracking-wider">Solution</p>
                  <h3 className="font-semibold text-white text-base">What I Built</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                A centralized Action Point system with real-time tracking, threaded discussion threads, evidence attachments, and role-based access — giving every team complete audit visibility.
              </p>
              <ul className="space-y-2">
                {[
                  "Threaded comments with @mention notifications",
                  "Evidence attachment & approval workflows",
                  "Role-based access (Admin / Manager / User)",
                  "Activity timeline with full audit trail",
                  "Priority / status dashboard views",
                ].map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400 mt-[3px] flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>
        </div>

        {/* Architecture / Results row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <FadeInView direction="left" delay={0.1}>
            <div
              className="rounded-2xl border border-blue-500/15 p-7 h-full"
              style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.04) 0%, rgba(11,15,25,0.85) 100%)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] text-blue-400 font-mono uppercase tracking-wider">Architecture</p>
                  <h3 className="font-semibold text-white text-base">System Design</h3>
                </div>
              </div>
              <ArchDiagram />
              <div className="mt-5 p-4 rounded-xl border border-blue-500/10 bg-blue-500/4">
                <p className="text-[10px] font-mono text-blue-400 mb-2">{"// design decisions"}</p>
                {[
                  "Event-driven architecture for real-time updates",
                  "Modular NestJS services with dependency injection",
                  "MongoDB flexible schemas for custom metadata fields",
                ].map((d) => (
                  <p key={d} className="text-[11px] text-gray-600 leading-relaxed">→ {d}</p>
                ))}
              </div>
            </div>
          </FadeInView>

          <FadeInView direction="right" delay={0.1}>
            <div
              className="rounded-2xl border border-white/8 p-7 h-full flex flex-col"
              style={{ background: "linear-gradient(135deg, rgba(15,20,35,0.8) 0%, rgba(11,15,25,0.9) 100%)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-[10px] text-green-400 font-mono uppercase tracking-wider">Result</p>
                  <h3 className="font-semibold text-white text-base">Impact Delivered</h3>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                {[
                  { value: "40%", label: "Faster task resolution across all teams", color: "text-green-400", border: "border-green-500/15", bg: "bg-green-500/4" },
                  { value: "100%", label: "Full audit trail visibility on every action", color: "text-blue-400", border: "border-blue-500/15", bg: "bg-blue-500/4" },
                  { value: "RBAC", label: "Role-based access with granular permissions", color: "text-violet-400", border: "border-violet-500/15", bg: "bg-violet-500/4" },
                  { value: "0", label: "Manual email status updates after rollout", color: "text-cyan-400", border: "border-cyan-500/15", bg: "bg-cyan-500/4" },
                ].map((r) => (
                  <motion.div
                    key={r.value}
                    className={`flex items-center gap-4 p-4 rounded-xl border ${r.border} ${r.bg}`}
                    whileHover={{ x: 4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className={`text-2xl font-bold tabular-nums ${r.color} min-w-[3.5rem] text-center`}>
                      {r.value}
                    </div>
                    <div className="h-8 w-px bg-white/6" />
                    <p className="text-sm text-gray-400 leading-tight">{r.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 p-4 rounded-xl border border-white/5 bg-white/2">
                <p className="text-sm text-gray-400 leading-relaxed">
                  The system became the standard tool for all client project reviews, replacing manual tracking and improving team accountability across the board.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
