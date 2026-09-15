"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import { ProtectedPhoto } from "@/components/shared/ProtectedPhoto";

/* ─── Static particle data (avoids hydration mismatch) ─────── */
const PARTICLES = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: ((i * 37 + 11) % 100),
  top: ((i * 53 + 7) % 100),
  size: i % 3 === 0 ? 1.5 : i % 3 === 1 ? 1 : 0.75,
  duration: 4 + (i % 6),
  delay: (i * 0.3) % 5,
  color: i % 4 === 0 ? "bg-cyan-400/40" : i % 4 === 1 ? "bg-violet-400/30" : "bg-blue-400/35",
  xRange: ((i * 17) % 30) - 15,
}));

const codeLines = [
  { text: "const engineer = {", color: "text-blue-400", delay: 0.5 },
  { text: '  role: "AI Full-Stack SSE",', color: "text-emerald-400", delay: 0.65 },
  { text: "  ai: [", color: "text-gray-400", delay: 0.8 },
  { text: '    "LLMs", "RAG",', color: "text-rose-300", delay: 0.95 },
  { text: '    "Agents"', color: "text-rose-300", delay: 1.1 },
  { text: "  ],", color: "text-gray-400", delay: 1.22 },
  { text: '  stack: ["React", "NestJS"]', color: "text-amber-300", delay: 1.34 },
  { text: '  available: true', color: "text-cyan-400", delay: 1.46 },
  { text: "}", color: "text-blue-400", delay: 1.58 },
];

const titles = [
  "AI-Focused Full-Stack Engineer",
  "AWS Certified Solutions Architect",
  "Senior Software Engineer",
  "LLMs, RAG & Product Systems",
];

