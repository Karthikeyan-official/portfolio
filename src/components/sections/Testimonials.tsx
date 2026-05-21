"use client";

import { motion } from "framer-motion";
import { FadeInView, StaggerContainer, staggerChild } from "@/components/animations/FadeInView";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Karthikeyan built critical product features quickly and handled complex backend systems reliably. His understanding of the full stack made him indispensable to our team.",
    author: "Team Lead",
    role: "Crossbow Labs",
    avatar: "TL",
    gradient: "from-blue-500 to-cyan-400",
    border: "rgba(59,130,246,0.18)",
    glow: "rgba(59,130,246,0.12)",
  },
  {
    quote: "The security platform he built reduced our compliance overhead dramatically. He understood both the technical requirements and the business implications from day one.",
    author: "Project Manager",
    role: "Enterprise Client",
    avatar: "PM",
    gradient: "from-violet-500 to-purple-400",
    border: "rgba(139,92,246,0.18)",
    glow: "rgba(139,92,246,0.12)",
  },
  {
    quote: "His Stripe integration work was excellent — clean, well-documented, and robust. The subscription platform handles edge cases I didn't even think of when we scoped the project.",
    author: "Product Owner",
    role: "SaaS Startup",
    avatar: "PO",
    gradient: "from-cyan-500 to-teal-400",
    border: "rgba(34,211,238,0.18)",
    glow: "rgba(34,211,238,0.12)",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="orb w-[400px] h-[400px] -left-20 top-1/2 -translate-y-1/2" style={{ background: "rgba(124,58,237,0.07)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeInView className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-gray-500 font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What People{" "}
            <span className="text-gradient-violet">Say</span>
          </h2>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.12}>
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={staggerChild}
              className="flex flex-col p-7 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${t.glow} 0%, rgba(11,15,25,0.9) 100%)`,
                border: `1px solid ${t.border}`,
              }}
              whileHover={{
                y: -8,
                scale: 1.01,
                boxShadow: `0 30px 60px rgba(0,0,0,0.4), 0 0 30px ${t.glow}`,
              }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <Quote className="w-7 h-7 text-gray-800 mb-5 shrink-0" />
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-xs font-bold text-white shrink-0`}
                  style={{ boxShadow: `0 4px 12px ${t.glow}` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.author}</div>
                  <div className="text-xs text-gray-600">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
