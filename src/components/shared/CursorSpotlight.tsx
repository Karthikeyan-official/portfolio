"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorSpotlight() {
  const [visible, setVisible] = useState(false);

  // All useSpring calls must be at the top level — never inside JSX or style props
  const rawX = useMotionValue(-300);
  const rawY = useMotionValue(-300);

  // Tight spring for the small dot
  const dotX = useSpring(rawX, { stiffness: 120, damping: 28, mass: 0.5 });
  const dotY = useSpring(rawY, { stiffness: 120, damping: 28, mass: 0.5 });

  // Slower spring for the large ambient glow
  const glowX = useSpring(rawX, { stiffness: 50, damping: 25 });
  const glowY = useSpring(rawY, { stiffness: 50, damping: 25 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [rawX, rawY]);

  return (
    <>
      {/* Large ambient glow — follows cursor slowly */}
      <motion.div
        className="fixed pointer-events-none z-0"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.035) 0%, transparent 70%)",
          transition: "opacity 0.4s",
        }}
      />

      {/* Small precise dot — snappy follow */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 0.5 : 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "rgba(59,130,246,0.9)",
          boxShadow: "0 0 10px rgba(59,130,246,0.7)",
          transition: "opacity 0.3s",
          mixBlendMode: "screen" as const,
        }}
      />
    </>
  );
}