function PortraitStage({ mx, my }: { mx: number; my: number }) {
  return (
    <motion.div
      className="relative w-full max-w-[440px] mx-auto h-[420px] sm:h-[520px] lg:h-[580px]"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateY: mx * 5, rotateX: -my * 3 }}
      transition={{ type: "spring", stiffness: 80, damping: 25 }}
    >
      <div
        className="absolute -inset-8 rounded-full bg-blue-600/20 blur-[80px] pointer-events-none"
        aria-hidden
      />
      <div className="absolute -right-6 top-16 h-40 w-40 rounded-full bg-violet-600/20 blur-[60px] pointer-events-none" />

      <div
        className="relative h-full overflow-hidden rounded-[2rem] border border-white/10"
        style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(59,130,246,0.12)" }}
      >
        <ProtectedPhoto src="/portrait.jpg" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/40 via-transparent to-transparent lg:from-transparent" />
      </div>

      <motion.div
        className="absolute top-5 right-5 z-20 glass-card rounded-full border border-green-500/25 px-3 py-1.5 flex items-center gap-2"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3), 0 0 15px rgba(34,197,94,0.12)" }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs text-green-400 font-mono">open to work</span>
      </motion.div>

      <a
        href="#certifications"
        className="absolute top-16 right-5 z-20 glass-card rounded-full border border-amber-500/30 px-3 py-1.5 flex items-center gap-2 text-xs text-amber-400 font-mono hover:border-amber-400/50 transition-colors"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3), 0 0 12px rgba(245,158,11,0.12)" }}
      >
        AWS SAA-C03
      </a>

      <motion.div
        className="absolute -left-3 sm:-left-8 bottom-8 z-20 w-[min(100%,18.5rem)] glass-card rounded-2xl overflow-hidden border border-white/10"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.45)" }}
      >
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/6 bg-white/[0.03]">
          <div className="w-2 h-2 rounded-full bg-red-500/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
          <div className="w-2 h-2 rounded-full bg-green-500/70" />
          <span className="ml-auto text-[10px] text-gray-600 font-mono">engineer.ts</span>
        </div>
        <div className="p-3 font-mono text-[10px] sm:text-[11px] bg-[#0d1117]/90">
          {codeLines.map((line, i) => (
            <div key={i} className={`flex gap-2 leading-[1.45] ${line.color}`}>
              <span className="select-none text-gray-700 w-3 text-right shrink-0">{i + 1}</span>
              <span className="truncate">{line.text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */
export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const orbX1 = useTransform(smoothX, [-1, 1], [-30, 30]);
  const orbY1 = useTransform(smoothY, [-1, 1], [-30, 30]);
  const orbX2 = useTransform(smoothX, [-1, 1], [20, -20]);
  const orbY2 = useTransform(smoothY, [-1, 1], [20, -20]);
  // These MUST be declared here at top-level — never inside JSX style props
  const orbX3 = useTransform(smoothX, [-1, 1], [-15, 15]);
  const orbY3 = useTransform(smoothY, [-1, 1], [-15, 15]);

  const [dashX, setDashX] = useState(0);
  const [dashY, setDashY] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const len = titles.length;
    const id = setInterval(() => setTitleIndex((i) => (i + 1) % len), 3200);
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const nx = (clientX / innerWidth - 0.5) * 2;
    const ny = (clientY / innerHeight - 0.5) * 2;
    mouseX.set(nx);
    mouseY.set(ny);
    setDashX(nx);
    setDashY(ny);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid" />

      {/* Gradient vignette */}
      <div className="absolute inset-0 hero-vignette pointer-events-none" />

      {/* Ambient orbs */}
      <motion.div
        className="orb w-[700px] h-[700px] -top-48 -left-48 bg-blue-700/10"
        style={{ x: orbX1, y: orbY1 }}
      />
      <motion.div
        className="orb w-[500px] h-[500px] -bottom-32 -right-32 bg-violet-700/10"
        style={{ x: orbX2, y: orbY2 }}
      />
      <motion.div
        className="orb w-[350px] h-[350px] top-[35%] right-[22%] bg-cyan-700/10"
        style={{ x: orbX3, y: orbY3 }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute rounded-full ${p.color}`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size * 4,
              height: p.size * 4,
            }}
            animate={{
              y: [0, -24, 0],
              x: [0, p.xRange, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[82vh]">

          {/* ── Left column ── */}
          <div className="space-y-7">

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-green-500/20"
              style={{ boxShadow: "0 0 20px rgba(34,197,94,0.08)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-xs text-green-400 font-mono tracking-wide">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h1
                className="font-bold tracking-tight leading-[0.92] text-6xl sm:text-7xl lg:text-8xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className="text-white">Karthikeyan </span>
                <span className="text-gradient-full">Aruldoss</span>
              </motion.h1>
            </motion.div>

            {/* Animated rotating role */}
            <div className="overflow-hidden h-9">
              <AnimatePresence mode="wait">
                <motion.p
                  key={titleIndex}
                  initial={{ y: 32, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -32, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xl sm:text-2xl font-semibold text-gradient-blue"
                >
                  {titles[titleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-400 text-lg max-w-xl leading-relaxed"
            >
              I ship AI into production full-stack systems — LLMs, RAG, and agents on React and NestJS.{" "}
              <span className="text-white font-medium">Senior Software Engineer, end to end.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="group relative flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm overflow-hidden"
                style={{ background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", boxShadow: "0 4px 24px rgba(59,130,246,0.35)" }}
                whileHover={{ scale: 1.04, y: -2, boxShadow: "0 8px 40px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="absolute inset-0 shimmer" />
                <span className="relative">View Projects</span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-medium text-sm hover:border-white/20 hover:bg-white/5 transition-all duration-200"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Mail className="w-4 h-4 text-blue-400" />
                Contact Me
              </motion.a>

              <motion.a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-gray-400 hover:text-white font-medium text-sm hover:border-white/20 transition-all duration-200"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.88 }}
              className="flex flex-wrap gap-0 pt-6 border-t border-white/6"
            >
              {[
                { value: 4, suffix: "+ yrs", label: "Experience", color: "text-blue-400" },
                { value: 10, suffix: "+", label: "Products Built", color: "text-violet-400" },
                { value: 20, suffix: "+", label: "Client Features", color: "text-cyan-400" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className={`pr-8 ${i < 2 ? "mr-8 border-r border-white/8" : ""}`}
                >
                  <div className={`text-2xl font-bold tabular-nums ${s.color}`}>
                    {s.value}{s.suffix}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 font-medium">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column — portrait ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-first lg:order-none pt-4 lg:pt-0"
          >
            <PortraitStage mx={dashX} my={dashY} />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-default"
        >
          <span className="text-[10px] text-gray-700 font-mono tracking-widest uppercase">scroll</span>
          <motion.div
            className="w-[1px] h-10 origin-top"
            style={{
              background: "linear-gradient(to bottom, rgba(59,130,246,0.5), transparent)",
            }}
            animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
