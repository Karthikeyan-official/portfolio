"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
const links = [
  ["Work", "projects"],
  ["Experience", "experience"],
  ["Writing", "publications"],
  ["Contact", "contact"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#1a1814]/10 bg-[#f4f1ea]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-sm font-medium">
          Karthikeyan A.
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => (
            <button key={id} type="button" onClick={() => go(id)} className="text-sm text-[#6b645c] hover:text-[#1a1814]">
              {label}
            </button>
          ))}
          <button type="button" onClick={() => go("contact")} className="rounded-full bg-[#1a1814] px-4 py-2 text-sm text-[#f4f1ea]">
            Hire me
          </button>
        </nav>
        <button type="button" className="md:hidden" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-1 border-t border-[#1a1814]/10 px-6 py-4 md:hidden">
          {links.map(([label, id]) => (
            <button key={id} type="button" onClick={() => go(id)} className="py-2 text-left text-sm">
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
