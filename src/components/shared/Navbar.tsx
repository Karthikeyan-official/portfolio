"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Publications", href: "publications" },
  { label: "Contact", href: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  /* ── IntersectionObserver for active section ── */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled ? "glass-strong border-b border-white/5 py-3" : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <motion.button
            type="button"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                boxShadow: "0 0 16px rgba(59,130,246,0.35)",
              }}
            >
              K
            </div>
            <span className="font-semibold text-white hidden sm:flex items-center gap-0">
              Karthikeyan
              <span className="text-gradient-blue">.dev</span>
            </span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <motion.button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm rounded-lg transition-colors duration-200",
                    isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                  )}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-lg bg-white/7 border border-white/8"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Hire Me CTA */}
          <div className="hidden md:flex">
            <motion.button
              type="button"
              onClick={() => scrollTo("contact")}
              className="px-5 py-2 text-sm font-medium rounded-lg border border-blue-500/30 text-blue-400 hover:bg-blue-500/8 transition-all duration-200"
              whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(59,130,246,0.25)" }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] group"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-[1.5px] bg-gray-300 origin-center rounded-full"
                animate={
                  mobileOpen
                    ? i === 0 ? { rotate: 45, y: 6.5, width: 20 }
                    : i === 1 ? { opacity: 0, width: 20 }
                    : { rotate: -45, y: -6.5, width: 20 }
                    : { rotate: 0, y: 0, opacity: 1, width: i === 1 ? 14 : 20 }
                }
                transition={{ duration: 0.2 }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 inset-x-3 z-40 glass-strong rounded-2xl border border-white/8 p-5 md:hidden"
            style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)" }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  type="button"
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all",
                    activeSection === link.href
                      ? "bg-blue-500/10 text-white border border-blue-500/20"
                      : "text-gray-400 hover:text-white hover:bg-white/4"
                  )}
                >
                  {activeSection === link.href && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  )}
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-3 mt-1 border-t border-white/6">
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="w-full py-3 rounded-xl text-sm font-medium text-blue-400 border border-blue-500/25 bg-blue-500/6 hover:bg-blue-500/10 transition-all"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
