import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        card: "#111827",
        "card-hover": "#1a2235",
        primary: "#3B82F6",
        secondary: "#8B5CF6",
        accent: "#22D3EE",
        border: "rgba(255,255,255,0.08)",
        "text-primary": "#ffffff",
        "text-secondary": "#9CA3AF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "particle": "particle 20s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "typewriter": "typewriter 3s steps(30) 1s forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        particle: {
          "0%": { transform: "translateY(100vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100px) rotate(720deg)", opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.15) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(139, 92, 246, 0.15) 0%, transparent 60%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-blue": "0 0 30px rgba(59, 130, 246, 0.4)",
        "glow-violet": "0 0 30px rgba(139, 92, 246, 0.4)",
        "glow-cyan": "0 0 30px rgba(34, 211, 238, 0.4)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(59, 130, 246, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
