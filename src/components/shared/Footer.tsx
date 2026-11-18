"use client";

import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#1a1814]/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-[#6b645c] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-left hover:text-[#1a1814]">
          Back to top
        </button>
      </div>
    </footer>
  );
}
