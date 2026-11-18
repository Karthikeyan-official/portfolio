"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

type ScrollApi = {
  scrollTo: (target: string | number) => void;
};

const ScrollContext = createContext<ScrollApi>({
  scrollTo: () => {},
});

export function useSmoothScroll() {
  return useContext(ScrollContext);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 0.55,
      touchMultiplier: 0.8,
    });
    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target: string | number) => {
    lenisRef.current?.scrollTo(target, { offset: -8, duration: 1.8 });
  };

  return <ScrollContext.Provider value={{ scrollTo }}>{children}</ScrollContext.Provider>;
}
