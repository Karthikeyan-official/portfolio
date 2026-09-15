"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";

const categories = [
  {
    name: "AI",
    icon: "✦",
    color: "#EC4899",
    gradClass: "from-rose-500 to-violet-400",
    borderClass: "border-rose-500/20",
    glowColor: "rgba(244,63,94,0.12)",
    techs: [
      { name: "LLMs", level: 86, icon: "✦" },
      { name: "RAG", level: 84, icon: "📚" },
      { name: "Agents", level: 80, icon: "◎" },
      { name: "Python", level: 82, icon: "🐍" },
    ],
  },
  {
    name: "Frontend",
    icon: "⚛",
    color: "#3B82F6",
    gradClass: "from-blue-500 to-cyan-400",
    borderClass: "border-blue-500/20",
    glowColor: "rgba(59,130,246,0.12)",
    techs: [
      { name: "React", level: 95, icon: "⚛" },
      { name: "Next.js", level: 92, icon: "▲" },
      { name: "TypeScript", level: 90, icon: "TS" },
      { name: "Tailwind CSS", level: 93, icon: "🎨" },
      { name: "ShadCN UI", level: 85, icon: "◈" },
      { name: "Framer Motion", level: 82, icon: "✦" },
    ],
  },
  {
    name: "Backend",
    icon: "⚡",
    color: "#8B5CF6",
    gradClass: "from-violet-500 to-purple-400",
    borderClass: "border-violet-500/20",
    glowColor: "rgba(139,92,246,0.12)",
    techs: [
      { name: "Node.js", level: 92, icon: "⬢" },
      { name: "NestJS", level: 88, icon: "🐱" },
      { name: "Express", level: 90, icon: "🚂" },
      { name: "REST APIs", level: 95, icon: "🔌" },
      { name: "WebSockets", level: 82, icon: "⚡" },
      { name: "GraphQL", level: 74, icon: "◉" },
    ],
  },
  {
    name: "Database",
    icon: "🍃",
    color: "#22D3EE",
    gradClass: "from-cyan-500 to-teal-400",
    borderClass: "border-cyan-500/20",
    glowColor: "rgba(34,211,238,0.12)",
    techs: [
      { name: "MongoDB", level: 90, icon: "🍃" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "Redis", level: 75, icon: "⚡" },
      { name: "Mongoose", level: 88, icon: "◉" },
    ],
  },
  {
    name: "DevOps",
    icon: "☁",
    color: "#F59E0B",
    gradClass: "from-amber-500 to-orange-400",
    borderClass: "border-amber-500/20",
    glowColor: "rgba(245,158,11,0.12)",
    techs: [
      { name: "Docker", level: 82, icon: "🐳" },
      { name: "AWS", level: 78, icon: "☁" },
      { name: "CI/CD", level: 85, icon: "⚙" },
      { name: "Stripe", level: 88, icon: "💳" },
    ],
  },
];

const extraTechs = [
  "OpenAI", "Embeddings", "LangChain",
  "GSAP", "Three.js", "Prisma", "JWT Auth", "OAuth", "Swagger",
  "Jest", "Postman", "Figma", "Vercel", "PM2", "Nginx",
  "Linux", "Git", "GitHub Actions",
];

function SkillBar({ name, level, icon, color, delay }: {
  name: string; level: number; icon: string; color: string; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.div
      ref={ref}
      className="group flex flex-col gap-1.5"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 2 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm w-5 text-center">{icon}</span>
          <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
        <span className="text-[10px] font-mono tabular-nums" style={{ color }}>
          {level}%
        </span>
      </div>

      {/* Track */}
      <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}cc, ${color}55)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.1, duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export function TechStack() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fine opacity-70" />
      <div className="orb w-[450px] h-[450px] -right-24 top-1/3" style={{ background: "rgba(37,99,235,0.07)" }} />
      <div className="orb w-[350px] h-[350px] -left-16 bottom-1/4" style={{ background: "rgba(124,58,237,0.07)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <FadeInView className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-gray-500 font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            tech stack
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tools of the{" "}
            <span className="text-gradient-violet">Trade</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            The stack I use to ship AI-backed full-stack products.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 mb-8">
          {categories.map((cat, ci) => (
            <FadeInView key={cat.name} delay={ci * 0.09} direction="up">
              <div
                className={`rounded-2xl border ${cat.borderClass} p-5 h-full transition-all duration-300`}
                style={{
                  background: `linear-gradient(135deg, rgba(15,20,35,0.8) 0%, rgba(11,15,25,0.9) 100%)`,
                  boxShadow: `0 0 0 1px ${cat.borderClass.replace("border-", "").replace("/20", "")}20`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${cat.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${cat.borderClass}20`;
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
                  <div
                    className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.gradClass} flex items-center justify-center text-sm font-bold text-white`}
                    style={{ boxShadow: `0 4px 12px ${cat.glowColor}` }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{cat.name}</h3>
                    <p className="text-[10px] font-mono" style={{ color: cat.color }}>
                      {cat.techs.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-3.5">
                  {cat.techs.map((tech, ti) => (
                    <SkillBar
                      key={tech.name}
                      {...tech}
                      color={cat.color}
                      delay={ci * 0.08 + ti * 0.05}
                    />
                  ))}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Also familiar with */}
        <FadeInView delay={0.4}>
          <div
            className="rounded-2xl border border-white/7 p-6"
            style={{ background: "rgba(15,20,35,0.5)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <span className="text-xs text-gray-600 font-mono shrink-0">{"// also familiar with"}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="flex flex-wrap gap-2">
              {extraTechs.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs text-gray-500 border border-white/6 hover:border-white/15 hover:text-white hover:bg-white/4 transition-all duration-200 cursor-default font-mono"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  whileHover={{ scale: 1.06, y: -1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
