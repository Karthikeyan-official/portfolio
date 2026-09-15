"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { SITE } from "@/lib/site";
import { ProtectedPhoto } from "@/components/shared/ProtectedPhoto";

const navLinks = [
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Certs", href: "certifications" },
  { label: "Publications", href: "publications" },
  { label: "Contact", href: "contact" },
];

const socials = [
  { icon: Github, href: SITE.github, label: "GitHub" },
  { icon: Linkedin, href: SITE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
];

export function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      {/* Gradient accent line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3) 40%, rgba(139,92,246,0.3) 60%, transparent)" }}
      />

      {/* Subtle background */}
      <div className="absolute inset-0 bg-grid-fine opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/20"
                style={{ boxShadow: "0 0 14px rgba(59,130,246,0.3)" }}
              >
                <ProtectedPhoto src="/portrait.jpg" position="center center" />
              </span>
              <span className="font-semibold text-white leading-none">
                Karthikeyan<span className="text-gradient-blue">.dev</span>
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              AI-focused full-stack Senior Software Engineer. I put LLMs, RAG, and agents into real products — not demos.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
              </span>
              <span className="text-xs text-green-400 font-mono">Available for hire</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest mb-4">Navigation</p>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <motion.button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm text-gray-500 hover:text-white transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-blue-500/40 mr-2 group-hover:text-blue-400 transition-colors font-mono text-[10px]">
                    →
                  </span>
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest mb-4">Connect</p>
            <div className="space-y-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center border group-hover:border-white/15 group-hover:bg-white/5 transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs text-gray-700 font-mono">
            © {new Date().getFullYear()} {SITE.name} · Built with Next.js, Tailwind & Framer Motion
          </p>
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-8 h-8 rounded-lg flex items-center justify-center border text-gray-600 hover:text-white transition-all"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            whileHover={{ scale: 1.1, y: -2, borderColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
