"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FadeInView, StaggerContainer, staggerChild } from "@/components/animations/FadeInView";
import { Shield, CreditCard, CheckSquare, ChevronDown } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PCI DSS Client-Side Security Platform",
    description:
      "Built a security monitoring platform validating PCI DSS 4.0.1 compliance for client-side scripts and detecting unauthorized JavaScript injections.",
    longDescription:
      "Architected and developed a comprehensive security monitoring solution that continuously scans and validates client-side JavaScript for PCI DSS 4.0.1 compliance. The platform detects unauthorized script injections, monitors DOM mutations, and provides real-time alerts to security teams through an intuitive dashboard.",
    role: ["Full-stack development", "API architecture", "Security dashboards"],
    tech: ["React", "NestJS", "MongoDB", "WebSocket", "TypeScript"],
    impact: [
      { metric: "80%", label: "Fewer manual checks" },
      { metric: "Real-time", label: "Threat detection" },
      { metric: "Enterprise", label: "Scale" },
    ],
    icon: Shield,
    gradient: "from-blue-600 via-blue-500 to-cyan-400",
    glowColor: "rgba(59,130,246,0.18)",
    borderColor: "rgba(59,130,246,0.2)",
    accentClass: "text-blue-400",
    tagBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    tag: "Enterprise SaaS",
    bgAccent: "rgba(59,130,246,0.04)",
  },
  {
    id: 2,
    title: "Subscription Management Platform",
    description:
      "Developed a Stripe-based subscription billing platform supporting plans, add-ons and automated billing workflows.",
    longDescription:
      "Built a robust subscription management system handling the full billing lifecycle — plan creation, customer onboarding, proration, dunning, and invoice generation. Supports mid-cycle upgrades, usage-based billing, and automated payment retries.",
    role: ["Platform architecture", "Stripe integration", "Billing logic"],
    tech: ["Node.js", "Stripe API", "MongoDB", "React", "NestJS"],
    impact: [
      { metric: "100%", label: "Automated billing" },
      { metric: "Multi-plan", label: "Subscription tiers" },
      { metric: "Auto", label: "Invoice generation" },
    ],
    icon: CreditCard,
    gradient: "from-violet-600 via-violet-500 to-purple-400",
    glowColor: "rgba(139,92,246,0.18)",
    borderColor: "rgba(139,92,246,0.2)",
    accentClass: "text-violet-400",
    tagBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    tag: "SaaS Platform",
    bgAccent: "rgba(139,92,246,0.04)",
  },
  {
    id: 3,
    title: "Action Point Management System",
    description:
      "Internal product used by teams to track action items across projects with threaded comments, tagging, and activity timeline.",
    longDescription:
      "Designed and built a comprehensive action point tracking system — the single source of truth for team accountability. Features threaded comments, @mention notifications, evidence attachments, role-based access, and detailed activity timelines.",
    role: ["System design", "Full-stack dev", "UX architecture"],
    tech: ["React", "NestJS", "MongoDB", "TypeScript", "Socket.io"],
    impact: [
      { metric: "40%", label: "Faster resolution" },
      { metric: "RBAC", label: "Access control" },
      { metric: "Teams", label: "Collaboration" },
    ],
    icon: CheckSquare,
    gradient: "from-cyan-600 via-cyan-500 to-teal-400",
    glowColor: "rgba(34,211,238,0.18)",
    borderColor: "rgba(34,211,238,0.2)",
    accentClass: "text-cyan-400",
    tagBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    tag: "Internal Tool",
    bgAccent: "rgba(34,211,238,0.04)",
  },
];

/* ─── 3D Tilt card ─────────────────────────────────────────── */
function TiltCard({ project }: { project: (typeof projects)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = project.icon;

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useTransform(mouseY, [0, 1], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 1], [-8, 8]);
  const gloss1X = useTransform(mouseX, [0, 1], ["20%", "80%"]);
  const gloss1Y = useTransform(mouseY, [0, 1], ["20%", "80%"]);
  const springRX = useSpring(rotateX, { stiffness: 200, damping: 30 });
  const springRY = useSpring(rotateY, { stiffness: 200, damping: 30 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      variants={staggerChild}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setExpanded(!expanded)}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        rotateX: springRX,
        rotateY: springRY,
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
        border: `1px solid ${project.borderColor}`,
        background: `linear-gradient(135deg, rgba(15,20,35,0.9) 0%, rgba(11,15,25,0.95) 100%)`,
        boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${project.borderColor}`,
      }}
      whileHover={{ y: -6, boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 40px ${project.glowColor}` }}
      layout
      transition={{ layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Dynamic gloss highlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${gloss1X.get()} ${gloss1Y.get()}, rgba(255,255,255,0.05) 0%, transparent 60%)`,
        }}
      />

      {/* Top gradient bar */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${project.gradient}`} />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-start gap-4">
            <motion.div
              className={`w-11 h-11 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}
              style={{ boxShadow: `0 8px 20px ${project.glowColor}` }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Icon className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <span className={`text-[11px] px-2.5 py-1 rounded-full border ${project.tagBg} font-mono`}>
                {project.tag}
              </span>
              <h3 className="text-[15px] font-semibold text-white mt-2 leading-snug group-hover:text-gradient-blue transition-all duration-300">
                {project.title}
              </h3>
            </div>
          </div>

          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className={`w-7 h-7 rounded-lg glass border border-white/10 flex items-center justify-center flex-shrink-0 mt-1 ${project.accentClass}`}
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-[11px] font-mono text-gray-500 bg-white/4 border border-white/7 hover:text-white hover:border-white/15 transition-all"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Impact row */}
        <div className="grid grid-cols-3 gap-2">
          {project.impact.map((imp) => (
            <div
              key={imp.label}
              className="rounded-xl p-3 text-center"
              style={{
                background: project.bgAccent,
                border: `1px solid ${project.borderColor}`,
              }}
            >
              <div className={`text-base font-bold tabular-nums ${project.accentClass}`}>
                {imp.metric}
              </div>
              <div className="text-[10px] text-gray-600 mt-0.5 leading-tight">{imp.label}</div>
            </div>
          ))}
        </div>

        {/* Expanded details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5 border-t border-white/5 space-y-4">
                <p className="text-gray-400 text-[13px] leading-relaxed">
                  {project.longDescription}
                </p>
                <div>
                  <p className="text-[11px] text-gray-600 font-mono mb-2">{"// my role"}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.role.map((r) => (
                      <span
                        key={r}
                        className={`px-3 py-1 rounded-lg text-xs border ${project.tagBg}`}
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="orb w-[500px] h-[500px] -right-32 top-1/4" style={{ background: "rgba(8,145,178,0.07)" }} />
      <div className="orb w-[400px] h-[400px] -left-24 bottom-1/4" style={{ background: "rgba(124,58,237,0.06)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeInView className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-gray-500 font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            featured projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Things I&apos;ve{" "}
            <span className="text-gradient-blue">Built</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Production-grade products across security, billing, and workflow automation.
          </p>
        </FadeInView>

        <StaggerContainer
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 perspective-1000"
          staggerDelay={0.12}
        >
          {projects.map((project) => (
            <TiltCard key={project.id} project={project} />
          ))}
        </StaggerContainer>

        <FadeInView delay={0.4} className="text-center mt-8">
          <span className="text-[11px] text-gray-700 font-mono">
            {"// click any card to expand details"}
          </span>
        </FadeInView>
      </div>
    </section>
  );
}
