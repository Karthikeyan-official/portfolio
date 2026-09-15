"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { Rocket, Brain, Code2 } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Startup Environment",
    description:
      "Thrived in fast-paced startups shipping production features every sprint. Comfortable with ambiguity, rapid iteration, and tight deadlines.",
    gradient: "from-blue-500 to-cyan-400",
    border: "border-blue-500/20",
    glow: "rgba(59,130,246,0.1)",
    accent: "text-blue-400",
  },
  {
    icon: Brain,
    title: "AI in the product loop",
    description:
      "I treat models like another production dependency: retrieval, evals, fallbacks, and a UI that security teams can trust.",
    gradient: "from-violet-500 to-purple-400",
    border: "border-violet-500/20",
    glow: "rgba(139,92,246,0.1)",
    accent: "text-violet-400",
  },
  {
    icon: Code2,
    title: "End-to-End Ownership",
    description:
      "From database schema design to UI micro-interactions — I own features completely, front to back, design to deployment.",
    gradient: "from-cyan-500 to-teal-400",
    border: "border-cyan-500/20",
    glow: "rgba(34,211,238,0.1)",
    accent: "text-cyan-400",
  },
];

const specs = [
  { label: "LLMs, RAG & Agents", icon: "✦" },
  { label: "AWS Solutions Architect", icon: "☁" },
  { label: "Production Full-Stack", icon: "⚡" },
  { label: "NestJS & React", icon: "⚛" },
  { label: "Cybersecurity SaaS", icon: "🛡" },
  { label: "API Design", icon: "🔌" },
];

function RevealText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <motion.div
        className="orb w-[550px] h-[550px] -left-40 top-1/2 -translate-y-1/2"
        style={{ background: "rgba(124,58,237,0.07)", y }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeInView className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-gray-500 font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            about me
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Engineered for{" "}
            <span className="text-gradient-blue">Impact</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Building products that matter — AI in the loop, systems that scale.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — bio */}
          <div className="space-y-5">
            <RevealText>
              <div
                className="rounded-2xl border border-white/7 p-8 space-y-5"
                style={{ background: "linear-gradient(135deg, rgba(15,20,35,0.8) 0%, rgba(11,15,25,0.9) 100%)" }}
              >
                <RevealText delay={0.05}>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I&apos;m an AI-focused full-stack{" "}
                    <span className="text-white font-semibold">Senior Software Engineer</span>{" "}
                    with 4+ years shipping cybersecurity SaaS — and putting LLMs, RAG, and agents into those products.
                  </p>
                </RevealText>

                <RevealText delay={0.12}>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    I specialize in production AI on a full stack: retrieval, tool-calling agents, NestJS services, and React surfaces teams actually use.
                  </p>
                </RevealText>

                <RevealText delay={0.18}>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    I&apos;ve owned product architecture, billing, RBAC, and the AI pieces that have to survive production — not just a notebook demo.
                  </p>
                </RevealText>

                {/* Specializations */}
                <RevealText delay={0.24}>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-[11px] text-gray-600 font-mono mb-3">{"// I specialize in"}</p>
                    <div className="flex flex-wrap gap-2">
                      {specs.map((spec, i) => (
                        <motion.span
                          key={spec.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.04 }}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-gray-300 border border-white/7 hover:border-blue-500/30 hover:text-white hover:bg-blue-500/5 transition-all cursor-default"
                          whileHover={{ scale: 1.04, y: -1 }}
                          style={{ background: "rgba(255,255,255,0.02)" }}
                        >
                          <span>{spec.icon}</span>
                          {spec.label}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </RevealText>
              </div>
            </RevealText>

            {/* Quick metrics */}
            <RevealText delay={0.1}>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "4+", label: "Years", color: "text-blue-400", glow: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.15)" },
                  { value: "10+", label: "Products", color: "text-violet-400", glow: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.15)" },
                  { value: "20+", label: "Features", color: "text-cyan-400", glow: "rgba(34,211,238,0.12)", border: "rgba(34,211,238,0.15)" },
                ].map((m) => (
                  <motion.div
                    key={m.label}
                    className="rounded-xl p-4 text-center cursor-default"
                    style={{ background: m.glow, border: `1px solid ${m.border}` }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className={`text-2xl font-bold tabular-nums ${m.color}`}>{m.value}</div>
                    <div className="text-xs text-gray-600 mt-1 font-medium">{m.label}</div>
                  </motion.div>
                ))}
              </div>
            </RevealText>
          </div>

          {/* Right — highlight cards */}
          <div className="space-y-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`rounded-2xl border ${h.border} p-6 group cursor-default`}
                  style={{
                    background: `linear-gradient(135deg, ${h.glow} 0%, rgba(11,15,25,0.9) 100%)`,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  }}
                  whileHover={{ x: 5, boxShadow: `0 8px 40px rgba(0,0,0,0.3), 0 0 25px ${h.glow}` }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${h.gradient} flex items-center justify-center flex-shrink-0`}
                      style={{ boxShadow: `0 6px 16px ${h.glow}` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className={`font-semibold text-white mb-1.5 group-hover:${h.accent} transition-colors`}>
                        {h.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{h.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
