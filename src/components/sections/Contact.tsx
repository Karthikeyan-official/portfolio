"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { Mail, Github, Linkedin, Download, ArrowRight, Send, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/site";

const contactLinks = [
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: Mail,
    gradient: "from-blue-500 to-cyan-400",
    border: "rgba(59,130,246,0.2)",
    glow: "rgba(59,130,246,0.2)",
  },
  {
    label: "LinkedIn",
    value: SITE.linkedinLabel,
    href: SITE.linkedin,
    icon: Linkedin,
    gradient: "from-blue-600 to-blue-400",
    border: "rgba(96,165,250,0.2)",
    glow: "rgba(96,165,250,0.2)",
  },
  {
    label: "GitHub",
    value: `github.com/${SITE.githubHandle}`,
    href: SITE.github,
    icon: Github,
    gradient: "from-gray-500 to-gray-400",
    border: "rgba(156,163,175,0.15)",
    glow: "rgba(156,163,175,0.1)",
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 5000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fine opacity-40" />

      {/* Central glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-blue-600/6 filter blur-[100px]" />
      </div>
      <div className="orb w-[300px] h-[300px] right-0 top-0 bg-violet-600/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Big CTA ── */}
        <FadeInView className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-green-500/20 text-xs font-mono mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
            </span>
            <span className="text-green-400">available for opportunities</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-[72px] font-bold text-white leading-[1.05] mb-6">
            Let&apos;s build something{" "}
            <br className="hidden sm:block" />
            <motion.span
              className="text-gradient-full inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              great together.
            </motion.span>
          </h2>

          <p className="text-gray-500 text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Open to senior roles where AI meets full-stack product — LLMs, RAG, and systems that have to stay up. Let&apos;s talk.
          </p>

          <motion.a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-lg"
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
              boxShadow: "0 8px 40px rgba(59,130,246,0.4), 0 0 0 1px rgba(59,130,246,0.3)",
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 16px 60px rgba(59,130,246,0.55), 0 0 0 1px rgba(59,130,246,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="w-5 h-5" />
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Left: Links ── */}
          <FadeInView direction="left">
            <div className="space-y-3">
              <p className="text-[11px] text-gray-600 font-mono mb-5">{"// find me at"}</p>

              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-5 rounded-2xl border group transition-all duration-300"
                    style={{
                      background: "rgba(15,20,35,0.6)",
                      border: `1px solid ${link.border}`,
                    }}
                    whileHover={{
                      x: 5,
                      boxShadow: `0 12px 40px rgba(0,0,0,0.3), 0 0 25px ${link.glow}`,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                      style={{ boxShadow: `0 4px 12px ${link.glow}` }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] text-gray-600 font-mono">{link.label}</div>
                      <div className="text-sm text-white font-medium truncate">{link.value}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </motion.a>
                );
              })}

              {/* Resume */}
              <motion.a
                href={`mailto:${SITE.email}?subject=${encodeURIComponent("Resume request")}`}
                className="flex items-center justify-between p-5 rounded-2xl border group transition-all duration-300"
                style={{
                  background: "rgba(139,92,246,0.04)",
                  border: "1px solid rgba(139,92,246,0.2)",
                }}
                whileHover={{
                  x: 5,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.3), 0 0 25px rgba(139,92,246,0.15)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ boxShadow: "0 4px 12px rgba(139,92,246,0.25)" }}
                  >
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-600 font-mono">Download</div>
                    <div className="text-sm text-white font-medium">Resume / CV</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-violet-400 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                  Email
                </span>
              </motion.a>
            </div>
          </FadeInView>

          {/* ── Right: Form ── */}
          <FadeInView direction="right">
            <div
              className="rounded-2xl border border-white/7 p-8"
              style={{
                background: "linear-gradient(135deg, rgba(15,20,35,0.85) 0%, rgba(11,15,25,0.95) 100%)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-14 gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center"
                    >
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </motion.div>
                    <p className="text-white font-semibold text-lg">Opening your email app</p>
                    <p className="text-gray-500 text-sm text-center max-w-xs">
                      Send the draft to reach me directly. I typically reply within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {[
                      { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                      { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="text-[11px] text-gray-600 font-mono mb-1.5 block">
                          {field.label}
                        </label>
                        <motion.input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={form[field.key as "name" | "email"]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          onFocus={() => setFocused(field.key)}
                          onBlur={() => setFocused(null)}
                          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 outline-none transition-all"
                          style={{
                            background: "rgba(255,255,255,0.03)",
                            border: focused === field.key
                              ? "1px solid rgba(59,130,246,0.5)"
                              : "1px solid rgba(255,255,255,0.07)",
                            boxShadow: focused === field.key ? "0 0 20px rgba(59,130,246,0.1)" : "none",
                          }}
                          required
                        />
                      </div>
                    ))}

                    <div>
                      <label className="text-[11px] text-gray-600 font-mono mb-1.5 block">
                        Message
                      </label>
                      <motion.textarea
                        placeholder="Tell me about the opportunity..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        rows={4}
                        className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 outline-none transition-all resize-none"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: focused === "message"
                            ? "1px solid rgba(59,130,246,0.5)"
                            : "1px solid rgba(255,255,255,0.07)",
                          boxShadow: focused === "message" ? "0 0 20px rgba(59,130,246,0.1)" : "none",
                        }}
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-sm text-white"
                      style={{
                        background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                        boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
                      }}
                      whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(59,130,246,0.45)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
