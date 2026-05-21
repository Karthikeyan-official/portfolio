"use client";

import { motion } from "framer-motion";
import { FadeInView, StaggerContainer, staggerChild } from "@/components/animations/FadeInView";
import { Code2, Database, CreditCard, Layers, Package, Shield, Zap, GitBranch } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "Role-Based UI Architecture",
    description: "Scalable RBAC system with permission-driven component rendering and route protection.",
    tag: "Architecture",
    gradient: "from-blue-500 to-cyan-400",
    color: "#3B82F6",
    border: "rgba(59,130,246,0.15)",
  },
  {
    icon: Code2,
    title: "Scalable Comment Tagging",
    description: "@mention system with user tagging, notification dispatch, and threaded replies.",
    tag: "System Design",
    gradient: "from-violet-500 to-purple-400",
    color: "#8B5CF6",
    border: "rgba(139,92,246,0.15)",
  },
  {
    icon: CreditCard,
    title: "Stripe Billing Workflows",
    description: "End-to-end subscription flows: checkout, webhooks, dunning, prorations, invoice generation.",
    tag: "Payments",
    gradient: "from-green-500 to-cyan-400",
    color: "#10B981",
    border: "rgba(16,185,129,0.15)",
  },
  {
    icon: Database,
    title: "High-Traffic MongoDB Schemas",
    description: "Optimized document schemas with strategic indexing and aggregation pipelines.",
    tag: "Database",
    gradient: "from-amber-500 to-orange-400",
    color: "#F59E0B",
    border: "rgba(245,158,11,0.15)",
  },
  {
    icon: Package,
    title: "Reusable Component Libraries",
    description: "Shared component libraries with TypeScript generics and design tokens — 60% less duplication.",
    tag: "Frontend",
    gradient: "from-pink-500 to-rose-400",
    color: "#EC4899",
    border: "rgba(236,72,153,0.15)",
  },
  {
    icon: Shield,
    title: "PCI DSS Security Dashboard",
    description: "Real-time script monitoring with WebSocket-driven dashboards surfacing compliance violations.",
    tag: "Security",
    gradient: "from-red-500 to-orange-400",
    color: "#EF4444",
    border: "rgba(239,68,68,0.15)",
  },
  {
    icon: Zap,
    title: "API Performance Optimization",
    description: "Sub-200ms response times via query optimization, Redis caching, and connection pooling.",
    tag: "Performance",
    gradient: "from-yellow-500 to-green-400",
    color: "#EAB308",
    border: "rgba(234,179,8,0.15)",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Setup",
    description: "Automated deployment pipelines with staging/prod environments and zero-downtime deploys.",
    tag: "DevOps",
    gradient: "from-indigo-500 to-blue-400",
    color: "#6366F1",
    border: "rgba(99,102,241,0.15)",
  },
];

const products = [
  { name: "PCI Security Platform", type: "Enterprise SaaS", users: "Enterprise Clients", color: "#3B82F6" },
  { name: "Subscription Platform", type: "SaaS Billing", users: "Startups", color: "#8B5CF6" },
  { name: "Action Point Tracker", type: "Internal Tool", users: "Teams", color: "#22D3EE" },
  { name: "Client Dashboards", type: "Analytics", users: "Enterprise", color: "#10B981" },
];

export function EngineeringHighlights() {
  return (
    <>
      {/* Engineering Highlights */}
      <section id="highlights" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="orb w-[350px] h-[350px] right-[-80px] bottom-1/3" style={{ background: "rgba(37,99,235,0.06)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeInView className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-gray-500 font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              engineering highlights
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What I&apos;ve{" "}
              <span className="text-gradient-blue">Engineered</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Key technical contributions across systems, platforms, and products.
            </p>
          </FadeInView>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            staggerDelay={0.05}
          >
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  variants={staggerChild}
                  className="rounded-2xl p-5 group cursor-default transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${h.color}08 0%, rgba(11,15,25,0.9) 100%)`,
                    border: `1px solid ${h.border}`,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.01,
                    boxShadow: `0 20px 50px rgba(0,0,0,0.4), 0 0 25px ${h.color}20`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <motion.div
                      className={`w-9 h-9 rounded-xl bg-gradient-to-br ${h.gradient} flex items-center justify-center flex-shrink-0`}
                      style={{ boxShadow: `0 4px 12px ${h.color}30` }}
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </motion.div>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full font-mono border mt-0.5"
                      style={{
                        color: h.color,
                        background: `${h.color}12`,
                        borderColor: `${h.color}25`,
                      }}
                    >
                      {h.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5 leading-snug group-hover:text-gradient-blue transition-all">
                    {h.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {h.description}
                  </p>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Products Table */}
      <section id="products" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeInView className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-gray-500 font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              products shipped
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Products I&apos;ve{" "}
              <span className="text-gradient-blue">Shipped</span>
            </h2>
          </FadeInView>

          <FadeInView>
            <div
              className="rounded-2xl border border-white/7 overflow-hidden"
              style={{ background: "rgba(15,20,35,0.7)", boxShadow: "0 20px 50px rgba(0,0,0,0.25)" }}
            >
              {/* Header */}
              <div
                className="grid grid-cols-4 px-7 py-4 border-b"
                style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}
              >
                {["Product", "Type", "Users", "Status"].map((h) => (
                  <span key={h} className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">
                    {h}
                  </span>
                ))}
              </div>

              {products.map((row, i) => (
                <motion.div
                  key={row.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-4 px-7 py-5 border-b last:border-0 group hover:bg-white/[0.015] transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.05)" }}
                >
                  <span
                    className="text-sm font-semibold"
                    style={{ color: row.color }}
                  >
                    {row.name}
                  </span>
                  <span className="text-sm text-gray-500">{row.type}</span>
                  <span className="text-sm text-gray-500">{row.users}</span>
                  <span className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                    </span>
                    <span className="text-[11px] text-green-400 font-mono">Production</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
