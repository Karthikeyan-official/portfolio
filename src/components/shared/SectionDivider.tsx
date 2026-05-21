"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative h-px w-full overflow-visible flex items-center justify-center">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 top-0 h-px origin-center"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.15) 30%, rgba(139,92,246,0.2) 50%, rgba(59,130,246,0.15) 70%, transparent 100%)",
        }}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
        className="relative z-10 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400 to-violet-400 -translate-y-[3px]"
        style={{ boxShadow: "0 0 10px rgba(59,130,246,0.6), 0 0 20px rgba(59,130,246,0.3)" }}
      />
    </div>
  );
}
