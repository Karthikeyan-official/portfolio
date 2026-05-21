"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
      infinite: false,
    });

    /* Feed Lenis time into GSAP ScrollTrigger */
    lenis.on("scroll", () => ScrollTrigger.update());

    const rafId = { current: 0 };
    function raf(time: number) {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }
    rafId.current = requestAnimationFrame(raf);

    /* Make lenis play nicely with GSAP ticker */
    gsap.ticker.lagSmoothing(0);

    return () => {
      cancelAnimationFrame(rafId.current);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
