"use client";

import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    code: "SAA-C03",
    issued: "Jul 2026",
    expires: "Jul 2029",
    href: "https://www.credly.com/badges/153bd6d0-222f-49bb-a93c-6a42929c6093",
    accent: "from-amber-500 to-orange-400",
    border: "rgba(245,158,11,0.2)",
    glow: "rgba(245,158,11,0.12)",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fine opacity-50" />
      <div
        className="orb w-[380px] h-[380px] right-[-60px] top-1/3"
        style={{ background: "rgba(245,158,11,0.07)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeInView className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-gray-500 font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            credentials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Licenses &{" "}
            <span className="text-gradient-warm">Certifications</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Credentials from my LinkedIn — production cloud architecture, not just coursework.
          </p>
        </FadeInView>

        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <FadeInView key={cert.name} delay={i * 0.1} direction="up">
              <motion.article
                className="group rounded-2xl border p-6 sm:p-7 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(11,15,25,0.92) 100%)",
                  borderColor: cert.border,
                }}
                whileHover={{
                  borderColor: "rgba(245,158,11,0.4)",
                  boxShadow: `0 20px 50px rgba(0,0,0,0.3), 0 0 28px ${cert.glow}`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cert.accent} flex items-center justify-center flex-shrink-0`}
                    style={{ boxShadow: "0 8px 20px rgba(245,158,11,0.28)" }}
                  >
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono text-amber-400 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                        {cert.code}
                      </span>
                      <span className="text-[10px] font-mono text-gray-600">{cert.issuer}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-snug mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Issued {cert.issued}
                      {cert.expires ? ` · Expires ${cert.expires}` : ""}
                    </p>
                    <motion.a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      View certificate
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
